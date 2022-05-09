import { BASE_URL } from "../global_variables";

export default class PostsMenu extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({ mode: "open" });
	}

	async getPosts() {
		const response = await fetch(BASE_URL + "/garden/_posts.json");
		const json = await response.json();
		return json;
	}

	async connectedCallback() {
		await this.getPosts().then((posts) => {
			let list = "";
			for (const postUrl in posts) {
				const post = posts[postUrl];
				list += `
					<li>
						<a href="${BASE_URL}/garden/${postUrl}.html">${post.title}</a>
					</li>
				`;
			}

			//prettier-ignore
			this.innerHTML = `
            <ul class='posts'>
                ${list}
            </ul>
        `;
		});
	}
}

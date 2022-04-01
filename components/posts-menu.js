class PostsMenu extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({ mode: "open" });
	}

	async getPosts() {
		const response = await fetch("/digital-garden/_posts.json");
		const json = await response.json();
		return json;
	}

	async connectedCallback() {
		await this.getPosts().then((posts) => {
			//prettier-ignore
			this.innerHTML = `

            <ul class='posts'>
                ${Object.keys(posts).map((postUrl) => {
                    const post = posts[postUrl];
                    return `<li><a href="digital-garden/${postUrl}.html">${post.title}</a></li>`;
                })}
            </ul>
        `;
		});
	}
}

customElements.define("posts-menu", PostsMenu);

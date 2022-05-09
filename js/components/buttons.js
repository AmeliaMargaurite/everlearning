export class Button extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// const children = this.innerText;
		const children = this.getAttribute("text");
		const onclick = this.getAttribute("onclick");
		this.innerHTML = `
			<button class='main-button'>${children}</span></button>`;

		const button = this.querySelector("button");
		console.log(onclick);
		if (onclick) {
			button.addEventListener("click", () => onclick);
		}
	}
}

export class HrefButton extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// const children = this.innerText;
		const children = this.getAttribute("text");
		const href = this.getAttribute("href");

		const onclick = this.getAttribute("onclick");
		this.innerHTML = `
			<a class="href-button" href="${href}">${children}</span></a>`;

		const button = this.querySelector("a");
		console.log(onclick);
		if (onclick) {
			button.addEventListener("click", () => onclick);
		}
	}
}

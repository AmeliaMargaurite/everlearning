const mb_css = `
<style>
	button {
		background: var(--secondary);
		color: var(--primary);
		border: 1px solid var(--primary);
		padding: 0.8rem;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
`;

class Button extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// const children = this.innerText;
		const children = this.getAttribute("text");
		const onclick = this.getAttribute("onclick");
		this.innerHTML = `${mb_css}
			<button >${children}</span></button>`;

		const button = this.querySelector("button");
		console.log(onclick);
		if (onclick) {
			button.addEventListener("click", () => onclick);
		}
	}
}

customElements.define("main-button", Button);

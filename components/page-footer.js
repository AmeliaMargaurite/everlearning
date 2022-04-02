const pf_css = `
    <style>
        footer {
            
            width: 100%;
        }
    </style>
`;

const cb_css = `
        <style>
            span#wcb_g {
                color: var(--primary);
                background: var(--secondary) !important;
            }
        </style>
`;

class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const colorMode = localStorage.getItem("color-mode");

		const children = this.innerHTML;
		this.innerHTML = `
        <footer>
        ${children}
        </footer>
        `;
		console.log(this);
		const carbonBadge = this.querySelector("div#wcb");
		console.log(carbonBadge);
		carbonBadge.innerHTML += cb_css;
	}
}

customElements.define("page-footer", Footer);

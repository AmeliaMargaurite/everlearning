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

export default class Footer extends HTMLElement {
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
		const carbonBadge = this.querySelector("div#wcb");
		carbonBadge.innerHTML += cb_css;
	}
}

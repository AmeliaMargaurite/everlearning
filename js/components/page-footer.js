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

export class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const head = document.getElementsByTagName("head")[0];
		const script = document.createElement("script");
		script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
		script.defer = true;

		head.appendChild(script);

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

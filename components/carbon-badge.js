class CarbonBadge extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const colorMode = localStorage.getItem("color-mode");
		this.innerHTML = `
        <div id="wcb" class="carbonbadge ${
					colorMode === "dark" ? "wcb-d" : ""
				}">
                </div>
        <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
        `;
	}
}

customElements.define("carbon-badge", CarbonBadge);

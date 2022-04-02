class CarbonBadge extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		const colorMode = localStorage.getItem("color-mode");
		this.innerHTML = `
        <div id="wcb" class="carbonbadge ${
					colorMode === "dark" ? "wcb-d" : ""
				}">
                </div>
        
        `;
	}
}

customElements.define("carbon-badge", CarbonBadge);

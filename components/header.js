class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const lightMode = {
			"--primary": "var(--dark)",
			"--secondary": "var(--light)",
		};

		const darkMode = {
			"--primary": "var(--light)",
			"--secondary": "var(--dark)",
		};

		const setDarkMode = () => {
			localStorage.setItem("color-mode", "dark");
			Object.keys(darkMode).forEach((prop) =>
				root.style.setProperty(prop, darkMode[prop])
			);
		};

		const setLightMode = () => {
			localStorage.setItem("color-mode", "light");
			Object.keys(lightMode).forEach((prop) => {
				root.style.setProperty(prop, lightMode[prop]);
			});
		};
		const root = document.documentElement;

		const activePage = this.getAttribute("activePage");

		// prettier-ignore
		this.innerHTML = `
		<header>
			<h1>EverLearning <span> w/Amelia</span></h1>

			<div class='menu'>
				<div class='menu--switch' id='switch' ></div>
				<ul>
					<a href="{{ . | relative_url }}" class="${activePage === "home" ? "active" : ""}">
						<li>
						Home
						</li>
					</a>
					<a href="projects.html" class="${activePage === "projects" ? "active" : ""}">
						<li>
						Projects
						</li>
					</a>
					<a href="digital-garden.html" class="${activePage === "digital-garden" ? "active" : ""}">
						<li>
						Digital Garden
						</li>
					</a>
				</ul>
			</div>
		</header>
    `;

		const handleSwitch = () => {
			const colorMode = localStorage.getItem("color-mode");
			const switchBtn = document.getElementById("switch");

			if (colorMode && colorMode === "dark") {
				setLightMode();
				switchBtn.classList.remove("on");
			} else {
				setDarkMode();
				switchBtn.classList.add("on");
			}
		};
		const switchBtn = document.getElementById("switch");
		switchBtn.addEventListener("click", handleSwitch);

		const colorMode = localStorage.getItem("color-mode");

		const prefersDark =
			(window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches) ||
			colorMode === "dark";

		if (prefersDark) {
			setDarkMode();
			switchBtn.classList.add("on");
		} else {
			setLightMode();
			switchBtn.classList.remove("on");
		}
	}
}

customElements.define("header-component", Header);

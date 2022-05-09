export class ClimbingIvy extends HTMLElement {
	constructor() {
		super();

		this.count = 3;
		function increaseCount() {
			return (this.count = +1);
		}
	}

	connectedCallback() {
		const ivy = this.getAttribute("ivy");
		const randomNum = (min, max) =>
			Math.floor(Math.random() * (max - min) + min);

		let pieces = "";
		for (let i = 0; i <= this.count; i++) {
			const left = randomNum(0, 20);
			const bottom = randomNum(0, 100);
			const rotate = randomNum(1, 360);
			const scale = Math.random() * (1.75 - 0.5) + 0.5;
			const styles = `left: ${left}rem; bottom: ${bottom}%; transform: rotate(${rotate}deg) scale(${scale})`;
			pieces += ` <img src='${ivy}' class="ivy" style='${styles}'/>`;
		}
		this.innerHTML = pieces;
	}
}

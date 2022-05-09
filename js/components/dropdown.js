export class DropdownList extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// const options = this.getAttribute("options").split("|");
		// console.log(options);
		const defaultSelection = this.getAttribute("default");
		const name = this.getAttribute("name");

		this.innerHTML = `
                <slot name='select'></slot>
	    `;
	}
}

// Dropdown Items

const dropdown_item_template = `
<template
`;

export class DropdownItem extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({ mode: "open" });
		// this.shadowRoot.innerHTML = `
		// <option>
		// <slot name="options" ></slot>
		// </option>
		// `;
	}

	connectedCallback() {
		this.innerHTML = `
	    <option slot="options">
	    <slot name="options" ></slot>
	    </option>
	    `;
	}
}

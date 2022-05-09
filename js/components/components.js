import { Header } from "./header.js";
import { Footer } from "./page-footer.js";
import { PostsMenu } from "./posts-menu.js";
import { DropdownList, DropdownItem } from "./dropdown.js";
import { ClimbingIvy } from "./climbing-ivy";
import { Button, HrefButton } from "./buttons";

customElements.define("header-component", Header);
customElements.define("page-footer", Footer);
customElements.define("posts-menu", PostsMenu);
customElements.define("dropdown-list", DropdownList);
customElements.define("dropdown-item", DropdownItem);
customElements.define("climbing-ivy", ClimbingIvy);
customElements.define("main-button", Button);
customElements.define("href-button", HrefButton);

import App from "./App";

window.customElements.define("app", App);

const main = document.getElementById("main");
const app = document.createElement("app");

main.appendChild(app);

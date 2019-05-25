import App from "./App";

window.customElements.define("the-app", App);

const main = document.getElementById("main");
const app = document.createElement("the-app");

main.appendChild(app);

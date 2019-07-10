import Stage from "./Stage";
export default Stage;

const name = "the-stage";

if (!window.customElements.get(name)) {
  window.customElements.define(name, Stage);
}

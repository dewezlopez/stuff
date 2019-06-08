import CustomComponent from "./CustomComponent";
export default CustomComponent;

const name = "custom-component";

if (!window.customElements.get(name)) {
  window.customElements.define(name, CustomComponent);
}

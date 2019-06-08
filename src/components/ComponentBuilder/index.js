import ComponentBuilder from "./ComponentBuilder";
export default ComponentBuilder;

const name = "component-builder";

if (!window.customElements.get(name)) {
  window.customElements.define(name, ComponentBuilder);
}

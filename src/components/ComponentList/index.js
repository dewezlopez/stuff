import ComponentList from "./ComponentList";
export default ComponentList;

const name = "component-list";

if (!window.customElements.get(name)) {
  window.customElements.define(name, ComponentList);
}

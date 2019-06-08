import Item from "./Item";
export default Item;

const name = "component-list--item";

if (!window.customElements.get(name)) {
  window.customElements.define(name, Item);
}

import Component from "../_basics/Component";
import Item from "./Item";

class ComponentList extends Component {
  constructor() {
    super("<ul></ul>");
    this._list = [];
    window.customElements.define("component-list--item", Item);
  }

  __add = instance => {
    this._list.push(instance);
    const shadow = this.shadowRoot;
    const ul = shadow.querySelector("ul");
    const item = new Item(instance);
    ul.appendChild(item);
  };
}

export default ComponentList;

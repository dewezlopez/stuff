import Component from "../_basics/Component";

class ComponentList extends Component {
  constructor() {
    super("<ul></ul>");
    this._list = [];
  }

  add = instance => {
    this._list.push(instance);
    const shadow = this.shadowRoot;
    const ul = shadow.querySelector("ul");
    const item = document.createElement("li");
    item.innerHTML = `${instance._id}`;
    ul.appendChild(item);
  };
}

export default ComponentList;

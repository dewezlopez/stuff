import Component from "../../_basics/Component";

class Item extends Component {
  constructor(instance) {
    super({ _innerHtml: `<li><button>${instance._id}</button></li>` });
    const shadow = this.shadowRoot;

    shadow.querySelector("button").addEventListener("click", event => {
      instance.__replace(instance);
    });
  }
}

export default Item;

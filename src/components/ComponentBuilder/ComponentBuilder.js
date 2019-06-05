import Component from "../_basics/Component/";

class ComponentBuilder extends Component {
  constructor(instance) {
    const innerHtml = `<div>${instance._id}</div>`;
    super({ _innerHtml: innerHtml, _type: "ComponentBuilder" });
    this._id = instance._id;
    if (typeof instance.__cb === "function") instance.__cb(this);
  }
}

export default ComponentBuilder;

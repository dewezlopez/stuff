import Component from "../_basics/Component/";

class CustomComponent extends Component {
  constructor(instance) {
    super({
      _innerHtml: `<div>${instance._id}</div>`,
      _id: `${instance._id}`,
      _type: "CustomComponent",
      _name: instance._name,
    });
    this._id = instance._id;
    if (typeof instance.__cb === "function") instance.__cb(this);
  }
}

export default CustomComponent;

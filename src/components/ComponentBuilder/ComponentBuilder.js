import Component from "../_basics/Component/";

class ComponentBuilder extends Component {
  constructor(id) {
    const innerHtml = `<div></div>`;
    super(innerHtml);
    this._id = id;
  }
}

export default ComponentBuilder;

import Component from "../_basics/Component/";

class ComponentBuilder extends Component {
  constructor(id, cb) {
    const innerHtml = `<div></div>`;
    super(innerHtml);
    this._id = id;
    cb(this);
  }
}

export default ComponentBuilder;

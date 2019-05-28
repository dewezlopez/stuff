import Component from "../../_basics/Component";

class Item extends Component {
  constructor(instance) {
    super(`<li><button>${instance._id}</button></li>`);
  }
}

export default Item;

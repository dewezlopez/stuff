import Component from "../_basics/Component";
import Item from "./Item";

/**
 * @class ComponentList
 * @description manages custom components
 */
class ComponentList extends Component {
  constructor() {
    super({ _innerHtml: "<ul></ul>" });
    this._storage = window.localStorage;
    this._list = [];
  }

  /**
   * @method __add
   * @description adds component instance to array
   * @description adds item to list
   */
  __add = instance => {
    if (!this.__find(instance)) {
      this._list.push(instance);
      this.__store();
      this.shadowRoot.querySelector("ul").appendChild(new Item(instance));
    }
  };

  /**
   * @method __find
   * @description finds matching instance in this._list array
   * @returns {boolean} - true if found
   */
  __find = instance => {
    const found = this._list.find(item => {
      return item._id === instance._id;
    });
    return found ? true : false;
  };

  /**
   * @method __store
   * @description stores this._list to localStorage
   * @private
   */
  __store = () => {
    const storeObj = Object.assign({}, this._list.map(item => item._id));
    this._storage.setItem("list", JSON.stringify(storeObj));
  };

  /**
   * @method __restore
   * @description restores this._list from localStorage
   * @private
   */
  __restore = () => {
    const store = JSON.parse(this._storage.getItem("list"));
    for (const item in store) {
      this.__createNew(store[item]);
    }
  };
}

export default ComponentList;

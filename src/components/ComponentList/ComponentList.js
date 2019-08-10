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
    this._listNode = this.shadowRoot.querySelector("ul");
  }

  /**
   * @method __add
   * @description adds component instance to _list
   * @description updates localstorage
   * @description adds item to html list
   */
  __add = instance => {
    if (!this.__find(instance)) {
      this._list.push(instance);
      this.__store();
      this._listNode.appendChild(new Item(instance, this.__store));
    }
  };

  /**
   * @method __delete
   * @description deletes component instance from _list
   * @description updates localstorage
   * @description deletes item from html list
   */
  __delete = instance => {
    if (this._list.indexOf(instance)) {
      this._list = this._list.filter(item => {
        return item !== instance;
      });
      this.__store();
      const itemToRemove = this._listNode.querySelector(
        `#item-${instance._id}`
      );
      this._listNode.removeChild(itemToRemove);
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
    const storeObj = Object.assign({}, this._list.map(item => {
      return {
        _id: item._id,
        _name: item._name,
      }
    }
    ));
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

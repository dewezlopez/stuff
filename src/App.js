import generateId from "./_utils/randomNum";
import Component from "./components/_basics/Component/";
import ComponentBuilder from "./components/ComponentBuilder/";
import ComponentList from "./components/ComponentList/";

class App extends Component {
  constructor() {
    // create "new component" button
    const content = "Create new component";
    const innerHtml = `<button>${content}</button>`;
    super({ _innerHtml: innerHtml });
    const shadow = this.shadowRoot;

    // create list for saved components
    window.customElements.define("component-list", ComponentList);
    this.componentList = new ComponentList({__createNewComponent: this.__createNewComponent});
    shadow.appendChild(this.componentList);

    // generates new custom components
    window.customElements.define("custom-component", ComponentBuilder);
    shadow.querySelector("button").addEventListener("click", () => {
      this.__createNewComponent(`comp-${generateId()}`, instance => {
        instance.__replace = this.__replaceCurrentComponent;
        instance.__replace(instance);
      });
    });
  }

  /**
   * @method __createNewComponent
   * @description replaces the current component builder with one passed as param
   * @param {object} instance - ComponentBuilder instance
   */
  __createNewComponent = (id, cb) => {
    new ComponentBuilder({
      _id: id,
      __cb: cb
    });
  };

  /**
   * @method __replaceCurrentComponent
   * @description replaces the current component builder with one passed as param
   * @param {object} instance - ComponentBuilder instance
   */
  __replaceCurrentComponent = instance => {
    if (typeof this._currentComponent !== "undefined") {
      this.componentList.__add(this._currentComponent);
      this._currentComponent.remove();
    }
    this.shadowRoot.appendChild(instance);
    this._currentComponent = instance;
  };
}

export default App;

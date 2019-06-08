import settings from "./settings";
import generateId from "./_utils/randomNum";
import Component from "./components/_basics/Component/";
import ComponentBuilder from "./components/ComponentBuilder/";
import ComponentList from "./components/ComponentList/";
import CustomComponent from "./components/CustomComponent/";

class App extends Component {
  constructor() {
    // create "new component" button
    const content = "Create new component";
    const innerHtml = `<button>${content}</button>`;
    super({ _innerHtml: innerHtml });
    const shadow = this.shadowRoot;
    // create list for saved components
    this.componentList = new ComponentList();
    this.componentList.__createNew = this.__createNew;
    shadow.appendChild(this.componentList);
    this.componentList.__restore();
    // create stage for saved components
    this.stage = new ComponentBuilder();
    shadow.appendChild(this.stage);

    // generates new custom components
    shadow.querySelector("button").addEventListener("click", () => {
      const instance = this.__createNew();
      this.__replaceCurrent(instance);
    });
  }

  /**
   * @method __createNew
   * @description Creates a new custom component and adds to ComponentList
   * @param {string} id - pre-existing id
   * @return {HTMLElement} - the new component instance
   */
  __createNew = id => {
    id = id || `comp-${generateId()}`;
    const instance = new CustomComponent({
      _id: id
    });
    this.componentList.__add(instance);
    instance.__addToStage = () => this.__replaceCurrent(instance);
    return instance;
  };

  /**
   * @method __replaceCurrent
   * @description replaces the current component builder with one passed as param
   * @param {object} instance - ComponentBuilder instance
   */
  __replaceCurrent = instance => {
    if (typeof this._currentComponent !== "undefined") {
      this._currentComponent.remove();
    }
    this._currentComponent = instance;
    this.__addToStage(instance);
  };

  /**
   * @method __addToStage
   * @description adds a custom component to stage
   * @param {HTMLElement} instance
   */
  __addToStage = instance => {
    this.stage.shadowRoot
      .querySelector(`.${settings.stageClass}`)
      .appendChild(instance);
  };
}

export default App;

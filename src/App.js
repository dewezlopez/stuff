import generateId from "./_utils/randomNum";
import Component from "./components/_basics/Component/";
import ComponentBuilder from "./components/ComponentBuilder/";
import ComponentList from "./components/ComponentList/";

class App extends Component {
  constructor() {
    const content = "Create new component";
    const innerHtml = `<button>${content}</button>`;
    super(innerHtml);
    const shadow = this.shadowRoot;
    const button = shadow.querySelector("button");
    window.customElements.define("custom-component", ComponentBuilder);
    window.customElements.define("component-list", ComponentList);
    const componentList = document.createElement("component-list");
    shadow.appendChild(componentList);

    button.addEventListener("click", event => {
      const componentId = `comp-${generateId()}`;
      new ComponentBuilder(componentId, instance => {
        shadow.appendChild(instance);
        if (typeof this.currentComponent !== "undefined") {
          componentList.__add(instance);
          this.currentComponent.remove();
        }
        this.currentComponent = instance;
      });
    });
  }
}

export default App;

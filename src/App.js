import generateId from "./_utils/randomNum";
import Component from "./components/_basics/Component/";
import ComponentBuilder from "./components/ComponentBuilder/";

class App extends Component {
  constructor() {
    const content = "Create new component";
    const innerHtml = `<button>${content}</button>`;
    super(innerHtml);
    const shadow = this.shadowRoot;
    const button = shadow.querySelector("button");

    button.addEventListener("click", event => {
      const componentId = `comp-${generateId()}`;
      window.customElements.define(componentId, ComponentBuilder);
      const component = document.createElement(componentId);
      shadow.appendChild(component);
    });
  }
}

export default App;

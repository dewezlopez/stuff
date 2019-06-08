import settings from "../../settings";
import Component from "../_basics/Component/";

class ComponentBuilder extends Component {
  constructor() {
    const innerHtml = `<div class="${settings.stageClass}"></div>`;
    super({ _innerHtml: innerHtml, _type: "ComponentBuilder" });
  }
}

export default ComponentBuilder;

import settings from "../../settings";
import Component from "../_basics/Component";

class Stage extends Component {
  constructor() {
    const innerHtml = `<div class="${settings.stageClass}"></div>`;
    super({ _innerHtml: innerHtml, _type: "Stage" });
  }
}

export default Stage;

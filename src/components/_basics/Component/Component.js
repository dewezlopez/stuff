class Component extends HTMLElement {
  constructor(props) {
    super();
    this._innerHtml = props._innerHtml;
    this._type = props._type || "anon";
    this.attachShadow({ mode: "open" });
    this.__attachContent();
  }

  __attachContent = () => {
    this.shadowRoot.innerHTML = this._innerHtml;
  };
}

export default Component;

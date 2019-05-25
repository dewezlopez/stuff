class Component extends HTMLElement {
  constructor(_innerHtml) {
    super();
    this._innerHtml = _innerHtml;
    this.attachShadow({ mode: "open" });
    this.__attachContent();
  }

  __attachContent = () => {
    this.shadowRoot.innerHTML = this._innerHtml;
  };

  _content = "Lorem Ipsum";
  _innerHTML = `${this._content}`;
}

export default Component;

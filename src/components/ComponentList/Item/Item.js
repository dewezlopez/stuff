class Item {
  constructor(instance) {
    this._itemNode = document.createElement("li");
    this._itemNode.innerHTML = `
      <button class="c-select">${instance._id}</button>
      <button class="c-edit">E</button>
      <button class="c-delete">D</button>
    `;
    this._itemNode.id = `item-${instance._id}`;

    // Event for select button
    this._itemNode
      .querySelector(".c-select")
      .addEventListener("click", event => {
        instance.__addToStage();
      });

    // this.querySelector(".c-edit").addEventListener("click", event => {
    //   //instance.__edit();
    // });

    // Event for delete button
    this._itemNode
      .querySelector(".c-delete")
      .addEventListener("click", event => {
        instance.__delete();
      });

    return this._itemNode;
  }
}

export default Item;

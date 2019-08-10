import onChange from 'on-change';
class Item {
  constructor(instance, saveFn) {
    this._instance = instance;
    this._itemNode = document.createElement("li");
    this._itemNode.id = `item-${instance._id}`;
    this.__save = saveFn;
    this.__createState();
    this.__buildNodes();
    this.__render();
    return this._itemNode;
  }

  /**
   * @private
   */
  __createState = () => {
    this._state = {};
    this._state._isEditing = false;

    this._workingState = onChange(this._state, () => {
      this._itemNode.innerHTML = "";
      this._selectButton.innerHTML = this._state._name;
      this.__render();
    })
  }


  /**
   * @method __buildButton
   * @description builds a button with label and onClick event
   * @param {string} label - text within button
   * @param {func} onClick - click event callback
   * @private
   */
  __buildButton = (label, onClick) => {
    let button;
    button = document.createElement("button");
    button.innerHTML = label;
    button.addEventListener("click", onClick);
    return button;
  };

  /**
   * @private
   */
  __buildNodes = () => {
    this._selectButton = this.__buildButton(
      this._instance._name || this._instance._id,
      this._instance.__addToStage
    );

    this._deleteButton = this.__buildButton("D", this._instance.__delete);

    this._editButton = this.__buildButton("E", () => {
      this._workingState._isEditing = true;
    });

    this._saveButton = this.__buildButton("save", () => {
      this._workingState._name = this._instance._name = this._editField.value;
      this.__save();
      this._workingState._isEditing = false;
    });

    this._editField = document.createElement("input");
    this._editField.id = `item-${this._instance._id}__edit`;
  };

  /**
   * @private
   */
  __render = () => {
    if (this._state._isEditing) {
      this._itemNode.appendChild(this._editField);
      this._itemNode.appendChild(this._saveButton);
    } else {
      this._itemNode.appendChild(this._selectButton);
      this._itemNode.appendChild(this._deleteButton);
      this._itemNode.appendChild(this._editButton);
    }
  };
}

export default Item;

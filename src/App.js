import Component from "./components/_basics/Component/";

class App extends Component {
  content = "Create new component";
  innerHTML = `<button>${this.content}</button>`;
}

export default App;

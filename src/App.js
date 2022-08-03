import React, { Component } from "react";
class App extends Component {
  mensagem = () => {
    return <h1>Hello world</h1>;
  };

  soma = () => 13 * 7;

  render() {
    return (
      <div>
        <h2>{this.mensagem()}</h2>
        <p>{this.soma()}</p>
      </div>
    );
  }
}
export default App;
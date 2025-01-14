import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e) => {
          this.setState({
            userInput: e.target.value
          })
        }} />
        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr: ['spaghetti', 'ice cream', 'sushi','bologna','cheese']
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.arr.map(el=> <h2>{el}</h2> )}
      </div>
    );
  }
}

export default App;

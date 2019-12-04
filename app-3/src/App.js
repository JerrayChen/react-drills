import React, { Component } from "react";
import "./App.css";

const food = ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: food,
      filteredArr: food,
      userInput: ''
    }
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e) => { 
          this.setState({ 
            userInput: e.target.value, 
            filteredArr: this.state.arr.filter(element=>element.includes(e.target.value))
          }) 
        }} />
        <div>{this.state.filteredArr.map(el=><h2>{el}</h2>)}</div>
      </div>
    );
  }
}

export default App;

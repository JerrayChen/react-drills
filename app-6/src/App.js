import React, { Component } from "react";
import "./App.css";
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoArr: [],
      userInput: ''
    }
    this.addList = this.addList.bind(this);
  }

  
  addList(item){
    this.setState({
      todoArr: [...this.state.todoArr, item]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <input onChange={(e)=>{
          this.setState({
            userInput: e.target.value
          })
        }}/>
        <button onClick={()=>{
          this.addList(this.state.userInput);
        }}>Add</button>
        {/* {this.state.todoArr} */}
        <Todo list = {this.state.todoArr} />
      </div>
    );
  }
}

export default App;

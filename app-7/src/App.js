import React, { Component } from "react";

import "./App.css";
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor(){
    super();
    this.state = {
      task: []
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(item){
    this.setState({
      task: [...this.state.task, item]
    })
    // console.log(this.state.task);
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask putTask={this.addTask} />
        <List todoList={this.state.task} />
      </div>
    );
  }
}

export default App;

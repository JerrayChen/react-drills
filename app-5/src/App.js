import React, { Component } from "react";
import "./App.css";
import Image from './Image';
import cat from './cat.jpg'

class App extends Component {
  constructor(){
    super();
    this.state = {
      url: cat
    }
  }
  render() {
    return (
      <div className="App">
        <Image catUrl={this.state.url}/>
      </div>
    );
  }
}

export default App;

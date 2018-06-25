import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: ["Spaghetti", "Ice Cream", 'Sushi', 'Bologna', 'Cheese']
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.arr.map((item) => <div>{item}</div>)}
      </div>
    );
  }
}

export default App;

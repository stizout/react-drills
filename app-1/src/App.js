import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 'This is where my text will go',
    }
  }

  updateText(input) {
    this.setState({input})
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.updateText(e.target.value)} />
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;

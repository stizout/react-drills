import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: ["Spaghetti", "Ice Cream", 'Sushi', 'Bologna', 'Cheese'],
      input: '',
    }
  }

  updateInput(input) {
    this.setState({input})
    console.log(this.state.input)
  }

  render() {
    let display = this.state.arr.filter((e) => {
      return e.includes(this.state.input)
    }).map((e) => {
      return <p>{e}</p>
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          
        <div>
          <input onChange={(e) => this.updateInput(e.target.value)}/>
          { display }
        </div>
      </div>
    );
  }
}

export default App;

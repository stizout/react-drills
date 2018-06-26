import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  updateUsername(username) {
    this.setState({username})
  }

  updatePassword(password) {
    this.setState({password})
  }

  alertStuff() {
    alert("Username: " + this.state.username + " Password: " + this.state.password)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input placeholder="Username" onChange={(e) => this.updateUsername(e.target.value)}/>
        <input placeholder="Password" onChange={(e) => this.updatePassword(e.target.value)}/>
        <button onClick={() => this.alertStuff()}>Login</button>
      </div>
    );
  }
}

export default App;

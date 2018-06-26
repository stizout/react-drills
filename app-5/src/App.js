import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Image />
      </div>
    );
  }
}

const Image = () => {
  return (
    <div>
      <img src="http://www.topbestpics.com/wp-content/uploads/2017/04/funny-dogs-pics-5-600x350.jpg"/>
    </div>
  )
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addNewTask = this.addNewTask.bind(this);
    this.submitNewTask = this.submitNewTask.bind(this);
    this.state = {
      tasks: ["Trash", "Groceries", "Sleep"],
      newTask: '',
    }
  }

  addNewTask(newTask) {
    this.setState({newTask})
  }

  submitNewTask() {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(this.state.newTask),
        newTask: ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Tasks
          key={this.state.input}
            tasks={this.state.tasks}
            addNewTask={this.addNewTask}
            submitNewTask={this.submitNewTask} 
          />
      </div>
    );
  }
}

const Tasks = (props) => {
  return (
    <div>
      <input onChange={(e) => props.addNewTask(e.target.value)} name="task"/>
      <button onClick={() => props.submitNewTask()}>Submit</button>
      {props.tasks.map((e) => {
        return <div>{e}</div>
      })}
    </div>
  )
}

export default App;

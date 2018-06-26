import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleAddTask = this.handleAddTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      tasks: ["Trash", "Groceries", "Sleep"]
    }
  }

  handleAddTask(task) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      }
    })
  }

  deleteTask(taskToRemove) {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => {
          return taskToRemove !== task
        })
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
          <NewTask add={this.handleAddTask}/>
          <List 
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
          />
      </div>
    );
  }
}

class NewTask extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      input: ''
    }
  }

  addTask(input) {
    this.setState({input})
  }

  handleAdd() {
    this.props.add(this.state.input)
    this.setState({input: ''})
  }

  render() {
  return (
    <div>
      <input onChange={(e) => this.addTask(e.target.value)} />
      <button onClick={this.handleAdd}>Add</button>
    </div>
  )
}
}

const List = (props) => {
    return (
      <div>
        {props.tasks.map((task) => {
          return (
            <Todo
              key={task}
              todo={task}
              deleteTask={props.deleteTask}
            />
              
          )
        })}
      </div>
    )
}

const Todo = (props) => {
  return (
    <div>
      <h4>{props.todo}<button onClick={() => props.deleteTask(props.todo)}>X</button></h4>
    </div>
    
  )
}

export default App;

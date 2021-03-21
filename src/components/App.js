import "./App.css";
import React from "react";
import TaskList from "./TaskList";
import { Component } from "react";
import AddTask from "./AddTask";
class App extends Component {
  counter = 0;
  state = {
    tasks: [
      {
        id: 0,
        text: "clean my room",
        isActive: true,
        checked: false,
        date: "2020-03-21",
      },
      {
        id: 1,
        text: "do a homework",
        isActive: true,
        checked: false,
        date: "2020-03-21",
      },
    ],
  };

  changeStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isActive = false;
      }
    });
    this.setState({
      tasks,
    });
  };

  deleteElement = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, checked) => {
    const task = {
      text,
      date,
      isActive: true,
      checked,
    };
    this.counter++;

    if (task.text.length <= 6) {
      alert("TASK IS TOO SHORT!");
      return;
    }

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1
          className="nameOfApp"
          style={{ fontSize: "45px", letterSpacing: "4px" }}
        >
          TO DO LIST - APP
        </h1>
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          changeStatus={this.changeStatus}
          deleteElement={this.deleteElement}
        />
      </div>
    );
  }
}

export default App;

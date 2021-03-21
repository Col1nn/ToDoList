import React from "react";
import "./AddTask.css";
import { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    date: "",
    checked: false,
  };

  insertTask = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  changeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  changeImportant = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleClick = () => {
    const { text, date, checked } = this.state;

    const newTask = this.props.addTask(text, date, checked);

    if (newTask) {
      this.setState({
        text: "",
        date: "",
        checked: "",
      });
    }
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="insert task"
          className="addTask"
          value={this.state.text}
          onChange={this.insertTask}
        ></input>
        <input
          type="date"
          className="chooseDate"
          value={this.state.date}
          onChange={this.changeDate}
        ></input>
        <label>Important</label>
        <input
          type="checkbox"
          className="checkImportant"
          value={this.state.checked}
          onChange={this.changeImportant}
        ></input>
        <button onClick={this.handleClick}>ADD</button>
      </>
    );
  }
}

export default AddTask;

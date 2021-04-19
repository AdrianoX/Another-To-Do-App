import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "2021-04-19",
  };
  render() {
    return (
      <div className="form">
        <input type="text" placeholder="Add Task" value={this.state.text} />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="date">Until when</label>

        <input
          type="date"
          value={this.state.date}
          min="2021-01-01"
          max="2022-01-01"
        />
        <br />
        <button>Add</button>
      </div>
    );
  }
}

export default AddTask;

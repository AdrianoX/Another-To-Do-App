import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Play D2 Resurrected : )",
        date: "2021-05-17",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "React Redux + Router training : ]",
        date: "2021-05-25",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Watch Winter Soldier & Falcon last episode",
        date: "2021-05-29",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Finally go to the gym... : D",
        date: "2021-06-11",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Nicola birthsdasy present ! ",
        date: "2021-06-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete elements id -> " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks,
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change in state elements id ->  " + id);
    const tasks = [...this.state.tasks]; // let tasks = Array.from(this.state.tasks)
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div>
        Another To Do App
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;

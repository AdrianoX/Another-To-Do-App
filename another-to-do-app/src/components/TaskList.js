import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);
  //   console.log(active, done);

  //   done.sort((a, b) => b.finishDate - a.finishDate);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h1> Task's List</h1>
        {activeTasks.length > 0 ? activeTasks : <p>No more tasks ! : )</p>}
      </div>

      <hr />
      <div className="done">
        <h3>
          {" "}
          Done Task's <em>({done.length})</em>
        </h3>
        {done.length > 3 && (
          <span style={{ fontSize: 12 }}>Only last 3 tasks display !</span>
        )}
        {doneTasks.slice(0, 3)}
      </div>
    </>
  );
};

export default TaskList;
<div>Task's List</div>;

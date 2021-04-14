import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);
  console.log(active, done);

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

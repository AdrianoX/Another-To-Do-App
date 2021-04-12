import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
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
        {tasks}
      </div>

      <hr />
      <div className="done">
        <h3> Done Task's (0)</h3>
      </div>
    </>
  );
};

export default TaskList;
<div>Task's List</div>;

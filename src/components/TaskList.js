import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.isActive);
  const notActive = props.tasks.filter((task) => !task.isActive);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      changeStatus={props.changeStatus}
      deleteElement={props.deleteElement}
    />
  ));

  const doneTasks = notActive.map((task) => (
    <Task
      key={task.id}
      task={task}
      changeStatus={props.changeStatus}
      deleteElement={props.deleteElement}
    />
  ));
  return (
    <>
      <div>
        <h1>Task to do - ({activeTasks.length})</h1>
        {activeTasks}
      </div>

      <div>
        <h1>Done tasks - ({doneTasks.length})</h1>
        {doneTasks}
      </div>
    </>
  );
};

export default TaskList;

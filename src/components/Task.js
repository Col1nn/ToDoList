import "./Task.css";
import React from "react";
const Task = (props) => {
  const { text, isActive, id, checked, date } = props.task;

  const color = {
    color: "red",
  };

  if (isActive) {
    return (
      <div>
        {checked ? (
          <strong style={color}>
            {text}, {date}
          </strong>
        ) : (
          <strong>
            {text}, {date}
          </strong>
        )}
        <button className="changeStatus" onClick={() => props.changeStatus(id)}>
          Change status
        </button>
        <button className="deleteTask" onClick={() => props.deleteElement(id)}>
          Delete task
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <strong>
          {text}, done - {date}
        </strong>
      </div>
    );
  }
};

export default Task;

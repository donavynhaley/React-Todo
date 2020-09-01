import React from "react";

const Todo = (props) => {
  return (
    <div>
      <h2
        onClick={(e) => {
          props.toggleComplete(props.todo, e);
        }}
      >
        {props.todo.task}
      </h2>
    </div>
  );
};
export default Todo;

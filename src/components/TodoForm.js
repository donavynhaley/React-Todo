import React from "react";
const TodoForm = (props) => {
  return (
    <div>
      <label>
        Enter new Todo
        <input
          type="text"
          placeholder="e.g. Go to post office"
          onChange={props.handleChange}
          value={props.value}
        />
      </label>
      <button
        type="button"
        onClick={(e) => {
          props.handleSubmit();
        }}
      >
        Add Todo
      </button>
      <button type="button" onClick={() => props.clearCompleted()}>
        Clear Completed
      </button>
    </div>
  );
};
export default TodoForm;

import React from "react";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      newTodo: {
        task: "",
        id: 1,
        completed: false,
      },
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }

  // When called sets todo completed to true and changes the styling
  toggleComplete = (clickedItem, e) => {
    clickedItem.completed = !clickedItem.completed;
    clickedItem.completed === true
      ? (e.target.style.textDecoration = "line-through")
      : (e.target.style.textDecoration = "");
  };

  // updates the task
  handleChange = (e) => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        task: e.target.value,
      },
    });
  };

  // Updates id with date.now
  updateID = () => {
    const newId = Date.now();
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        id: newId,
      },
    });
  };

  // Adds the todo
  handleSubmit = (e) => {
    console.log(e);
    this.updateID();
    console.log(this.state.todos);
    this.setState({ todos: [...this.state.todos, this.state.newTodo] });
    this.setState({
      newTodo: {
        task: "",
        id: 1,
        completed: false,
      },
    });
  };

  // Clears all items that are completed
  clearCompleted = () => {
    const notComplete = this.state.todos.filter(
      (todo) => todo.completed === false
    );
    this.setState({ todos: notComplete });
  };
  render() {
    return (
      <div className="container">
        <h2>Your Todos</h2>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          value={this.state.newTodo.task}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: [
        {
          mission: <h1>How to get MVP!</h1>,
          id: 1,
          finished: false
        },
        {
          mission: "Learn how to use setState()",
          id: 21,
          finished: false
        },
        {
          mission: "Give my ToDo list some style",
          id: 33,
          finished: false
        },
        {
          mission: "Learn all about React",
          id: 34,
          finished: false
        },
        {
          mission: "Learn how to re-write Virtual-DOM",
          id: 45,
          finished: false
        },
        {
          mission: "Build a working ToDo App",
          id: 23,
          finished: false
        }
      ],
      todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = { mission: this.state.todo, finished: false, id: Date.now() };
    this.setState({
      tasks: [...this.state.tasks, newTodo],
      todo: ""
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ tasks });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let tasks = this.state.tasks.filter(todo => !todo.finished);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          tasks={this.state.tasks}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
        
      </div>
    );
  }
}

export default App;

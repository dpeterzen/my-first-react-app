import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.deleteHelper = this.deleteHelper.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  deleteHelper(todos, item) {
    return todos.filter((todo) => {
      todo !== item;
    });
  }

  handleDeleteTodo(item) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter(this.deleteHelper(state.todos, item))
    }))
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
              <li key={todo}>
                {todo}
                <button onClick={() => this.handleDeleteTodo(todo)} type="button">Delete</button>
              </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;

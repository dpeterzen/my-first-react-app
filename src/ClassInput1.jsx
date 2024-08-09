import { Component } from "react";

class ClassInput1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      inputVal: "",
      todos: state.todos.concat(state.inputVal),
    }))
  }

  handleDelete(item) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => (
        todo !== item
      )),
    }));
  }

  render() {
    return (
      <>
        <h3>My Class Based Todo List</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {todo}
              <button onClick={() => this.handleDelete(todo)}>X</button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default ClassInput1;
import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>Number of Todos: {this.props.todosLength}</p>
    );
  }
}

export default ClassCounter;

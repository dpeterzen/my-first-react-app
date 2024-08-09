import { useState, useReducer } from 'react';
import FunctionalCounter from './FunctionalCounter';
import ClassCounter from './ClassCounter';



// eslint-disable-next-line react/function-component-definition, react/prop-types
export default function FunctionalInput3({name}) {

  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  // const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setTodos((todos) => [...todos, inputVal]);
  //   setInputVal('');
  // };

  // const handleDeleteTodo = (todo) => (
  //   setTodos((todos) => todos.filter((item) => 
  //     item !== todo
  //   ))
  // )
  
  const handleEditTodo = (todo) => {
    dispatch({
      type: 'edited',
      todo: todo,
    });
  };

  return (
    <section>
      <h1>{name}</h1>
      <FunctionalCounter todosLength={todos.length} />
      {/* <ClassCounter todosLength={todos.length} /> */}
      {/* The input field to enter To-Do's */}
      <form onSubmit={null}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
            <button onClick={() => {}}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function todosReducer(todos, action) {
  switch (action.type) {
    case 'edited': {
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
  }
}

// Serves as our Context
let nextId = 2;
const initialTodos = [
  {id: 0, text: 'Just some demo tasks'},
  {id: 1, text: 'As an example'},
];

// ['Just some demo tasks', 'As an example']
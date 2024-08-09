import { useState, useReducer } from 'react';
import TodoList from './TodoList';

// eslint-disable-next-line react/function-component-definition, react/prop-types
export default function TodoApp({name}) {

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

  const handleDeleteTodo = (todo) => {
    dispatch({
      type: 'deleted',
      todo: todo,
    });
  };

  const handleEditTodo = (todo) => {
    dispatch({
      type: 'edited',
      todo: todo,
    });
  };

  return (
    <section>
      <h1>{name}</h1>
      <h4>All the tasks!</h4>
      {/* The list of all the To-Do's, displayed */}
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
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
    case 'deleted': {
      return todos.filter((t) => t.id !== action.todo.id);
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
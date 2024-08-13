import { useState, useReducer } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

// eslint-disable-next-line react/function-component-definition, react/prop-types
export default function TodoApp({name}) {

  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  // const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  // const [inputVal, setInputVal] = useState('');

  // const handleInputChange = (e) => {
  //   setInputVal(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setTodos((todos) => [...todos, inputVal]);
  //   setInputVal('');
  // };

  const handleAddTodo = (text) => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  };

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
      <AddTodo onAddTodo={handleAddTodo} />
      <h4>All the tasks!</h4>
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
    case 'added': {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
  }
}

function todosReducer2(todos, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


// Serves as our Context

const initialTodos = [
  {id: 0, text: 'Just some demo tasks'},
  {id: 1, text: 'As an example'},
];
let nextId = initialTodos.length;

// ['Just some demo tasks', 'As an example']
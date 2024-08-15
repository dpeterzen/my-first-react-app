import { useState } from 'react';

export default function TodoList({ todos, onSaveTodo, onDeleteTodo }) {

  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id} 
          todo={todo}
          onSaveTodo={onSaveTodo}
          onDeleteTodo={onDeleteTodo}/>
      ))}
    </>


  );
}

function Todo({todo, onSaveTodo, onDeleteTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputVal, setInputVal] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  }

  const handleSave = () => {
    onSaveTodo({
      ...todo,
      text: inputVal,
    });
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ?
        <>
          <input onChange={handleInputChange} value={inputVal} />
          <button onClick={handleSave}>Save</button>
        </>
        :
        <>
          {todo.text}
          <button onClick={handleEditClick}>Edit</button>
        </>
      }


      <button onClick={onDeleteTodo}>Delete</button>
      ID: {todo.id} 
    </div>
  )
}
export default function TodoList({ todos, onEditTodo, onDeleteTodo }) {


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>

          {todo.text}
          <button onClick={() => onEditTodo(todo)}>Edit</button>
          <button onClick={() => onSaveTodo(todo)}>Save</button>
          <button onClick={() => onDeleteTodo(todo)}>Delete</button>
          ID: {todo.id} 
        </li>
      ))}
    </ul>
  );
}

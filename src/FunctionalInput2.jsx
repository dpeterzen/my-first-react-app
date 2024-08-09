import { useState } from 'react';
import FunctionalCounter from './FunctionalCounter';
import ClassCounter from './ClassCounter';

// eslint-disable-next-line react/function-component-definition, react/prop-types
const FunctionalInput2 = ({ name }) => {

  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, inputVal]);
    setInputVal('');
  };

  const deleteTodo = (todo) => (
    setTodos((todos) => todos.filter((item) => 
      item !== todo
    ))
  )
  

  return (
    <section>
      <h1>{name}</h1>
      <FunctionalCounter todosLength={todos.length} />
      <ClassCounter todosLength={todos.length} />
      {/* The input field to enter To-Do's */}
      <form onSubmit={handleSubmit}>
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
          <li key={todo}>
            {todo}
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput2;

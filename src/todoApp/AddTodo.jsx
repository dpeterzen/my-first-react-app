export default function AddTodo({ onAddTask }) {
  return (
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
  );
}

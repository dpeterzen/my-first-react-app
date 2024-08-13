import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');

  return (
    <>
      <input
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTodo(text);
        }}
      >
        Add
      </button>
    </>
  );
}

import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]); // list of tasks
  const [newTodo, setNewTodo] = useState(""); // input box value

  // ➕ Add task
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo }]);
    setNewTodo("");
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

// 📌 Child component
function TodoItem({ todo }) {
  return <li>{todo.text}</li>;
}

export default TodoApp;

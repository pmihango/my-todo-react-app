import React from 'react';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Profit!', completed: false },
  ]);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
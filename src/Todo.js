import React from 'react';

function Todo(props) {
  return (
    <div>
      <input type="checkbox" checked={props.todo.completed} />
      <span>{props.todo.text}</span>
    </div>
  );
}

export default Todo;
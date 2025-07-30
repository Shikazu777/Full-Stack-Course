import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="task">
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button
        className={todo.completed ? 'undo-btn' : 'complete-btn'}
        onClick={onToggle}
      >
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;

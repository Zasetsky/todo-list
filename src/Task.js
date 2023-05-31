import React from "react";
import './Task.css';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div 
        className={`task ${task.completed ? 'task-completed' : ''}`}
        onClick={onToggle}
    >
      <input
        type="checkbox"
        checked={task.completed}
        readOnly
      />
      <span>{task.name}</span>
      <button onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}>Delete</button>
    </div>
  );
};

export default Task;

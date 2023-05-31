import React from "react";
import '../../assets/styles/TaskInput.css';

const TaskInput = ({ value, onChange, onAdd }) => {
  return (
    <div className="task-input">
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;

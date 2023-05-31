import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task 
        key={task.id} 
        task={task} 
        onToggle={() => onToggle(task)} 
        onDelete={() => onDelete(task.id)} 
      />
      ))}
    </div>
  );
};

export default TaskList;

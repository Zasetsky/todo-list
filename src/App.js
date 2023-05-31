import React, { useState } from "react";
import './assets/styles/App.css';
import TaskInput from "./components/tasks/TaskInput";
import TaskList from "./components/tasks/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if(newTask.trim() !== "") {
      const task = {
          id: Math.random().toString(36).substring(2, 11),
          name: newTask,
          completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    } else {
      setNewTask("");
      alert('Please enter a task');
  }
  };

  const handleToggleTask = (toggledTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggledTask.id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TaskInput
        value={newTask}
        onChange={handleInputChange}
        onAdd={handleAddTask}
      />
      <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
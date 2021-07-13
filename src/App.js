import React, { useState } from 'react'
import './index.css';

import Header from './componenets/Header'
import Tasks from './componenets/Tasks'
import AddTask from './componenets/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Möte',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    }, {
        id: 2,
        text: 'Tandläkaren',
        day: 'Feb 6th at 1:30pm',
        reminder: false,
    }, {
      id: 3,
      text: 'Träning',
      day: 'Feb 9th at 3:30pm',
      reminder: false,
  }  
])
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  // Add Tasl
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header  onAddClick={() => {
        setShowAddTask(!showAddTask)
      }}
      showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask}  />}
      { tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder} /> 
      : 'No Tasks' }
    </div>
  );
}

export default App;

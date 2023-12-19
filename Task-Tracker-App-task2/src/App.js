
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;

    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const startEditingTask = (id, text) => {
    setEditingTaskId(id);
    setEditedTaskText(text);
  };

  const cancelEditingTask = () => {
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={e => setEditedTaskText(e.target.value)}
                />
                <button onClick={() => updateTask(task.id, editedTaskText)}>Save</button>
                <button onClick={cancelEditingTask}>Cancel</button>
              </div>
            ) : (
              <>
                <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
                <div>
                  <button onClick={() => startEditingTask(task.id, task.text)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                  <button onClick={() => toggleComplete(task.id)}>
                    {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

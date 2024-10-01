import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", deadline:"Today", description:"Empty dishwasher" },
      { id: 2, title:"Laundry", deadline:"Tomorrow", description:"Fold laundry and put away" },
      { id: 3, title:"Tidy", deadline:"Today" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default App;

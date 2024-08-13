import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <div>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <button onClick={onDelete}>✖</button>
    </div>
  );
};

export default Task;

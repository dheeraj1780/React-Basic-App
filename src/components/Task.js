import React from 'react';

const Task = ({ task, onDelete, session }) => {
  return (
    <div className='task'>
      <div>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      {session.role==='admin'
      ?(
        <>
      <button onClick={onDelete}>✖</button>
        </>
      ):
      <></>
      }
    </div>
  );
};

export default Task;

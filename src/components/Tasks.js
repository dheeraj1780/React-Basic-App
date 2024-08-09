import React from 'react';
import Button from './Button';
import AddTask from './AddTask';
import Task from './Task';

const Tasks = ({ user,tasks, goBack, onAdd, showAdd, addTask, onDelete  }) => {

  return (
    <div className='container'>
      <h2>Tasks</h2>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add Tasks'}
        onClick={onAdd}
      />
      <h4>{user.firstname} {user.lastname}</h4>
      {showAdd && <AddTask onAdd={addTask}/>}
      <>
    {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} />))}
    </>
      <Button onClick={goBack} text='Back'/>
    </div>
  );
};

export default Tasks;

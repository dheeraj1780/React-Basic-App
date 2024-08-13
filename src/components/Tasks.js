import React from 'react';
import Button from './Button';
import AddTask from './AddTask';
import Task from './Task';

const Tasks = ({ user, tasks, goBack, onAdd, showAdd, addTask, deleteTask }) => {
  const userTasks = tasks.filter(task => task.userId === user.id);

  return (
    <div className='container'>
      <h2>Tasks for {user.firstname} {user.lastname}</h2>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add Task'}
        onClick={onAdd}
      />
      {showAdd && <AddTask user={user.id} onAdd={addTask} />}
      {userTasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => deleteTask(user.id, task.id)} />
      ))}
      <Button onClick={goBack} text='Back'/>
    </div>
  );
};

export default Tasks;

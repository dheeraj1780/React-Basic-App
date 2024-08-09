import React from 'react';
import Button from './Button';
import AddTask from './AddTask';

const Tasks = ({ user, goBack, onAdd, showAdd  }) => {

  return (
    <div className='container'>
      <h2>Tasks</h2>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add Tasks'}
        onClick={onAdd}
      />
      <h4>{user.firstname} {user.lastname}</h4>
      {showAdd && <AddTask />}
      <Button onClick={goBack} text='Back'/>
    </div>
  );
};

export default Tasks;

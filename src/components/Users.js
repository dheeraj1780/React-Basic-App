import React, { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import User from './User';

const Users = ({ users, tasks, deleteUser, addTask, deleteTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleGoBack = () => {
    setSelectedUser(null);
  };

  return (
    <div className='container'>
      <Header title="Users" />
      {!selectedUser ? (
        <>
          {users.map((user) => (
            <div key={user.id} onClick={() => handleUserClick(user)}>
              <User user={user} onDelete={deleteUser}/>
            </div>
          ))}
        </>
      ) : (
        <Tasks
          user={selectedUser}
          tasks={tasks}
          goBack={handleGoBack}
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          addTask={addTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
};

export default Users;

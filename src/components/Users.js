import React, { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';

const Users = ({ users,tasks, deleteTask, addTask }) => {
  const [showAddTask, setShowAddTask] = useState(false)
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
        <table className='users-table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} onClick={() => handleUserClick(user)}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Tasks user={selectedUser} tasks={tasks} goBack={handleGoBack} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} addTask={addTask} onDelete={deleteTask}/>
      )}
    </div>
  );
};

export default Users;

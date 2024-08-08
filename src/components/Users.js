import React from 'react';
import Header from './Header';

const Users = ({ users }) => {
  return (
    <div className='container'>
      <Header title="Users" />
      {users.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </div>
  );
};

export default Users;

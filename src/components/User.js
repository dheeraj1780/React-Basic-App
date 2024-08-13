import React from 'react';
import { FaTimes } from 'react-icons/fa';

const User = ({ user, onDelete }) => {
  return (
    <div className='user'>
      <div className='user-info'>
        <p><b>Name:</b> {user.firstname} {user.lastname}</p>
        <p><b>Role:</b> {user.role}</p>
      </div>
      <div className='user-actions'>
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(user.id)} />
      </div>
    </div>
  );
}

export default User;

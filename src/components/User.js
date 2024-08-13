import React from 'react'
import { FaTimes } from 'react-icons/fa'

const User = ({ user, onDelete }) => {
  return (
    <div className='task'>
        <p><b>Name </b> {user.firstname} {user.lastname}  <b>Role </b> {user.role} <FaTimes style={{color :'red', cursor: 'pointer' }} onClick={() =>onDelete(user.id)}/> </p>
    </div>
  )
}

export default User
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'

const SigninPage = ({addUser}) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [role, setRole] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setConfPassword] = useState('')
  const tasks = []

  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = (e) => {
    e.preventDefault()

    if (password!==confpassword) {
      alert('Your Password dont match')
      return
    }

    addUser({ firstname, lastname, role, username, password, tasks })

    setFirstname('')
    setLastname('')
    setRole('')
    setUsername('')
    setPassword('')
    setConfPassword('')

    navigate('/users') // Navigate to home page
  }

  return (
    <div className='container'>
    <Header title = 'Signin Page'/>

    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Firstname</label>
          <input type='text' placeholder='Firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>LastName</label>
          <input type='text' placeholder='Lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Role</label>
          <input type='text' placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Username</label>
          <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Confirm Password</label>
          <input type='password' placeholder='Password' value={confpassword} onChange={(e) => setConfPassword(e.target.value)} />
        </div>
        <input type='submit' value='Submit' className='btn btn-block' />
      </form>
    </div>
  )
}

export default SigninPage
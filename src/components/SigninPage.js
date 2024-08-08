import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'

const SigninPage = ({addUser}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setConfPassword] = useState('')

  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = (e) => {
    e.preventDefault()

    if (password!==confpassword) {
      alert('Your Password dont match')
      return
    }

    addUser({ username ,password })

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
          <label>UserName</label>
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
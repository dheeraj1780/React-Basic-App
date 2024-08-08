import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const LoginPage = ({ onCheck }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate within a Router context

  const onSubmit = (e) => {
    e.preventDefault();

    onCheck({ username, password }, navigate);

    setUsername('');
    setPassword('');
  };

  return (
    <div className='container'>
      <Header title='Login Page' />
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Username</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Submit' className='btn btn-block' />
      </form>
    </div>
  );
};

export default LoginPage;

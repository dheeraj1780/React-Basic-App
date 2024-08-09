// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import RoutingComponent from './components/RoutingComponent';

function App() {
  const [showNavbar, setNavbar] = useState(false);
  const [users, setUser] = useState([
    { id: 1, username: 'alex', password: '123', firstname: 'alex', lastname: 'pandian', role: 'admin'},
    { id: 2, username: 'martha', password: '12345678', firstname: 'martha', lastname: 'kurian', role: 'developer'},
  ]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text:'doctor appointment',
      day: '08/27/2024',
    },
    {
      id: 2,
      text:'house renovation',
      day: '10/27/2024',
    }])
  
  
    //delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=> task.id !== id))
    }
  
    const addTask = (task) => {
      const id = Math.floor(Math.random()* 10000)+1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

  const addUser = (user) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = { id, ...user };
    setUser([...users, newUser]);
    setNavbar(true);
  };

  const checkUser = (user) => {
    const existingUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (existingUser) {
      alert('Login successful');
      setNavbar(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignOut = () => {
    setNavbar(false);
  };

  return (
    <Router>
      <RoutingComponent
        users={users}
        tasks={tasks}
        addUser={addUser}
        onCheck={checkUser}
        onSignOut={handleSignOut}
        deleteTask={deleteTask}
        addTask={addTask}
        showNavbar={showNavbar}
      />
    </Router>
  );
}

export default App;

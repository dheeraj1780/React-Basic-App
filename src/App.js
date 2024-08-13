import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RoutingComponent from './components/RoutingComponent';
import axios from 'axios';

function App() {
  const [showNavbar, setNavbar] = useState(false);
  const [users, setUser] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Fetch users data from the server
  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        const fetchedUsers = response.data;
        setUser(fetchedUsers);

        // Extract tasks from users with the "admin" role
        const allTasks = fetchedUsers
          .filter(user => user.role === 'admin')
          .flatMap(user => user.tasks.map(task => ({ ...task, userId: user.id })));

        setTasks(allTasks);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Add a new user and persist to server
  const addUser = async (user) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = { id, ...user };

    try {
      const response = await axios.post('http://localhost:5000/users', newUser);
      setUser([...users, response.data]);
      setNavbar(true);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Delete a user and update local state
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      const updatedUsers = users.filter(user => user.id !== userId);
      setUser(updatedUsers);

      // Update tasks if the deleted user was an admin
      const updatedTasks = tasks.filter(task => task.userId !== userId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

// Add a new task to a specific user
const addTask = async (userId, task) => {
  const taskId = Math.floor(Math.random() * 10000) + 1;
  const newTask = {
    id: taskId.toString(),
    ...task
  };

  try {
    const response = await axios.post(`http://localhost:5000/users/${userId}/tasks`, newTask);
    const updatedTasks = [...tasks, { ...response.data, userId }];
    setTasks(updatedTasks);
  } catch (error) {
    console.error('Error adding task:', error);
  }
};


// Delete a task for a specific user
const deleteTask = async (userId, taskId) => {
  try {
    await axios.delete(`http://localhost:5000/users/${userId}/tasks/${taskId}`);
    const updatedTasks = tasks.filter(task => !(task.userId === userId && task.id === taskId));
    setTasks(updatedTasks);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};



  // Check user login credentials
  const checkUser = (user) => {
    const existingUser = users.find(
      (u) => u.username === user.username && u.password === u.password
    );
    if (existingUser) {
      alert('Login successful');
      setNavbar(true);
    } else {
      alert('Invalid username or password');
    }
  };

  // Handle sign out
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
        deleteUser={deleteUser}
        addTask={addTask}
        deleteTask = {deleteTask}
        showNavbar={showNavbar}
      />
    </Router>
  );
}

export default App;

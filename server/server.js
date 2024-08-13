const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to the db.json file
const dbPath = path.join(__dirname, 'db.json');

// Function to read the db.json file
function readDatabase() {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
}

// Function to write to the db.json file
function writeDatabase(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// Route to get users
app.get('/users', (req, res) => {
  const db = readDatabase();
  res.json(db.users);
});

// Route to add a new user
app.post('/users', (req, res) => {
  const db = readDatabase();
  const newUser = req.body;
  db.users.push(newUser);
  writeDatabase(db);
  res.status(201).json(newUser);
});

// Route to delete a user
app.delete('/users/:id', (req, res) => {
  const db = readDatabase();
  const userId = req.params.id;
  db.users = db.users.filter(user => user.id !== userId);
  writeDatabase(db);
  res.status(204).send();
});

// Route to add a task to a specific user
app.post('/users/:id/tasks', (req, res) => {
  const db = readDatabase();
  const userId = req.params.id;
  const user = db.users.find(user => user.id === userId);
  
  if (user) {
    const newTask = req.body;
    if (!user.tasks) {
      user.tasks = [];
    }
    user.tasks.push(newTask);
    writeDatabase(db);
    res.status(201).json(newTask);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Route to delete a task from a specific user
app.delete('/users/:userId/tasks/:taskId', (req, res) => {
  const db = readDatabase();
  const { userId, taskId } = req.params;
  const user = db.users.find(user => user.id === userId);

  if (user) {
    user.tasks = user.tasks.filter(task => task.id !== taskId);
    writeDatabase(db);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User or task not found' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/users`);
});

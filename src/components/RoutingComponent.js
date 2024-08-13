// RoutingComponent.js
import { Route, Routes, useNavigate } from 'react-router-dom';
import SigninPage from './SigninPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Users from './Users';
import Navbar from './Navbar';

const RoutingComponent = ({ users, tasks, addUser, onCheck, onSignOut, deleteUser, addTask, showNavbar, deleteTask}) => {
  const navigate = useNavigate();

  const handleLoginCheck = (user) => {
    onCheck(user);
    navigate('/');
  };

  const handleAddUser = (user) => {
    addUser(user);
    navigate('/');
  };

  const handleSignOut = () => {
    onSignOut();
    navigate('/signin'); // Redirect to the sign-in page after logging out
  };

  return (
    <>
      <Navbar showNavbar={showNavbar} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users users={users} tasks={tasks} deleteUser={deleteUser} addTask={addTask} deleteTask={deleteTask}/>} />
        <Route path="/signin" element={<SigninPage addUser={handleAddUser} />} />
        <Route path="/login" element={<LoginPage onCheck={handleLoginCheck} />} />
      </Routes>
    </>
  );
};

export default RoutingComponent;

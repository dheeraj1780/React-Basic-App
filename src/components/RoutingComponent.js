// RoutingComponent.js
import { Route, Routes, useNavigate } from 'react-router-dom';
import SigninPage from './SigninPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import Users from './Users';
import Navbar from './Navbar';

const RoutingComponent = ({ users, tasks, addUser, onCheck, onSignOut, deleteUser, addTask, deleteTask, session, logged}) => {
  const navigate = useNavigate();

  const handleLoginCheck = (user) => {
    onCheck(user);
    navigate('/home');
  };

  const handleAddUser = (user) => {
    addUser(user);
    navigate('/home');
  };

  const handleSignOut = () => {
    onSignOut();
    navigate('/login'); // Redirect to the sign-in page after logging out
  };

  return (
    <>
      <Navbar showNavbar={logged} onSignOut={handleSignOut} />
      <Routes>
        {logged && <Route path="/home" element={<HomePage session={session}/>} />}
        {logged && <Route path="/users" element={<Users users={users} tasks={tasks} deleteUser={deleteUser} addTask={addTask} deleteTask={deleteTask} session={session}/>} />}
        <Route path="/signin" element={<SigninPage addUser={handleAddUser} />} />
        <Route path="/login" element={<LoginPage onCheck={handleLoginCheck} />} />
      </Routes>
    </>
  );
};

export default RoutingComponent;

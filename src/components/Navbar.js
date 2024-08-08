// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = ({ onSignOut, showNavbar }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {showNavbar ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </>
        )}
      </ul>
      {showNavbar && <Button text="Sign Out" color="red" onClick={onSignOut} link="/signin" />}
    </nav>
  );
};

export default Navbar;

// src/Navbar.js
import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Calculator</h1>
        <ul className="navbar-links">
        <NavLink to={'/'}><li>Normal Calculator</li></NavLink>
          <NavLink to={'/bmi'}><li>BMI</li></NavLink>
          <NavLink to={'/temperature'}><li>Temperature</li></NavLink>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
        <NavLink to="/categories" activeClassName="active-link">Resources</NavLink>
        <NavLink to="/journal" activeClassName="active-link">Journal</NavLink>
        <NavLink to="/help" activeClassName="active-link">Talk to an Expert</NavLink>
        <NavLink to="/login" activeClassName="active-link">LogIn</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

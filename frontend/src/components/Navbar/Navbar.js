import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Resources</NavLink>
        <NavLink to="/journal">Journal</NavLink>
        <NavLink to="/help">Talk to an Expert</NavLink>
        <NavLink to="/login">LogIn</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

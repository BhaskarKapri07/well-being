import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";


function Navbar() {

  const [loggedIn,setLoggedIn] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(()=>{
    const token = localStorage.getItem("token")
    setLoggedIn(!!token)
  },[])

  const handleLogout = () => {
    // Implement your logout logic here, e.g., remove the token from local storage
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/login")
  };


  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/journal">Journal</NavLink>
        <NavLink to="/therapy">Talk to an Expert</NavLink>
        {loggedIn ? <NavLink onClick={handleLogout}>LogOut</NavLink> : <NavLink to="/login">LogIn</NavLink> }
      </div>
    </nav>
  );
}

export default Navbar;

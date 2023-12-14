import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import axios from "axios";

function RegistrationPage() {
  const navigate = useNavigate();

    // State variable for user data
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

    // Submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       // Send POST request to register API
      const response = await axios.post(
        "https://well-being.onrender.com/api/users/register",
        {
          username: userData.username,
          email:userData.email,
          password: userData.password,
        }
      );
      
 
        navigate("/login");
      
    } catch (error) {
      console.error(
        "Registration error:",
        error.response ? error.response.data : error
      );
    }


  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

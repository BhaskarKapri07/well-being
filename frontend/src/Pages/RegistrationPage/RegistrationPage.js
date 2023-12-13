import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import axios from "axios";

function RegistrationPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/register",
        {
          username: userData.username,
          email:userData.email,
          password: userData.password,
        }
      );
      console.log("User registered:", response.data);
      setInterval(() => {
        // something to display here
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error(
        "Registration error:",
        error.response ? error.response.data : error
      );
    }

    console.log(userData);
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
        {/* <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={userData.emergencyContact}
          onChange={handleChange}
          required
        /> */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

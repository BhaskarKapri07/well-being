import React, { useState } from 'react';
import './RegistrationPage.css';

function RegistrationPage() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    emergencyContact: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // logic for backend (JWT aur Bycrpt -> functional implementation huehue)

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
        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={userData.emergencyContact}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

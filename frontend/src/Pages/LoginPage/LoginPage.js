import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showInvalidCredentials, setShowInvalidCredentials] =
    React.useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://well-being.onrender.com/api/users/login",
        {
          email: loginData.email,
          password: loginData.password,
        }
      );
      console.log("Login successful:", response.data);
      setShowInvalidCredentials(false);
      localStorage.setItem("token", response.data.token);
      navigate("/");
      window.location.reload();
      // setInterval(() => {
      //   // something to display here
      //   navigate("/");
      // }, 1000);
    } catch (error) {
      setShowInvalidCredentials(true);
      console.error(
        "Login error:",
        error.response ? error.response.data : error
      );
    }
    console.log(loginData);
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
          autoComplete="current-email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />
        {showInvalidCredentials && (
          <p className="invalid-credentials">Invalid Credentials</p>
        )}
        <button type="submit">Log In</button>
        <p className="register-link">
          Don't have an account?{" "}
          <span onClick={handleRegisterRedirect}>Register here</span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;

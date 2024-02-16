import React, { useState } from "react";
import "./LoginPage.scss";
import { setLoggedIn } from "../../Auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValidACC = username.trim().length < 6 || password.length < 6;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setLoggedIn(username));
    localStorage.setItem("username", username);
    navigate("/");
  };

  return (
    <section className="login-page">
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" disabled={isValidACC}>
          LOG IN
        </button>
      </form>
    </section>
  );
};

export default LoginPage;

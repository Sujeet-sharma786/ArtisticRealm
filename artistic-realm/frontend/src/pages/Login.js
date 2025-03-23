import React, { useState, useEffect } from "react";
import { FaLockOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import img from "./logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user2");
    if (auth) {
      navigate("/");
    }
  });
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const collectData = async () => {
    // console.log(email, password);

    let result = await fetch(`${BASE_URL}/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result);
    if (result.auth) {
      localStorage.setItem("user2", JSON.stringify(result.User));
      localStorage.setItem("token", JSON.stringify(result.auth));

      navigate("/");
    } else {
      setError(true);
    }
  };
  return (
    <div id="wrapper">
      <div class="main-content">
        <div class="header">
          <img src={img} />
        </div>
        <div class="l-part">
          <input
            type="text"
            placeholder="Username"
            class="input-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div class="overlap-text">
            <input
              type="password"
              placeholder="Password"
              class="input-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot?</a>
          </div>
          {error && (
            <span className="invalid-input">invalid username or password</span>
          )}
          <input
            type="button"
            value="Log in"
            class="btn6"
            onClick={collectData}
          />
        </div>
      </div>
      <div class="sub-content">
        <div class="s-part">
          Don't have an account?<Link to="/SignUp">Sign Up </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

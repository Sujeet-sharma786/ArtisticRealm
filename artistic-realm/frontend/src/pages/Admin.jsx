import React from "react";
import { FaUser } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const collectAdmin = async () => {
    // console.log(username, password);
    let result = await fetch( `${BASE_URL}/admin`, {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result);
    const auth = localStorage.setItem("user3", JSON.stringify(result));
    if (result.password) {
      navigate("/upload5768964");
    } else {
      setError(true);
    }
  };
  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-register">
          <div className="lock-icon">
            <FaUser />
          </div>
          <h1>Admin</h1>
          <input
            className="SignupBox"
            type="text"
            placeholder="Enter Admin username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="SignupBox"
            type="password"
            placeholder="Enter Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <span className="invalid-input">invalid username or password</span>
          )}
          <button onClick={collectAdmin} className="btn" type="button">
            Login
          </button>
        </div>
        <div className="login-welcome">
          <h1>Hello Admin!</h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;

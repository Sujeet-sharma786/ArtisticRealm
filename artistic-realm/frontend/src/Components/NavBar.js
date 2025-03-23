import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Img1 from "./logo2.png";

const NavBar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user2");
  const logout = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <div className="combined-navbar">
            <img className="logo" alt="logo" src={Img1} />
            <div className="seprate-navbar">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>

              <li>
                {" "}
                <Link to="/potrait">Potrait</Link>
              </li>
              <li>
                {" "}
                <Link to="/download">Download</Link>
              </li>
              <li>
                {" "}
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link onClick={logout} to="/SignUp">
                  logout ({JSON.parse(auth).name})
                </Link>
              </li>
            </div>
          </div>
        </ul>
      ) : (
        <ul className="nav-ul nav-ul-right">
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li className="Admin">
            <Link to="/Admin">Admin</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

// export default NavBar;

import { motion } from "framer-motion";
import Img from "../pages/logo.png";
import {
  FaHome,
  FaPaintBrush,
  FaDownload,
  FaBars,
  FaBeer,
  FaLockOpen,
  FaArrowAltCircleRight,
  FaLock,
  FaPhoneAlt,
} from "react-icons/fa";
// import {MdMessage} from 'react-icons/md'
import { BiCog, BiAnalyse, BiSearch, BiServer } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";

import { BsCartCheck } from "react-icons/bs";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/potrait",
    name: "Potrait",
    icon: <FaPaintBrush />,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    icon: <FaPhoneAlt />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <FaLockOpen />,
  },
];

const Sidebar = ({ children }) => {
  const auth = localStorage.getItem("user2");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isOpen ? "245px" : "45px" }}
        className="Sidebar"
      >
        <div className="top_section">
          {isOpen && <img src={Img} alt="logo" className="logo" />}

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              className="link"
              to={route.path}
              key={route.name}
            >
              <div className="icon">{route.icon}</div>
              {isOpen && <div className="link_text">{route.name}</div>}
            </NavLink>
          ))}
        </section>

        <div className="Div-signup-logout">
          {auth ? (
            <div className="icon-and-name link1">
              <div className="icon">
                <FaArrowAltCircleRight />
              </div>
              {isOpen && (
                <Link className="link_text" onClick={logout} to="/SignUp">
                  Logout
                </Link>
              )}
            </div>
          ) : (
            <div className="icon-and-name link1">
              <div className="icon">
                <FaLock />
              </div>
              {isOpen && (
                <Link className="link_text" to="/SignUp">
                  SignUp
                </Link>
              )}
            </div>
          )}
        </div>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

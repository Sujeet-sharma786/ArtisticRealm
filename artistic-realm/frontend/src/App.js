import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";

import Login from "./pages/Login";

import Contactus from "./pages/Contactus";

// import Footer from "./Components/footer";
import ShowPotrait from "./pages/Potrait";

import Download from "./pages/Download";
import ImageControle from "./pages/UploadPotrait";
import HomePage from "./pages/Home";

import React from "react";
import Sidebar from "./Components/SideBar";

import PrivateRoute from "./pages/PrivateComp";

import PrivateRoute1 from "./pages/privatecomp2";

import Admin from "./pages/Admin";
import { ThemeProvider } from "@material-ui/core";
const auth = localStorage.getItem("user3");
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Sidebar>
            <Routes>
              {/* <Route element={<PrivateRoute />}> */}
              <Route path="/" element={<HomePage />} />

              <Route path="/download" element={<Download />} />

              {/* </Route> */}
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />

              {
                <Route element={<PrivateRoute />}>
                  <Route path="/upload5768964" element={<ImageControle />} />
                </Route>
              }

              {
                <Route element={<PrivateRoute1 />}>
                  <Route path="/potrait" element={<ShowPotrait />} />
                  <Route path="/logout" element={<SignUp />} />
                  <Route path="/contactus" element={<Contactus />} />
                </Route>
              }

              <Route path="/Admin" element={<Admin />} />
            </Routes>
          </Sidebar>
          {/* <Footer/> */}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

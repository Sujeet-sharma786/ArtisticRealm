import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user2");

  localStorage.clear();
  navigate("/SignUp");
};

// export default LogOut;

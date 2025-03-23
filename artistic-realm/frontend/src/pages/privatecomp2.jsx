import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute1 = () => {
  const auth = localStorage.getItem("user2");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute1;

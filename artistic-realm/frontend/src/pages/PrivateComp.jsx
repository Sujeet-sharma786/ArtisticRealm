import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = localStorage.getItem("user3");
  return auth ? <Outlet /> : <Navigate to="/Admin" />;
};

export default PrivateRoute;

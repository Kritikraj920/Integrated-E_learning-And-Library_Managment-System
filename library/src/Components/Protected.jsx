import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const adminAuthenticated = sessionStorage.getItem("adminUsername");
  const userAuthenticated = sessionStorage.getItem("rollNo");

  // Check role and authentication
  if (role === "admin" && adminAuthenticated) {
    return children;
  } else if (role === "user" && userAuthenticated) {
    return children;
  }

  // Redirect to home if not authenticated
  return <Navigate to="/" />;
};

export default ProtectedRoute;

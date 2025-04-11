import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const stored = localStorage.getItem("user");
  if (!stored) return <Navigate to="/login" />;

  const user = JSON.parse(stored);
  const now = Date.now();

  if (user.expiresAt && now > user.expiresAt) {
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
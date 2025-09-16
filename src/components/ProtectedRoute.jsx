import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Check if a token exists in localStorage
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If token exists, render the component
  return children;
}

export default ProtectedRoute;
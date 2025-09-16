import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage'; 
import LoginPage from './Pages/LoginPage'; 
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="relative z-0 w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* ADD THIS PROTECTED ROUTE FOR THE DASHBOARD */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
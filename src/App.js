import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import MenuPage from './components/MenuPage';
import NavBarTop from './components/NavBarTop';
import NavBarLeft from './components/NavBarLeft';
import Login from './components/Login';
import Demo from './components/Demo';
import { AuthProvider, useAuth } from './components/Auth/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  const location = useLocation();
  const shouldShowNav = location.pathname !== '/login';

  return (
    <AuthProvider>
      {shouldShowNav && (
        <>
          <NavBarTop />
          {/* <NavBarLeft /> */}
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
        <Route path="/demo" element={<ProtectedRoute><Demo /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

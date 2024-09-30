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
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';
import CustomerList from './components/CustomerList';
import Billing from './components/Billing';
import Report from './components/Report';
import Parent from './components/Parent';

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
      <div className="container-xxl">
        {shouldShowNav && (
          <>
            <NavBarTop />

            <div className="dashBoardMain">
              <div className="leftNavMain">
                <NavBarLeft />
              </div>
              <div className="dashboardRight">
                <div className='container-fluid'>


                  <Routes>
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
                    <Route path="/demo" element={<ProtectedRoute><Demo /></ProtectedRoute>} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
                    <Route path="/customerList" element={<ProtectedRoute><CustomerList /></ProtectedRoute>} />
                    <Route path="/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
                    <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
                    {/* <Route path="/parent" element={<Prote ctedRoute><Parent /></ProtectedRoute>} /> */}
                    <Route path="*" element={<Navigate to="/login" />} />
                  </Routes>
                </div>
              </div>
            </div>

          </>
        )}
      </div>

      {/* Routes outside the flex layout */}
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Make sure the login page is here */}
      </Routes>

    </AuthProvider >
  );
};

export default App;
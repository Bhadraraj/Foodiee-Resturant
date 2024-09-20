import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/AuthContext';
import MenuPage from './components/MenuPage';
import Nav from './components/Nav';
import Login from './components/Login';
import { IoMoon } from 'react-icons/io5';
import Demo from './components/Demo'

function App() {
  return (
    <AuthProvider>
      <Routes>

        {/* <Route path="/Demo" element={<Demo />} /> */}

        {/* <Demo/> */}

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Nav" element={<Nav />} />
        {/* <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <MenuPage />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/Demo"
          element={
            <ProtectedRoute>
              <Demo />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

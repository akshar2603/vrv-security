import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import './App.css'; 
function App() {
  return (
      <Router>
        <nav className='navbar'>
          {/* Navigation Links */}
          <div className='mainnav'>
          <div className="nav-links">
          <Link to="/register">Go to Register</Link>
          <Link to="/login">Go to Login</Link>
          <Link to="/admin">Go to Admin</Link>            
          <Link to="/logout">logout</Link>
          </div>
          </div>
        </nav>
        

        <Routes>
        <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/logout" element={<Logout />} /> 
        </Routes>
      </Router>
  );
}

export default App;

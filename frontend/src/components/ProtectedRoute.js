import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('registerToken'); 
    
    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

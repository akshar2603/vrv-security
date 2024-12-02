import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove token and other items from localStorage
        localStorage.removeItem('registerToken');
        localStorage.removeItem('role');
        
        // Navigate to the "register" page after removing the items
        navigate("/register");
    }, [navigate]);

    return null; // No UI to render for logout, just navigation
}

export default Logout;

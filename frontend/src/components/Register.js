import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'user', // Set default role
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const token = sessionStorage.getItem('auth_token');
      if(token){
        navigate('/dashboard') ;
      }
      const response = await api.post('/auth/register', formData);

      console.log(response) 
      // here in res.data.token is my token 

      // storing token in local storage
      localStorage.setItem('registerToken', response.data.token ) 
      localStorage.setItem('role', response.data.role)


      if (response && response.data) {
        navigate('/login'); // Navigate to login page on success
      } else {
        throw new Error('Registration failed: No response data');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className='register'>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className='registercontent'>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <label>
          Role:
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

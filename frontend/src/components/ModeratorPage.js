import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ModeratorPage = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'moderator') {
    return <h1>Access Denied</h1>;
  }

  return <h1>Welcome, moderator!</h1>;
};

export default ModeratorPage;

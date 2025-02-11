import React from 'react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <p>Role: {user?.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}; 
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute';
import { AuthProvider } from '../../context/AuthContext';

// Mock the useAuth hook
jest.mock('../../context/AuthContext', () => ({
  ...jest.requireActual('../../context/AuthContext'),
  useAuth: jest.fn(),
}));

const renderProtectedRoute = (mockAuthValue: any) => {
  const { useAuth } = require('../../context/AuthContext');
  useAuth.mockReturnValue(mockAuthValue);

  render(
    <BrowserRouter>
      <AuthProvider>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('ProtectedRoute', () => {
  it('shows loading state when authentication is loading', () => {
    renderProtectedRoute({ isLoading: true, user: null });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('redirects to login when user is not authenticated', () => {
    renderProtectedRoute({ isLoading: false, user: null });
    expect(window.location.pathname).toBe('/login');
  });

  it('renders protected content when user is authenticated', () => {
    renderProtectedRoute({
      isLoading: false,
      user: { id: '1', name: 'Test User' },
    });
    expect(screen.getByText(/protected content/i)).toBeInTheDocument();
  });
}); 
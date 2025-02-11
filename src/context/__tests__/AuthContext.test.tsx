import { render, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';

const TestComponent = () => {
  const auth = useAuth();
  return (
    <div>
      <div data-testid="user">{JSON.stringify(auth.user)}</div>
      <div data-testid="loading">{String(auth.isLoading)}</div>
    </div>
  );
};

describe('AuthContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides initial auth state', () => {
    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(getByTestId('user')).toHaveTextContent('null');
    expect(getByTestId('loading')).toHaveTextContent('true');
  });

  it('loads user from localStorage', () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      role: 'STUDIO',
    };

    localStorage.setItem('user', JSON.stringify(mockUser));

    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(getByTestId('user')).toHaveTextContent(JSON.stringify(mockUser));
  });

  it('updates user state', () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      role: 'STUDIO',
    };

    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    act(() => {
      const auth = useAuth();
      auth.setUser(mockUser);
    });

    expect(getByTestId('user')).toHaveTextContent(JSON.stringify(mockUser));
  });
}); 
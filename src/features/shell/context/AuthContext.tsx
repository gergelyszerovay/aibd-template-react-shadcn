import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type User = {
  id: string;
  email: string;
  name: string;
  role: string;
};

type AuthContextValue = {
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // Initialize from localStorage (token & userId only)
  useEffect(() => {
    setToken(localStorage.getItem('authToken'));
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUser({ id: storedUserId, email: '', name: '', role: '' });
    }
  }, []);

  const login = (newToken: string, newUser: User) => {
    localStorage.setItem('authToken', newToken);
    localStorage.setItem('userId', newUser.id);
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    setToken(null);
    setUser(null);
  };

  const value: AuthContextValue = {
    token,
    user,
    login,
    logout,
    isAuthenticated: Boolean(token && user?.id),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 
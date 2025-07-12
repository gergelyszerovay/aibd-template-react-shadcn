import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextValue {
  token: string | null;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    setToken(localStorage.getItem('authToken'));
    setUserId(localStorage.getItem('userId'));
  }, []);

  const login = (newToken: string, newUserId: string) => {
    localStorage.setItem('authToken', newToken);
    localStorage.setItem('userId', newUserId);
    setToken(newToken);
    setUserId(newUserId);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    setToken(null);
    setUserId(null);
  };

  const value: AuthContextValue = {
    token,
    userId,
    login,
    logout,
    isAuthenticated: Boolean(token && userId),
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
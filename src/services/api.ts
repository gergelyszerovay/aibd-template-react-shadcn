import axios from 'axios';

const isDevelopment = import.meta.env.DEV;

// During dev, requests go through Vite proxy on same origin (http://localhost:5174).
const API_BASE_URL = isDevelopment
  ? '/api' // rely on proxy
  : 'https://sellersad.up.railway.app';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // avoid CORS preflight as per PRD
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken') ?? 'mock-token-dev';
  const userId = localStorage.getItem('userId');

  if (token) config.headers.Authorization = `Bearer ${token}`;
  if (userId) config.headers['x-user-id'] = userId;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const requestUrl: string = error.config?.url ?? '';

    if (status === 401 && !requestUrl.includes('/auth/login')) {
      // Token expirado ou inválido em rota protegida → força logout
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

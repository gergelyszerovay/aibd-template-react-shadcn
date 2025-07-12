import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const { logout } = useAuth();

  return (
    <header className="flex items-center justify-between h-14 border-b px-4 bg-white dark:bg-gray-900">
      <Link to="/dashboard" className="font-bold text-xl">
        SellersAdmin
      </Link>
      <button
        onClick={logout}
        className="text-sm font-medium text-red-600 hover:underline"
      >
        Logout
      </button>
    </header>
  );
} 
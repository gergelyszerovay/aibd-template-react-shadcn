import { NavLink } from 'react-router-dom';

const linkClass =
  'block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700';

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 hidden md:block">
      <nav className="space-y-1">
        <NavLink to="/dashboard" className={linkClass} end>
          Dashboard
        </NavLink>
        <NavLink to="/catalog" className={linkClass}>
          Catalog
        </NavLink>
        <NavLink to="/inventory" className={linkClass}>
          Inventory
        </NavLink>
        <NavLink to="/orders" className={linkClass}>
          Orders
        </NavLink>
        <NavLink to="/customers" className={linkClass}>
          Customers
        </NavLink>
      </nav>
    </aside>
  );
} 
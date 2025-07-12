import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';
import { RootLayout } from './layouts/RootLayout';
import { LoginPage } from '@features/login/pages/LoginPage';

// Placeholder components for yet-to-be-built feature modules
const DashboardPage = () => <div className="p-4">Dashboard (TODO)</div>;
const CatalogPlaceholder = () => <div className="p-4">Catalog Module (TODO)</div>;
const InventoryPlaceholder = () => <div className="p-4">Inventory Module (TODO)</div>;
const OrdersPlaceholder = () => <div className="p-4">Orders Module (TODO)</div>;
const CustomersPlaceholder = () => <div className="p-4">Customers Module (TODO)</div>;

export function App() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <RootLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="catalog/*" element={<CatalogPlaceholder />} />
          <Route path="inventory/*" element={<InventoryPlaceholder />} />
          <Route path="orders/*" element={<OrdersPlaceholder />} />
          <Route path="customers/*" element={<CustomersPlaceholder />} />
        </Route>

        <Route path="*" element={<div className="p-4">Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

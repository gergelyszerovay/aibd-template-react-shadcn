import { Button } from '@shared/shadcn-ui/button';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
            React + Tailwind CSS
            <Button>Button</Button>
          </h1>
        }
      />
    </Routes>
  );
}

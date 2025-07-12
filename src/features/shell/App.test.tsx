import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '@features/shell/context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App Component', () => {
  it('renders Login page on /login route', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MemoryRouter initialEntries={["/login"]}>
            <App />
          </MemoryRouter>
        </AuthProvider>
      </QueryClientProvider>,
    );

    const headingElement = screen.getByRole('heading', { name: /login/i });
    expect(headingElement).toBeInTheDocument();
  });
});

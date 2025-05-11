import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App Component', () => {
  it('renders the heading with correct text', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('React + Tailwind CSS');
  });
});

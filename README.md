# AIBD React Template

This project provides a React boilerplate for vibe coding and AI-boosted development. Linting tools and pre-commit hooks are pre-configured to enforce the [AIBD Coding Guidelines](https://github.com/gergelyszerovay/aibd-coding-guidelines), ensuring code quality and consistency across your workflow.

## Features

- **React 19**: Latest React version with improved performance and features
- **Vite**: Fast development server and optimized build tooling
- **PNPM Package Manager**: Fast, disk space efficient package manager
- **TailwindCSS 3 Integration**: Utility-first CSS framework for rapid UI development
- **TypeScript**: Type safety and improved developer experience
- **Testing Setup**: Pre-configured with Vitest and Testing Library
- **Shadcn UI Components**: Pre-installed, ready-to-use modern and accessible UI components
- **React Router v7**: Declarative routing
- **React Hook Form**: Flexible and extensible forms with validation
- **Zod**: TypeScript-first schema validation
- **Supabase Client**: Authentication and backend services

## Prerequisites

- Node.js (latest LTS version recommended)
- PNPM (`corepack enable pnpm`)

## Getting Started

### Development Server

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start
```

Navigate to `http://localhost:4300/`. The application will automatically reload if you change any of the source files.

## Build

```bash
# Production build
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

```bash
# Run unit tests (single run)
pnpm test

# Run unit tests with watch mode
pnpm test:watch

# Run unit tests with code coverage
pnpm test:coverage
```

Tests are executed via [Vitest](https://vitest.dev/) with Testing Library for React component testing.

## Styling with TailwindCSS

This project includes TailwindCSS for styling components. The configuration file is located at `tailwind.config.js`.

## UI Components with Shadcn

This project includes a full set of [shadcn UI](https://ui.shadcn.com/) components, pre-installed and ready to use for building modern, accessible UIs.

- All shadcn UI components are available in the `src/shared/shadcn-ui/` directory.
- Import components using path aliases, for example:

```tsx
import { Button } from "@shared/shadcn-ui/button";
import { Input } from "@shared/shadcn-ui/input";
```

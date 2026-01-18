# React boilerplate for AI-Boosted Development (AIBD) and prototyping with TypeScript, TailwindCSS, Shadcn, Storybook, Supabase, and feature-based architecture

## Tech Stack

**Core**

- **React 19.1.4** - Latest React with concurrent features
- **TypeScript 5.9.3** - Strict type safety
- **Vite 7.3.1** - Build tool
- **pnpm 10.28.0** - Package manager

**Backend & Data**

- **Supabase 2.90.1** - Authentication, database, real-time (optional)
- **TanStack Query 5.90.18** - Server state management
- **Zustand 5.0.10** - Global state management

**UI & Styling**

- **Tailwind CSS 3.4.19** - Utility-first styling (v3 for better LLM/AI support)
- **shadcn 2.5.0 + shadcn/ui 0.9.5** - Radix UI components with Tailwind
  - **Recharts 2.15.3** - Must use v2.x. Newer versions (v3+) are not compatible with shadcn/ui.
  - **react-resizable-panels 2.1.9** - Must use v2.x. Newer versions (v3+) are not compatible with shadcn/ui. See [shadcn-ui/ui#9136](https://github.com/shadcn-ui/ui/issues/9136)
  - **react-day-picker 8.10.1** - Must use v8.x. Newer versions (v9+) are not compatible with shadcn/ui.
- **Lucide React 0.562.0** - Icon library
- **Framer Motion 12.26.2** - Animation library
- **@xyflow/react 12.10.0** - Node-based UI and diagrams
- **Sonner 2.0.7** - Toast notifications

**Utilities**

- **Zod 4.3.5** - Schema validation
- **React Hook Form 7.71.1** - Type-safe forms
- **React Router 7.12.0** - Client-side routing
- **date-fns 4.1.0** - Date utilities

**Development & Testing**

- **Vitest 4.0.17** - Testing with browser mode
- **Playwright 1.57.0** - Browser automation and E2E testing
- **Storybook 10.1.11** - Component development and documentation
- **Prettier 3.8.0** - Code formatter
- **ESLint + Sheriff** - Linting and architecture enforcement

## Architecture

Feature-based structure with Sheriff-enforced boundaries:

```
src/
├── features/
│   └── shell/              # Application shell (starter feature)
└── shared/
    ├── shadcn-ui/          # shadcn/ui components
    ├── shadcn-lib/         # UI utilities (cn, etc.)
    ├── shadcn-hooks/       # UI hooks (useMobile, etc.)
    ├── supabase/           # Supabase client & types
    └── zustand/            # Zustand context utilities
```

### Import Rules

- **Features** (`src/features/<name>`) can import: other features, shared code
- **Shared** (`src/shared/<name>`) can import: only other shared code
- **Encapsulation**: Root files are public, subdirectories are internal to the module
- Check violations: `pnpm sheriff-list`

### Bundled Shared Features

- `shared/shadcn-ui` - Pre-configured shadcn/ui components
  - patched for [shadcn-ui/ui#8540 "react-hooks/purity reports Cannot call impure function during render with Math.random() from Sidebar"](https://github.com/shadcn-ui/ui/issues/8540)
- `shared/shadcn-lib` - Tailwind utility helpers
- `shared/shadcn-hooks` - Responsive and UI hooks
- `shared/supabase` - Supabase client setup and database types
- `shared/zustand` - Context-based store utilities

### Starter Feature

- `feature/shell/ApplicationShell.tsx` - Minimal app shell with example shadcn Alert component. Replace or extend as needed.

## Quick Start

```bash
# Install dependencies
pnpm install

# Setup environment (optional, only if using Supabase)
cp .env.sample .env
# Add your Supabase URL and anon key to .env

# Start dev server (runs on http://127.0.0.1:4300)
pnpm dev
```

## Scripts

**Development**

- `pnpm dev` - Dev server (port 4300)
- `pnpm build` - Production build
- `pnpm preview` - Serve production build locally

**Testing**

- `pnpm test` - Run tests
- `pnpm test:watch` - Watch mode
- `pnpm test:coverage` - Coverage report

**Quality**

- `pnpm lint` / `pnpm lint:fix` - ESLint
- `pnpm prettier` - Format code
- `pnpm typecheck` - TypeScript check
- `pnpm sheriff-list` - Check architecture

**Tools**

- `pnpm storybook` - Storybook (port 6006)
- `pnpm madge-circular` - Find circular deps
- `pnpm taze-list` - Check updates

## Configuration

**TypeScript** - Strict mode enabled with path aliases:

- `@shared/*` → `src/shared/*`
- `@features/*` → `src/features/*`

**ESLint** - Enforces:

- TypeScript recommended rules
- React Hooks rules
- Sheriff architectural boundaries
- Relative imports within features, absolute imports (`@shared/...`, `@features/...`) for external code
- No default exports (use named exports)
- Use `type` over `interface`

**Pre-commit Hooks (optional)**

Run `pnpm prepare` to enable Husky hooks that auto-run ESLint + Prettier on staged files

## Dependencies

All versions are exact (no `^` or `~`) for consistency. Add new packages with:

```bash
pnpm add <package> --save-exact
```

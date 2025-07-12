# Product Requirements Document (PRD)

## Feature: Application Shell

---

### Objective
Provide the foundational routing, layout, and context providers required for the SellersAdmin frontend, enabling lazy-loaded feature modules to render within a consistent UI frame.

---

### User Stories
- **As a developer**, I want a centralized router so that navigation is consistent across features.
- **As a user**, I want a unified header and sidebar so that the app feels cohesive.

---

### Requirements

#### Functional
1. **Routing**
   - Configure React Router v6 with top-level routes for: `/login`, `/dashboard`, `/catalog/*`, `/inventory/*`, `/orders/*`, `/customers/*`.
   - Implement `PrivateRoute` wrapper using auth context.
2. **Layout**
   - Header with brand/logo, user menu (logout).
   - Sidebar with navigation links, collapsible on mobile.
   - `Outlet` renders child routes.
3. **Error Boundary**
   - Catches runtime errors and shows fallback UI.
4. **Providers**
   - Include React Query, Toast, and Theme providers at root.

#### Non-Functional
- **Performance:** Shell JS bundle ≤ 70 KB gzipped (excluding lazy-loaded feature chunks).
- **Responsiveness:** Sidebar collapses below 768 px.
- **Accessibility:** Keyboard navigation for sidebar links and menus.

---

### Acceptance Criteria
- [ ] Routes render correct feature modules.
- [ ] Unauthorized access redirects to `/login`.
- [ ] Layout components are responsive and accessible.
- [ ] Shell bundle size target met.
- [ ] All requirements covered by automated tests.

---

### Out of Scope
- Feature-specific UI or business logic. 
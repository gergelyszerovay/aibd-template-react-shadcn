# Product Requirements Document (PRD)

## Feature: Login

---

### Objective
Enable sellers to authenticate using only their email, establishing a persistent session (token + userId) for all subsequent API requests without implementing full password-based authentication during development.

---

### User Stories
- **As a seller**, I want to sign in with my email so that I can access my store dashboard and resources.
- **As a seller**, I want my session to persist across page reloads so that I remain logged in until I choose to log out.
- **As a seller**, I want to log out and clear my session so that my account remains secure on shared devices.

---

### Requirements

#### Functional
1. **Form Fields**
   - Email (type: email).
2. **Validation**
   - Email field is required.
   - Email must match a valid email pattern (handled with Zod).
3. **Submission**
   - On submit, disable controls and show a loading indicator.
   - Call `POST /api/v1/auth/login`.
   - Expect response `{ success, data: { userId, name, token } }`.
   - Store `token` and `userId` in `localStorage` keys `authToken` and `userId`.
   - Redirect to `/dashboard` on success.
4. **Session Injection**
   - All outgoing API requests must include `Authorization: Bearer <token>` and `x-user-id: <userId>` headers.
   - On `401` responses, clear session and redirect to `/login`.
5. **Logout Flow**
   - Provide a `Logout` control in the UI.
   - Clears `localStorage` keys `authToken` and `userId`.
   - Redirects to `/login`.

#### Non-Functional
- **Performance:** Authentication round-trip ≤ 1 s on a 3G network.
- **Responsiveness:** Form fully usable from 320 px to desktop widths.
- **Accessibility:** Form controls reachable via keyboard and labelled for screen readers.
- **Security:** No password stored; sensitive data never logged; use HTTPS.
- **Testing:** Unit & integration tests cover validation, success, error, and logout paths.

---

### Acceptance Criteria
- [ ] Seller enters valid email, submits, and is redirected to `/dashboard`.
- [ ] Invalid or empty email shows inline error.
- [ ] While submitting, controls are disabled and a spinner appears.
- [ ] `token` and `userId` are stored in `localStorage` on success.
- [ ] All subsequent Axios requests include required auth headers.
- [ ] Receiving `401` triggers logout and redirect.
- [ ] Clicking `Logout` clears session and redirects.
- [ ] All requirements covered by automated tests.

---

### Out of Scope
- Password authentication.
- Social login (Google, Facebook, etc.).
- Multi-factor authentication. 
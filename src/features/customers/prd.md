# Product Requirements Document (PRD)

## Feature: Customer Management

---

### Objective
Provide sellers with tools to manage customer records and view their order history to improve service and marketing efforts.

---

### User Stories
- **As a seller**, I want to add and edit customer details so that my records are up to date.
- **As a seller**, I want to delete customers who are no longer active to keep my database clean.
- **As a seller**, I want to view a customer's past orders so that I can understand their purchasing habits.

---

### Requirements

#### Functional
1. **Customer CRUD**
   - Customer List page with columns: Name, Email, Phone, Total Orders, Actions.
   - Customer Form for create/edit (name, email required).
2. **Customer Details**
   - Shows personal info and table of related orders with status and totals.
3. **Validation & API**
   - CRUD endpoints `/api/v1/customers/*`.
   - Zod validation for form fields.

#### Non-Functional
- **Performance:** List loads ≤ 1 s for 500 customers.
- **Responsiveness:** Optimized for tablet/desktop; mobile works via stacked layout.
- **Testing:** Unit tests for forms; integration tests for CRUD; E2E for happy path.

---

### Acceptance Criteria
- [ ] Seller can create, edit, delete customers.
- [ ] Customer details show accurate order history.
- [ ] Validation errors are displayed correctly.
- [ ] All requirements covered by automated tests.

---

### Out of Scope
- Loyalty program management.
- Marketing email integrations. 
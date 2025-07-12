# Product Requirements Document (PRD)

## Feature: Catalog Management

---

### Objective
Allow sellers to manage product categories and products, including CRUD operations, media uploads, and activation status, ensuring a consistent public catalog.

---

### User Stories
- **As a seller**, I want to create, edit, and delete product categories so that my catalog is well organized.
- **As a seller**, I want to add, edit, and remove products with images and pricing so that my storefront is accurate.
- **As a seller**, I want to activate or deactivate products so that only available items are shown to customers.
- **As a seller**, I want to quickly search or filter products so that I can find items to edit.

---

### Requirements

#### Functional
1. **Category CRUD**
   - Category List page shows name, #products, actions.
   - Category Form for create/edit (name required).
2. **Product CRUD**
   - Product List page with filters (category, active status, search by name/SKU).
   - Product Form supports name, description, price, stock, category, image upload (PNG/JPG ≤5 MB).
   - Product Card component for grid display (public catalog reuse).
3. **Activation Toggle**
   - Switch to set product active/inactive; persists via `PUT /api/v1/products/:id/activate`.
4. **Media Upload**
   - Use `POST /api/v1/products/:id/image` for each file.
5. **Validation**
   - All forms validated with Zod; client-side and server error handling.

#### Non-Functional
- **Performance:** List renders ≤ 1 s for 200 products.
- **Responsiveness:** Grid adapts to breakpoints `md` and `lg`; mobile fallback.
- **Accessibility:** Forms and toggles adhere to WCAG 2.1 AA.
- **Testing:** Unit tests for form validation; integration for CRUD; E2E for happy paths.

---

### Acceptance Criteria
- [ ] Seller can create, edit, delete categories.
- [ ] Seller can create, edit, delete products with images.
- [ ] Products can be activated/inactivated and reflected in public catalog.
- [ ] Filters and search return correct results.
- [ ] Validation errors are displayed correctly.
- [ ] All requirements covered by automated tests.

---

### Out of Scope
- Bulk import/export of products via CSV.
- Variant or option management (sizes, colors). 
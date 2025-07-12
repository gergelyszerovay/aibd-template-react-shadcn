# Product Requirements Document (PRD)

## Feature: Orders Management

---

### Objective
Provide sellers with comprehensive tools to create, view, update, and track orders throughout their lifecycle, including real-time status changes and POS integration.

---

### User Stories
- **As a seller**, I want to see a list of all orders with filters so that I can quickly locate specific orders.
- **As a seller**, I want to drag orders on a kanban board to update their status so that order processing is fast and intuitive.
- **As a seller**, I want to view detailed information for a single order so that I can answer customer questions.
- **As a seller**, I want to edit pending orders to correct mistakes before shipping.
- **As a seller**, I want the system to notify customers automatically when their order status changes or an order is edited.
- **As a cashier (POS)**, I want to create an order from the physical store so that in-store sales sync with the online system.

---

### Requirements

#### Functional
1. **Order List**
   - Display orders in a table with columns: ID, Customer, Total, Status, Date.
   - Filters by status, date range, customer name.
2. **Order Details**
   - Show items, quantities, unit prices, discounts, shipping info, timeline of status changes.
3. **Order Kanban**
   - Columns: Pending, Confirmed, Paid, Shipped, Delivered, Cancelled.
   - Drag & drop sends `PUT /api/v1/orders/:id/status` with new status.
4. **Edit Order**
   - Allowed while status ∈ {Pending, Confirmed, Paid}.
   - Endpoint: `PUT /api/v1/orders/:id` with updated items, quantities, discounts, notes.
5. **Notifications**
   - After status update, edit, or cancel, call `POST /api/v1/notifications` with payload (customerId, message).
6. **POS Integration**
   - Endpoint `POST /api/v1/orders/from-pos` creates order; UI must poll or receive real-time updates to reflect new orders.
7. **Real-Time Sync**
   - Use polling or WebSocket to refresh order list/kanban every ≤ 5 s.

#### Non-Functional
- **Performance:** List loads ≤ 2 s for 100 orders.
- **Responsiveness:** Usable on tablet/desktop first, with mobile fallback.
- **Accessibility:** Drag & drop interactions have keyboard alternatives.
- **Testing:** Unit tests for components; integration tests for API flows; E2E tests for drag & drop.

---

### Acceptance Criteria
- [ ] Orders list displays correct data with functional filters.
- [ ] Dragging an order updates status both in UI and backend.
- [ ] Editing an eligible order persists changes.
- [ ] Notification endpoint is called with correct payload on updates.
- [ ] POS-created orders appear in list within 5 s.
- [ ] All interactions covered by automated tests.

---

### Out of Scope
- Payment gateway integration.
- Advanced analytics beyond list and kanban metrics. 
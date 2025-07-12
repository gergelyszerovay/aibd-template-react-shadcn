# Product Requirements Document (PRD)

## Feature: Seller Dashboard

---

### Objective
Provide sellers with a real-time overview of key metrics (sales, open orders, active products, active customers) and quick actions to streamline daily operations.

---

### User Stories
- **As a seller**, I want to see today’s sales total so that I know my performance.
- **As a seller**, I want to see the number of open orders so that I can prioritize fulfillment.
- **As a seller**, I want quick links to create a new product or order so that I can work faster.
- **As a seller**, I want alerts for low stock so that I can take action.

---

### Requirements

#### Functional
1. **Stat Cards**
   - Daily Sales, Open Orders, Active Products, Active Customers.
   - Values fetched from `/api/v1/metrics/summary`.
2. **Sales Chart**
   - Line/bar chart of sales for the last 7 days via `/api/v1/metrics/sales?range=7d`.
3. **Recent Orders**
   - Table of latest 10 orders with link to details.
4. **Low Stock Alerts Widget**
   - Shows up to 5 products below threshold.
5. **Quick Actions**
   - Buttons: “Create Product”, “Create Order” navigating to respective forms.

#### Non-Functional
- **Performance:** Dashboard initial load ≤ 1.5 s.
- **Real-Time:** Widgets auto-refresh every 30 s.
- **Responsiveness:** Grid layout optimized for ≥768 px, collapses to single column on mobile.
- **Testing:** Unit tests for each widget; integration tests for API fetching and refresh logic.

---

### Acceptance Criteria
- [ ] All widgets display correct data from backend.
- [ ] Auto-refresh updates metrics without full reload.
- [ ] Quick actions navigate correctly.
- [ ] Low stock alerts link to inventory page.
- [ ] All requirements covered by automated tests.

---

### Out of Scope
- Advanced forecasting or analytics. 
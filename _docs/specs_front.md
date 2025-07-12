# 🎯 Frontend Specifications - SellersAdmin

## 📋 Project Overview

Frontend React application for SellersAdmin e-commerce system with WhatsApp integration. This document specifies the exact requirements for building a complete, production-ready frontend that consumes existing backend APIs.

## 🏗️ Tech Stack

### Core Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0",
    "tailwindcss": "^3.3.0",
    "axios": "^1.3.0",
    "react-hook-form": "^7.43.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.0.0",
    "date-fns": "^2.29.0",
    "lucide-react": "^0.263.0",
    "recharts": "^2.6.0",
    "react-hot-toast": "^2.4.0"
  }
}
```

### Folder Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components
│   │   ├── layout/          # Layout components
│   │   ├── forms/           # Form components
│   │   └── charts/          # Chart components
│   ├── pages/
│   │   ├── dashboard/       # Dashboard pages
│   │   ├── catalog/         # Catalog management
│   │   ├── inventory/       # Inventory management
│   │   ├── orders/          # Order management
│   │   ├── customers/       # Customer management
│   │   └── public/          # Public catalog
│   ├── services/            # API services
│   ├── types/               # TypeScript types
│   ├── hooks/               # Custom hooks
│   ├── contexts/            # React contexts
│   └── utils/               # Utility functions
├── public/
└── package.json
```

## 🎨 Design System


### Components Required
- Button (variants: primary, secondary, outline, ghost)
- Input (with validation states)
- Select dropdown
- Modal (responsive)
- Card container
- Badge (status indicators)
- Loading spinner
- Toast notifications
- Pagination
- Responsive table
- Tabs navigation
- Sidebar navigation
- Header with user menu

## 📱 Pages & Routes

### 1. Dashboard (`/dashboard`)
**Components:**
- StatCard: Key metrics display
- RecentOrders: Latest orders list
- LowStockAlerts: Inventory warnings
- SalesChart: Revenue visualization
- QuickActions: Shortcut buttons

**APIs:**
- `GET /api/v1/orders/stats`
- `GET /api/v1/orders/recent`
- `GET /api/v1/inventory/alerts/low-stock`
- `GET /api/v1/inventory/stats`

### 2. Catalog Management (`/catalog`)
**Sub-routes:**
- `/catalog/categories` - Categories CRUD
- `/catalog/products` - Products CRUD
- `/catalog/products/new` - New product form
- `/catalog/products/:id/edit` - Edit product form

**Components:**
- CategoryList: Categories with actions
- ProductList: Products with filters
- ProductForm: Create/edit product
- ProductCard: Product display
- CategoryForm: Category form

**APIs:**
- `GET/POST/PUT/DELETE /api/v1/catalog/categories`
- `GET/POST/PUT/DELETE /api/v1/catalog/products`

### 3. Inventory Management (`/inventory`)
**Sub-routes:**
- `/inventory` - Stock levels
- `/inventory/alerts` - Low stock alerts
- `/inventory/operations` - Stock operations

**Components:**
- InventoryList: Stock levels with filters
- StockOperation: Add/remove stock
- InventoryAlerts: Low stock warnings
- StockHistory: Movement history

**APIs:**
- `GET /api/v1/inventory`
- `POST /api/v1/inventory/:id/stock/add`
- `POST /api/v1/inventory/:id/stock/remove`
- `GET /api/v1/inventory/alerts`

### 4. Orders Management (`/orders`)
**Sub-routes:**
- `/orders` - Orders list
- `/orders/:id` - Order details
- `/orders/kanban` - Kanban board

**Components:**
- OrderList: Orders with filters
- OrderCard: Order summary
- OrderDetails: Full order view
- OrderKanban: Status board
- OrderStatusUpdate: Status controls

**APIs:**
- `GET /api/v1/orders`
- `GET /api/v1/orders/:id`
- `PUT /api/v1/orders/:id/status`
- `GET /api/v1/orders/by-status/:status`

### 5. Customers Management (`/customers`)
**Sub-routes:**
- `/customers` - Customer list
- `/customers/:id` - Customer details
- `/customers/new` - New customer

**Components:**
- CustomerList: Customers with search
- CustomerForm: Create/edit customer
- CustomerDetails: Customer profile
- CustomerOrders: Order history

**APIs:**
- `GET/POST/PUT /api/v1/customers`
- `GET /api/v1/customers/:id`
- `GET /api/v1/customers/:id/orders`

### 6. Public Catalog (`/public/catalog/:sellerId`)
**CRITICAL - WhatsApp Integration**

**Components:**
- PublicCatalog: Mobile-optimized catalog
- CategoryFilter: Category selection
- ProductGrid: Product display
- ProductModal: Product details
- CartSummary: Cart preview

**APIs:**
- `GET /api/v1/catalog/public/:sellerId`

**Requirements:**
- Mobile-first design
- < 2 second load time
- No authentication required
- Aggressive caching
- WhatsApp URL sharing

## 🔌 API Integration

### Base Configuration
```typescript
// src/services/api.ts
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://sellersad.up.railway.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
```

### Response Format
```typescript
interface ApiResponse<T> {
  success: boolean
  data: T
  requestId: string
  meta?: {
    pagination?: {
      page: number
      limit: number
      total: number
      pages: number
    }
  }
}
```

### Custom Hooks
```typescript
// useApi hook for data fetching
export function useApi<T>(url: string, options?: RequestOptions)

// usePagination hook for paginated data
export function usePagination(initialPage = 1, initialLimit = 10)

// useForm hook for form handling
export function useForm<T>(schema: ZodSchema<T>)
```

## 🔐 Authentication

### Mock Implementation
```typescript
// Initial mock authentication
const mockCredentials = {
  email: 'admin@test.com',
  password: 'admin123'
}

// AuthContext with mock login
interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}
```

## 📱 Mobile-First Requirements

### Responsive Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

### WhatsApp Optimization
- Touch-friendly buttons (min 44px)
- Optimized images (WebP, lazy loading)
- Minimal JavaScript bundle
- Offline capability for catalog
- Share-friendly URLs

## ⚡ Performance Targets

### Core Web Vitals
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Bundle Size: < 500KB gzipped

### Optimization Techniques
- Code splitting by route
- Component memoization
- Image optimization
- API response caching
- Lazy loading
- Virtual scrolling for large lists

## 🧪 Testing Strategy

### Unit Tests
- All UI components
- Custom hooks
- Utility functions
- API services

### Integration Tests
- Page flows
- Form submissions
- API integrations
- Error handling

### E2E Tests
- Critical user journeys
- Mobile workflows
- WhatsApp integration
- Performance benchmarks


## 🚨 Critical Rules

### Must Do
- ✅ Use real backend APIs
- ✅ Mobile-first approach
- ✅ TypeScript strict mode
- ✅ Zod validation
- ✅ Performance optimization
- ✅ Component testing
- ✅ Responsive design

### Never Do
- ❌ Modify backend APIs
- ❌ Use mock data (except auth)
- ❌ Ignore mobile optimization
- ❌ Skip TypeScript types
- ❌ Break design system
- ❌ Ignore performance
- ❌ Skip testing

## 🎯 Success Criteria

### Functional Requirements
- [ ] All pages fully functional
- [ ] Real API integration
- [ ] Mobile responsive
- [ ] WhatsApp compatibility
- [ ] Performance targets met
- [ ] Tests passing (>80% coverage)

### Technical Requirements
- [ ] TypeScript strict compliance
- [ ] No console errors
- [ ] Accessibility compliant
- [ ] SEO optimized
- [ ] Cross-browser compatible
- [ ] Production ready

---

**🎯 Final Goal: Complete, production-ready frontend application that integrates seamlessly with existing backend APIs and provides optimal WhatsApp e-commerce experience.**

*Created for efficient AI-driven development - Version 1.0*
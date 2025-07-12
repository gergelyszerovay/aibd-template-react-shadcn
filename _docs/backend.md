# 🚀 SellersAdmin Frontend - AI Coding Agent Instructions

**Sistema de E-commerce com Integração WhatsApp - Frontend React**

---

## 🎯 OBJETIVO PRINCIPAL

Construir um frontend React completo para o sistema SellersAdmin que:
- **Consuma as APIs backend existentes** de forma eficiente
- **Seja mobile-first** para otimizar WhatsApp integration
- **Tenha performance superior** com carregamento < 2 segundos
- **Seja totalmente funcional** sem simulações ou mocks
- **Mantenha compatibilidade** com backend existente

---

## 📋 CONTEXTO CRÍTICO

### **⚠️ BACKEND JÁ IMPLEMENTADO - NÃO MODIFICAR**
- **APIs funcionais** em `/api/v1/` com documentação Swagger
- **Database schema** completo com Prisma + PostgreSQL
- **Autenticação** opcional (implementar mock inicial)
- **Estrutura de resposta** padronizada: `{success, data, requestId}`
- **Validação** com Zod já implementada no backend

URL Base do backend: sellersad.up.railway.app

### **🔗 ENDPOINTS CRÍTICOS DISPONÍVEIS:**
```typescript
// PÚBLICO (WhatsApp Integration)
GET /api/v1/catalog/public/{sellerId}  // Catálogo público
POST /api/v1/webhooks/whatsapp         // Webhooks WhatsApp

// ADMINISTRATIVO
GET /api/v1/catalog/categories         // Gestão categorias
GET /api/v1/catalog/products          // Gestão produtos  
GET /api/v1/orders                    // Gestão pedidos
GET /api/v1/inventory                 // Gestão estoque
GET /api/v1/customers                 // Gestão clientes
```

---

## 🏗️ ARQUITETURA FRONTEND OBRIGATÓRIA

### **📁 ESTRUTURA DE PASTAS MANDATÓRIA:**
```
frontend/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── ui/             # Componentes base (Button, Input, etc.)
│   │   ├── layout/         # Layout components (Header, Sidebar, etc.)
│   │   ├── forms/          # Formulários específicos
│   │   └── charts/         # Gráficos e visualizações
│   ├── pages/              # Páginas da aplicação
│   │   ├── dashboard/      # Dashboard principal
│   │   ├── catalog/        # Gestão de catálogo
│   │   ├── inventory/      # Gestão de estoque
│   │   ├── orders/         # Gestão de pedidos
│   │   ├── customers/      # Gestão de clientes
│   │   └── public/         # Páginas públicas (catálogo WhatsApp)
│   ├── services/           # Chamadas API APENAS
│   │   ├── api.ts          # Configuração Axios
│   │   ├── catalog.ts      # Serviços de catálogo
│   │   ├── inventory.ts    # Serviços de estoque
│   │   ├── orders.ts       # Serviços de pedidos
│   │   └── customers.ts    # Serviços de clientes
│   ├── types/              # TypeScript types
│   │   ├── api.ts          # Tipos de API
│   │   ├── catalog.ts      # Tipos de catálogo
│   │   ├── inventory.ts    # Tipos de estoque
│   │   └── orders.ts       # Tipos de pedidos
│   ├── utils/              # Funções utilitárias
│   │   ├── format.ts       # Formatação (moeda, data, etc.)
│   │   ├── validation.ts   # Validação frontend
│   │   └── constants.ts    # Constantes da aplicação
│   ├── hooks/              # Custom hooks
│   │   ├── useApi.ts       # Hook para chamadas API
│   │   ├── usePagination.ts # Hook para paginação
│   │   └── useForm.ts      # Hook para formulários
│   ├── contexts/           # React contexts
│   │   ├── AuthContext.tsx # Contexto de autenticação
│   │   └── ThemeContext.tsx # Contexto de tema
│   ├── styles/             # Estilos globais
│   │   ├── globals.css     # Estilos globais
│   │   └── components.css  # Estilos de componentes
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Entry point
├── public/                 # Assets públicos
│   ├── icons/              # Ícones
│   ├── images/             # Imagens
│   └── favicon.ico         # Favicon
├── package.json            # Dependências
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.js      # Configuração Tailwind
├── vite.config.ts          # Configuração Vite
└── README.md               # Documentação
```

---

## 🛠️ STACK TECNOLÓGICA OBRIGATÓRIA

### **✅ TECNOLOGIAS PERMITIDAS:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0",
    "react-hook-form": "^7.43.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.0.0",
    "date-fns": "^2.29.0",
    "lucide-react": "^0.263.0",
    "recharts": "^2.6.0",
    "react-hot-toast": "^2.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### **❌ TECNOLOGIAS PROIBIDAS:**
- ❌ JavaScript (usar TypeScript APENAS)
- ❌ CSS frameworks além do Tailwind
- ❌ State managers complexos (Redux, Zustand)
- ❌ UI libraries (Material-UI, Ant Design, etc.)
- ❌ Fetch API (usar Axios)
- ❌ Bibliotecas de validação além do Zod

---

## 📱 PÁGINAS OBRIGATÓRIAS

### **1. DASHBOARD PRINCIPAL** (`/dashboard`)
```typescript
// Componentes obrigatórios:
- StatCard: Métricas principais (vendas, pedidos, estoque)
- RecentOrders: Últimos pedidos
- LowStockAlerts: Alertas de estoque baixo
- SalesChart: Gráfico de vendas
- QuickActions: Ações rápidas (novo produto, etc.)

// APIs a consumir:
- GET /api/v1/orders/stats
- GET /api/v1/orders/recent
- GET /api/v1/inventory/alerts/low-stock
- GET /api/v1/inventory/stats
```

### **2. GESTÃO DE CATÁLOGO** (`/catalog`)
```typescript
// Subpáginas:
/catalog/categories - Lista e gestão de categorias
/catalog/products - Lista e gestão de produtos
/catalog/products/new - Criar novo produto
/catalog/products/:id/edit - Editar produto

// Componentes obrigatórios:
- CategoryList: Lista de categorias com CRUD
- ProductList: Lista de produtos com filtros
- ProductForm: Formulário de produto
- ProductCard: Card de produto
- CategoryForm: Formulário de categoria

// APIs a consumir:
- GET /api/v1/catalog/categories
- POST /api/v1/catalog/categories
- PUT /api/v1/catalog/categories/:id
- DELETE /api/v1/catalog/categories/:id
- GET /api/v1/catalog/products
- POST /api/v1/catalog/products
- PUT /api/v1/catalog/products/:id
- DELETE /api/v1/catalog/products/:id
```

### **3. GESTÃO DE ESTOQUE** (`/inventory`)
```typescript
// Subpáginas:
/inventory - Lista de estoque
/inventory/alerts - Alertas de estoque
/inventory/operations - Operações de estoque

// Componentes obrigatórios:
- InventoryList: Lista de estoque com filtros
- StockOperation: Operações de entrada/saída
- InventoryAlerts: Alertas de estoque baixo
- StockHistory: Histórico de movimentações

// APIs a consumir:
- GET /api/v1/inventory
- POST /api/v1/inventory/:id/stock/add
- POST /api/v1/inventory/:id/stock/remove
- GET /api/v1/inventory/alerts
- GET /api/v1/inventory/stats
```

### **4. GESTÃO DE PEDIDOS** (`/orders`)
```typescript
// Subpáginas:
/orders - Lista de pedidos
/orders/:id - Detalhes do pedido
/orders/kanban - Kanban de pedidos

// Componentes obrigatórios:
- OrderList: Lista de pedidos com filtros
- OrderCard: Card de pedido
- OrderDetails: Detalhes completos do pedido
- OrderKanban: Kanban por status
- OrderStatusUpdate: Atualização de status

// APIs a consumir:
- GET /api/v1/orders
- GET /api/v1/orders/:id
- PUT /api/v1/orders/:id/status
- GET /api/v1/orders/by-status/:status
- GET /api/v1/orders/stats
```

### **5. GESTÃO DE CLIENTES** (`/customers`)
```typescript
// Subpáginas:
/customers - Lista de clientes
/customers/:id - Detalhes do cliente
/customers/new - Criar cliente

// Componentes obrigatórios:
- CustomerList: Lista de clientes
- CustomerForm: Formulário de cliente
- CustomerDetails: Detalhes do cliente
- CustomerOrders: Pedidos do cliente

// APIs a consumir:
- GET /api/v1/customers
- POST /api/v1/customers
- PUT /api/v1/customers/:id
- GET /api/v1/customers/:id
- GET /api/v1/customers/:id/orders
```

### **6. CATÁLOGO PÚBLICO** (`/public/catalog/:sellerId`)
```typescript
// CRÍTICO PARA WHATSAPP - MOBILE FIRST
// Componentes obrigatórios:
- PublicCatalog: Catálogo público mobile-optimized
- CategoryFilter: Filtro por categoria
- ProductGrid: Grid de produtos
- ProductModal: Modal de produto
- CartSummary: Resumo do carrinho

// APIs a consumir:
- GET /api/v1/catalog/public/:sellerId (CRÍTICO)

// Requisitos especiais:
- Carregamento < 2 segundos
- Otimizado para mobile
- Sem autenticação necessária
- Cache agressivo
```

---



### **📱 BREAKPOINTS OBRIGATÓRIOS:**
```css
/* Mobile First - CRÍTICO para WhatsApp */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## 🔌 INTEGRAÇÃO COM BACKEND

### **⚙️ CONFIGURAÇÃO AXIOS OBRIGATÓRIA:**
```typescript
// src/services/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use((config) => {
  // Add auth token if available
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
```

### **📡 PADRÃO DE RESPONSE DO BACKEND:**
```typescript
// Todas as APIs retornam este formato:
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

// Exemplo de uso:
const response = await api.get<ApiResponse<Product[]>>('/api/v1/catalog/products')
if (response.data.success) {
  const products = response.data.data
  // Use products...
}
```

### **🔄 CUSTOM HOOKS OBRIGATÓRIOS:**
```typescript
// src/hooks/useApi.ts
export function useApi<T>(url: string, options?: RequestOptions) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Implementation...
  
  return { data, loading, error, refetch }
}

// src/hooks/usePagination.ts
export function usePagination(initialPage = 1, initialLimit = 10) {
  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)
  
  // Implementation...
  
  return { page, limit, setPage, setLimit, offset }
}
```

---

## 🚀 PERFORMANCE OBRIGATÓRIA

### **⚡ OTIMIZAÇÕES CRÍTICAS:**
```typescript
// 1. Lazy loading de páginas
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Catalog = lazy(() => import('./pages/catalog/Catalog'))

// 2. Memoização de componentes
const ProductCard = memo(({ product }: { product: Product }) => {
  // Component implementation
})

// 3. Virtualization para listas grandes
import { FixedSizeList as List } from 'react-window'

// 4. Debounce para search
const debouncedSearch = useMemo(
  () => debounce((query: string) => {
    // Search implementation
  }, 300),
  []
)

// 5. Cache de dados
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})
```

### **📊 MÉTRICAS OBRIGATÓRIAS:**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 500KB gzipped

---

## 🧪 TESTES OBRIGATÓRIOS

### **🧪 ESTRUTURA DE TESTES:**
```typescript
// src/components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### **📋 TESTES OBRIGATÓRIOS:**
- **Unit Tests**: Todos os componentes UI
- **Integration Tests**: Fluxos principais
- **E2E Tests**: Jornadas críticas
- **Performance Tests**: Métricas de performance
- **Accessibility Tests**: Acessibilidade

---

## 📱 MOBILE-FIRST OBRIGATÓRIO

### **📱 PRINCÍPIOS MOBILE-FIRST:**
```css
/* SEMPRE começar com mobile */
.product-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 coluna */
  gap: 1rem;
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 colunas */
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 colunas */
  }
}
```

### **🎯 OTIMIZAÇÕES WHATSAPP:**
```typescript
// Catálogo público otimizado para WhatsApp
const PublicCatalog = () => {
  // Lazy loading de imagens
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Infinite scroll para performance
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['publicCatalog', sellerId],
    ({ pageParam = 1 }) => fetchCatalog(sellerId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      staleTime: 5 * 60 * 1000, // Cache por 5 minutos
    }
  )
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-optimized layout */}
    </div>
  )
}
```

---

## 🔐 AUTENTICAÇÃO MOCK

### **🔐 IMPLEMENTAÇÃO INICIAL:**
```typescript
// src/contexts/AuthContext.tsx
interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  
  // Mock login - substituir por API real depois
  const login = async (email: string, password: string) => {
    // Simular autenticação
    if (email === 'admin@test.com' && password === 'admin123') {
      const mockUser = {
        id: '1',
        email: 'admin@test.com',
        name: 'Admin User',
        role: 'ADMIN'
      }
      setUser(mockUser)
      localStorage.setItem('authToken', 'mock-token')
    } else {
      throw new Error('Invalid credentials')
    }
  }
  
  const logout = () => {
    setUser(null)
    localStorage.removeItem('authToken')
  }
  
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### **✅ FASE 1 - SETUP INICIAL (2-3 horas)**
- [ ] Configurar projeto Vite + React + TypeScript
- [ ] Instalar dependências obrigatórias
- [ ] Configurar Tailwind CSS
- [ ] Criar estrutura de pastas
- [ ] Configurar ESLint + Prettier
- [ ] Configurar roteamento básico
- [ ] Configurar Axios e interceptors
- [ ] Criar tipos TypeScript básicos

### **✅ FASE 2 - COMPONENTES BASE (3-4 horas)**
- [ ] Criar componentes UI base (Button, Input, etc.)
- [ ] Implementar sistema de design
- [ ] Criar layout principal (Header, Sidebar)
- [ ] Implementar contexto de autenticação mock
- [ ] Criar hooks customizados (useApi, usePagination)
- [ ] Implementar sistema de notificações (toast)

### **✅ FASE 3 - DASHBOARD (2-3 horas)**
- [ ] Criar página de dashboard
- [ ] Implementar cards de estatísticas
- [ ] Integrar com APIs de stats
- [ ] Criar gráficos básicos
- [ ] Implementar lista de pedidos recentes
- [ ] Criar alertas de estoque baixo

### **✅ FASE 4 - GESTÃO DE CATÁLOGO (4-5 horas)**
- [ ] Criar páginas de categorias
- [ ] Implementar CRUD de categorias
- [ ] Criar páginas de produtos
- [ ] Implementar CRUD de produtos
- [ ] Criar formulários com validação
- [ ] Implementar upload de imagens
- [ ] Adicionar filtros e busca

### **✅ FASE 5 - GESTÃO DE ESTOQUE (3-4 horas)**
- [ ] Criar página de estoque
- [ ] Implementar lista de estoque
- [ ] Criar operações de entrada/saída
- [ ] Implementar alertas de estoque
- [ ] Criar histórico de movimentações
- [ ] Adicionar filtros avançados

### **✅ FASE 6 - GESTÃO DE PEDIDOS (4-5 horas)**
- [ ] Criar página de pedidos
- [ ] Implementar lista de pedidos
- [ ] Criar detalhes do pedido
- [ ] Implementar kanban de status
- [ ] Criar atualização de status
- [ ] Adicionar filtros e busca

### **✅ FASE 7 - GESTÃO DE CLIENTES (3-4 horas)**
- [ ] Criar página de clientes
- [ ] Implementar CRUD de clientes
- [ ] Criar detalhes do cliente
- [ ] Implementar histórico de pedidos
- [ ] Adicionar filtros e busca

### **✅ FASE 8 - CATÁLOGO PÚBLICO (3-4 horas)**
- [ ] Criar página de catálogo público
- [ ] Otimizar para mobile
- [ ] Implementar filtros por categoria
- [ ] Criar modal de produto
- [ ] Implementar carrinho básico
- [ ] Otimizar performance para WhatsApp

### **✅ FASE 9 - TESTES E POLIMENTO (2-3 horas)**
- [ ] Criar testes unitários
- [ ] Implementar testes de integração
- [ ] Otimizar performance
- [ ] Corrigir bugs
- [ ] Melhorar UX/UI
- [ ] Documentar componentes

### **✅ FASE 10 - DEPLOY E VALIDAÇÃO (1-2 horas)**
- [ ] Configurar build de produção
- [ ] Testar em diferentes dispositivos
- [ ] Validar integração com backend
- [ ] Testar URLs do WhatsApp
- [ ] Documentar deployment
- [ ] Criar guia de uso

---

## 🚨 REGRAS CRÍTICAS

### **⚠️ NUNCA FAÇA:**
- ❌ Modificar APIs do backend
- ❌ Criar mocks de dados (usar APIs reais)
- ❌ Usar tecnologias não aprovadas
- ❌ Ignorar mobile-first
- ❌ Quebrar padrões de resposta
- ❌ Implementar autenticação real (usar mock)
- ❌ Criar componentes sem TypeScript
- ❌ Ignorar performance

### **✅ SEMPRE FAÇA:**
- ✅ Usar APIs reais do backend
- ✅ Implementar mobile-first
- ✅ Seguir padrões de design
- ✅ Validar com Zod
- ✅ Testar componentes
- ✅ Otimizar performance
- ✅ Documentar código
- ✅ Seguir estrutura de pastas

---

## 🎯 RESULTADO ESPERADO

### **🚀 ENTREGÁVEIS FINAIS:**
1. **Frontend React** totalmente funcional
2. **Integração completa** com backend existente
3. **Catálogo público** otimizado para WhatsApp
4. **Dashboard administrativo** com métricas reais
5. **CRUD completo** para todas as entidades
6. **Mobile-first** responsivo
7. **Performance otimizada** < 2s carregamento
8. **Testes** unitários e integração
9. **Documentação** completa
10. **Deploy** funcional

### **📊 CRITÉRIOS DE SUCESSO:**
- [ ] **Funcionalidade**: Todas as páginas funcionais
- [ ] **Performance**: Métricas dentro do esperado
- [ ] **Mobile**: Funciona perfeitamente em mobile
- [ ] **Integração**: Consome APIs reais sem erro
- [ ] **UX**: Interface intuitiva e responsiva
- [ ] **Código**: TypeScript strict sem erros
- [ ] **Testes**: Cobertura > 80%
- [ ] **WhatsApp**: URL pública funcional

---

**🎯 OBJETIVO FINAL: Sistema frontend completo e funcional, pronto para integração WhatsApp, consumindo APIs reais do backend sem modificações.**

**⚡ FOCO: Performance, Mobile-First, Integração Real, Zero Breaking Changes**

---

*Criado para desenvolvimento eficiente com AI Coding Agents*  
*Versão: 1.0 - Janeiro 2025* 
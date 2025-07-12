**🏠 DESENVOLVIMENTO LOCAL:**
```bash
BASE_URL=http://localhost:3001
```

**🚀 PRODUÇÃO (RAILWAY):**
```bash
BASE_URL=https://sellersad.up.railway.app
```

**⚙️ CONFIGURAÇÃO FRONTEND:**
```typescript
// src/services/api.ts
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  timeout: 10000,
})

// .env.development
REACT_APP_API_URL=http://localhost:3001

// .env.production
REACT_APP_API_URL=https://sellersad.up.railway.app
```

**🎯 SINTAXE CORRETA (Express.js):**
```typescript
// ✅ CORRETO - Definição da rota (Express)
router.get('/public/:sellerId', handler)

// ✅ CORRETO - Documentação Swagger
/api/v1/catalog/public/{sellerId}

// ✅ CORRETO - Chamada Frontend
GET /api/v1/catalog/public/user_cl9ebqhxk00008gk5y6n1n7u6
```

**📋 REGRA DEFINITIVA:**
- **Express Routes**: Usar `:parametro` (ex: `:sellerId`)
- **Swagger Docs**: Usar `{parametro}` (ex: `{sellerId}`)
- **Frontend Calls**: Usar valor real (ex: `user_123`)

---

**📋 CONTRATOS COMPLETOS EM `_docs/api_docs/respostas_api.md`:**
- ✅ Todos os endpoints documentados
- ✅ Exemplos de request/response
- ✅ Códigos de erro padronizados
- ✅ Headers e autenticação especificados
- ✅ Tipos TypeScript inferidos

---

## 🛠️ CONFIGURAÇÃO AMBIENTE DEFINITIVA

### **🔧 BACKEND (ATUAL - NÃO MODIFICAR)**

**Porta:** `3001` (CONFIRMADO)
**Base URL Local:** `http://localhost:3001`
**Base URL Produção:** `https://sellersad.up.railway.app`

**⚠️ ATENÇÃO:** Porta 3001 está em uso por processo Jest (PID 1210)

### **🎨 FRONTEND (A IMPLEMENTAR)**

**Porta:** `3000` (padrão React)
**API Base URL:** Configurável via `REACT_APP_API_URL`

```typescript
// Configuração definitiva
const API_CONFIG = {
  development: 'http://localhost:3001',
  production: 'https://sellersad.up.railway.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
}
```

---

## 📡 ENDPOINTS CRÍTICOS - REFERÊNCIA DEFINITIVA

### **🌐 CATÁLOGO PÚBLICO (WHATSAPP)**
```http
GET /api/v1/catalog/public/:sellerId
```
**URL Completa:** `https://sellersad.up.railway.app/api/v1/catalog/public/{sellerId}`
**Status:** ✅ FUNCIONAL
**Autenticação:** ❌ NÃO REQUERIDA
**Cache:** 5 minutos
**Performance:** < 500ms

### **🔐 ENDPOINTS ADMINISTRATIVOS**
```http
GET /api/v1/catalog/categories
GET /api/v1/catalog/products
GET /api/v1/orders
GET /api/v1/inventory
GET /api/v1/admin/customers
```
**Autenticação:** ✅ REQUERIDA (Bearer Token)
**Headers:** `Authorization: Bearer {token}`

### **🔗 WEBHOOKS**
```http
POST /api/v1/webhooks/whatsapp
```
**Status:** ⚠️ PLACEHOLDER (implementação futura)

---

## 🎯 PADRÃO DE RESPOSTA UNIFICADO

### **✅ SUCESSO (200, 201)**
```json
{
  "success": true,
  "data": {}, // Dados específicos
  "requestId": "req_123456789",
  "meta": { // Opcional
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "pages": 10
    }
  }
}
```

### **❌ ERRO (400, 401, 403, 404, 500)**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos",
    "details": {
      "field": "email",
      "reason": "Email é obrigatório"
    }
  },
  "requestId": "req_123456789"
}
```

---

## 🔐 AUTENTICAÇÃO E AUTORIZAÇÃO

### **🚫 ENDPOINTS PÚBLICOS (SEM AUTH)**
```
GET /health
GET /api/v1/status
GET /api/v1/catalog/public/:sellerId
POST /api/v1/webhooks/whatsapp
```

### **🔒 ENDPOINTS PRIVADOS (COM AUTH)**
```
GET /api/v1/catalog/categories
GET /api/v1/catalog/products
GET /api/v1/orders
GET /api/v1/inventory
GET /api/v1/admin/customers
```



---


## 🗂️ ESTRUTURA DE DADOS DEFINITIVA

### **📦 PRODUCT**
```typescript
interface Product {
  id: string           // cuid
  name: string         // max 100 chars
  description?: string // text
  price: number        // decimal(10,2)
  slug: string         // unique, max 120 chars
  imageUrl?: string    // max 500 chars
  tags: string[]       // array
  sku?: string         // unique, max 50 chars
  weight?: number      // decimal(8,3)
  dimensions?: string  // max 100 chars
  isActive: boolean    // default true
  isFeatured: boolean  // default false
  isAvailable: boolean // default true
  createdAt: Date
  updatedAt: Date
  userId: string       // relation
  categoryId: string   // relation
  category: Category   // relation
  inventory?: Inventory // relation
}
```

### **📋 ORDER**
```typescript
interface Order {
  id: string
  orderNumber: string  // unique, max 20 chars
  status: OrderStatus  // enum
  totalAmount: number  // decimal(10,2)
  deliveryAddress?: string
  deliveryDate?: Date
  deliveryFee?: number
  whatsappMessageId?: string
  notes?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
  customerId: string
  customer: Customer
  items: OrderItem[]
}

enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PREPARING = 'PREPARING',
  READY = 'READY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}
```

### **👥 CUSTOMER**
```typescript
interface Customer {
  id: string
  name: string         // max 100 chars
  email?: string       // max 255 chars
  phone: string        // max 20 chars
  address?: string     // text
  whatsappId?: string  // unique, max 50 chars
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  userId: string
  orders: Order[]
}
```

---

## 🚀 CHECKLIST DE IMPLEMENTAÇÃO FRONTEND

### **✅ FASE 1 - SETUP (CRÍTICO)**
- [ ] Configurar Vite + React + TypeScript
- [ ] Instalar dependências obrigatórias
- [ ] Configurar Tailwind CSS
- [ ] Criar estrutura de pastas obrigatória
- [ ] Configurar Axios com interceptors
- [ ] Implementar variáveis de ambiente
- [ ] Testar conexão com backend

### **✅ FASE 2 - COMPONENTES BASE**
- [ ] Criar componentes UI (Button, Input, Modal, etc.)
- [ ] Implementar sistema de design
- [ ] Criar layout principal (Header, Sidebar)
- [ ] Implementar contexto de autenticação mock
- [ ] Criar hooks customizados (useApi, usePagination)
- [ ] Implementar sistema de notificações

### **✅ FASE 3 - PÁGINAS CRÍTICAS**
- [ ] Dashboard - Estatísticas e métricas
- [ ] Catálogo - CRUD produtos/categorias
- [ ] Estoque - Gestão de inventory
- [ ] Pedidos - Lista e kanban
- [ ] Clientes - CRUD e histórico
- [ ] **Catálogo Público** - Mobile-first para WhatsApp

### **✅ FASE 4 - INTEGRAÇÃO E TESTES**
- [ ] Integrar com todas as APIs
- [ ] Implementar tratamento de erros
- [ ] Otimizar performance
- [ ] Testar responsividade
- [ ] Validar integração WhatsApp
- [ ] Criar testes unitários

---

## 🔧 RESOLUÇÃO DE PROBLEMAS

### **🚨 ERRO: "EADDRINUSE port 3001"**
```bash
# Identificar processo
lsof -i :3001

# Matar processo se necessário
kill -9 [PID]

# Verificar se liberou
lsof -i :3001
```

### **🔌 ERRO: "Cannot connect to backend"**
```typescript
// Verificar configuração
console.log('API Base URL:', process.env.REACT_APP_API_URL)

// Testar endpoint
curl http://localhost:3001/health
```

### **🔐 ERRO: "Unauthorized"**
```typescript
// Verificar token
const token = localStorage.getItem('authToken')
console.log('Token:', token)

// Usar mock para desenvolvimento
const mockToken = 'mock-token-dev'
```

---

## 📚 RECURSOS ADICIONAIS

### **📖 DOCUMENTAÇÃO DISPONÍVEL**
- `__respostas_api.md` - Exemplos completos de APIs
- `__prompt.md` - Instruções de implementação
- `backend/docs/` - Documentação técnica
- `_context/development-docs/` - Padrões de desenvolvimento

### **🧪 TESTES DISPONÍVEIS**
- `backend/tests/` - Testes do backend
- Swagger UI - Documentação interativa
- Postman Collection - Testes de API

### **🔗 LINKS ÚTEIS**
- **Produção:** https://sellersad.up.railway.app
- **Health Check:** https://sellersad.up.railway.app/api/v1/status
- **Catálogo Público:** https://sellersad.up.railway.app/api/v1/catalog/public/{sellerId}

---

## 🎯 DECISÕES ARQUITETURAIS FINAIS

### **🏗️ ARQUITETURA CONFIRMADA**
```
Frontend (React) → Backend (Express) → Database (PostgreSQL)
     ↓                    ↓                    ↓
   Port 3000          Port 3001          Port 5432
```

### **📡 COMUNICAÇÃO API**
```
Frontend → Axios → Backend APIs → Prisma → Database
```

### **🔐 AUTENTICAÇÃO**
```
Mock Auth → JWT Token → Bearer Header → Backend Validation
```

### **📱 MOBILE-FIRST**
```
WhatsApp → Public Catalog → Mobile-Optimized → Fast Response
```

---

## ⚠️ ALERTAS CRÍTICOS PARA AI AGENT

### **🚨 NÃO FAÇA**
- ❌ Modificar APIs backend existentes
- ❌ Alterar estrutura de resposta
- ❌ Quebrar compatibilidade WhatsApp
- ❌ Usar tecnologias não aprovadas
- ❌ Ignorar mobile-first
- ❌ Implementar autenticação real (usar mock)

### **✅ SEMPRE FAÇA**
- ✅ Usar APIs reais do backend
- ✅ Seguir padrão de resposta
- ✅ Manter compatibilidade
- ✅ Priorizar mobile-first
- ✅ Implementar tratamento de erro
- ✅ Validar com TypeScript strict

### **🔍 VERIFICAR SEMPRE**
- ✅ Backend rodando em localhost:3001
- ✅ Endpoint público funcionando
- ✅ Variáveis de ambiente configuradas
- ✅ CORS configurado corretamente
- ✅ Tipos TypeScript corretos

---

## 🎯 RESULTADO ESPERADO

### **🚀 ENTREGA FINAL**
- **Frontend React** totalmente funcional
- **Integração completa** com backend
- **Catálogo público** otimizado para WhatsApp
- **Dashboard administrativo** com dados reais
- **Mobile-first** responsivo
- **Performance < 2s** carregamento
- **Testes** funcionais

### **📊 MÉTRICAS DE SUCESSO**
- [ ] Todas as páginas funcionais
- [ ] APIs integradas sem erro
- [ ] Mobile responsivo
- [ ] Performance otimizada
- [ ] WhatsApp URL funcional
- [ ] Código TypeScript sem erros

---

**🎯 OBJETIVO: Handover limpo e claro para desenvolvimento eficiente do frontend sem ambiguidades ou inconsistências.**

**⚡ FOCO: Clareza, Consistência, Funcionalidade, Performance**

---

*Documento criado para handover eficiente - Janeiro 2025* 
# 📄 PRD - SellersAdmin Frontend

## 0. Prioridades Críticas
1. **Autenticação / Login (Top 1)**
   - Login baseado somente em e-mail (sem validação de senha em desenvolvimento).
   - O backend retorna `userId`, `name` e `token`.
   - `userId` é **mandatório** e deve acompanhar todas as requisições subsequentes para filtrar recursos (produtos, estoque, pedidos, clientes) apenas do Seller autenticado.
   - Sessão armazenada em `localStorage` (`authToken` + `userId`).
   - Fluxo de logout limpa sessão e redireciona para `/login`.

2. **Gestão de Pedidos (Top 2)**
   - Módulo orquestrador entre UI externa (vitrine pública), ponto de venda (POS) e sistema interno.
   - Possibilita acompanhar ciclo de vida completo do pedido, atualizar status e enviar notificações ao cliente (ex.: mudança de status, cancelamento).
   - Estado de pedidos refletido em tempo real no Dashboard e no POS.

## 1. Objetivo do Produto
Construir um frontend React completo para o sistema SellersAdmin (e-commerce B2B) que consuma as APIs backend existentes, priorize experiência em **tablet e desktop** (>=768 px), mantenha compatibilidade mobile, entregue performance superior (<2 s) e funcione sem mocks, garantindo total compatibilidade com o backend.

## 2. Contexto e Restrições
- Backend já implementado e funcional (não modificar)
- APIs RESTful documentadas e padronizadas (`/api/v1/`)
- Database: PostgreSQL + Prisma
- Autenticação: mock inicial (não implementar auth real)
- Resposta padrão: `{success, data, requestId, meta?}`
- Validação backend: Zod
- BaseURL: https://sellersad.up.railway.app

## 3. Requisitos Funcionais
### 3.1. Módulos e Páginas
| Módulo | Rota(s) | Descrição |
| ------ | ------- | --------- |
| Login | `/login` | Autenticação por e-mail, armazenamento de sessão. |
| Dashboard | `/dashboard` | Visão geral com métricas chave do Seller. |
| Catálogo | `/catalog/*` | CRUD de categorias e produtos. |
| Estoque | `/inventory/*` | Controle e operações de estoque. |
| Pedidos | `/orders/*` | Listagem, detalhes, kanban, updates e integração POS. |
| Clientes | `/customers/*` | Gestão de clientes e histórico de pedidos. |

### 3.2. Features por Módulo
#### a) Login (Crítico #1)
- Formulário com campo **e-mail** apenas.
- Chamada `POST /api/v1/auth/login` → retorna `{success, data: {userId, name, token}}`.
- Armazenar `token` e `userId` em `localStorage`.
- Guardar rotas privadas via `PrivateRoute`.

#### b) Pedidos (Crítico #2)
- **OrderList** com filtros por status, data, cliente.
- **OrderDetails** exibindo itens, preços, timeline de status.
- **OrderKanban** para arrastar e soltar entre status (Pending, Confirmed, Paid, Shipped, Delivered, Cancelled).
- **OrderStatusUpdate** envia `PUT /api/v1/orders/:id/status`.
- **OrderEdit** permite alterar itens, quantidades, descontos e observações enquanto o pedido não estiver **Shipped/Delivered**; `PUT /api/v1/orders/:id`.
- **Notifications**: após update de status, edição ou cancelamento, disparar `POST /api/v1/notifications` para cliente (e-mail / WhatsApp).
- Integração POS: endpoint `POST /api/v1/orders/from-pos` cria pedido via caixa físico.

#### c) Catálogo
- **CategoryList / CategoryForm** CRUD completo.
- **ProductList / ProductForm / ProductCard** com filtros, busca, upload de imagens.
- Ativar/Inativar produto.

#### d) Estoque
- **InventoryList** mostra saldo atual e filtro por categoria/produto.
- **StockOperation** (entrada/saída) via `POST /api/v1/inventory/:id/stock/{add|remove}`.
- **InventoryAlerts** (baixo estoque) e **StockHistory**.

#### e) Clientes
- **CustomerList / CustomerForm** CRUD.
- **CustomerDetails** com dados e pedidos relacionados.

#### f) Dashboard
- **StatCards**: vendas diárias, pedidos em aberto, produtos ativos, clientes ativos.
- **SalesChart**, **RecentOrders**, **LowStockAlerts**, **QuickActions** (atalhos para criar produto/pedido).

### 3.3. Integração API
- Todas as requisições enviam `Authorization: Bearer <token>` e `x-user-id: <userId>`.
- Respeitar contratos `{success, data, requestId, meta?}`.
- Em caso de `401` limpar sessão e redirecionar para `/login`.

### 3.4. Responsive Design & Notificações
- UI prioriza **tablet/desktop** com layout fluido; mobile permanece totalmente suportado (progressive enhancement).
- Grid e componentes dimensionados para breakpoints `md (768px)` e `lg (1024px)` como referências primárias; `sm` para fallback.
- Envio de notificações não depende de UI de WhatsApp; apenas *push* para cliente quando necessário.
- Catálogo público continua responsivo para navegação externa, sem dependência de WhatsApp.

## 4. Requisitos Técnicos
- React 18, TypeScript estrito, Vite, TailwindCSS
- Proibido: JS puro, CSS frameworks extras, Redux/Zustand, UI libs externas, Fetch API, validação fora Zod
- Estrutura de pastas obrigatória conforme especificação
- Testes: unitários, integração, E2E, performance, acessibilidade
- Performance: bundle <500KB gzipped, FCP <1.5s, LCP <2.5s, TTI <3.5s
- Design system: paleta, tipografia, espaçamentos conforme padrão

### 4.1. Configuração de Proxy / CORS (Desenvolvimento)
Para eliminar erros de CORS **sem modificar o backend**, todas as requisições da UI em modo desenvolvimento devem passar por um proxy embutido no Vite:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://sellersad.up.railway.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
      },
    },
  },
})
```

1. **Variáveis de ambiente**
   ```bash
   # .env & .env.development
   VITE_API_URL=http://localhost:5174
   ```
2. **API Client** – usa sempre `import.meta.env.VITE_API_URL`:
   ```typescript
   const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL || 'https://sellersad.up.railway.app',
     timeout: 10000,
     headers: { 'Content-Type': 'application/json' },
     withCredentials: false, // evita preflight CORS
   })
   ```
3. **Fluxo**
   - UI chama `http://localhost:5174/api/...` → proxy Vite intercepta.
   - Proxy repassa para `https://sellersad.up.railway.app/api/...`.
   - Resposta retorna como **same-origin** (`localhost:5174`), sem preflight CORS.

> ⚠️  Esta configuração vale **apenas em desenvolvimento**. Em produção usamos a URL real da API e o backend deve estar configurado com CORS para os domínios de produção.

### 4.2. Padrão de Cliente Axios
Para garantir consistência, headers obrigatórios e tratamento centralizado de erros, usamos **uma única instância Axios** em `src/services/api.ts` com os seguintes pontos-chave:

1. **BaseURL Dinâmica** –
   ```typescript
   const isDevelopment = import.meta.env.DEV;
   const API_BASE_URL = isDevelopment
     ? 'https://sellersad.up.railway.app' // durante dev via proxy
     : 'https://sellersad.up.railway.app'; // produção
   ```
2. **Interceptador de Request** – injeta automaticamente:
   - `Authorization: Bearer <token>` (recuperado do `localStorage`, fallback `mock-token-dev`).
   - `X-User-ID: <userId>` obrigatório para multitenancy.

3. **Interceptador de Response** –
   - Redireciona para `/login` em `401` e restaura `mock-token-dev` em desenvolvimento.

4. **Timeout & Headers** – `timeout: 10000`, `Content-Type: application/json` padrão.

5. **Hook Genérico `useApi`** – abstrai chamadas assíncronas, gerenciando `loading`, `error`, `data` e `toast` de sucesso/erro, eliminando repetição nas páginas (`Catalog`, `Orders`, etc.).

> Benefícios: código enxuto, menor acoplamento, fácil alteração de política de headers ou tratamento de erros em um único ponto.

## 5. Regras Críticas
- ❌ Nunca modificar backend ou contratos de API
- ❌ Nunca usar mocks de dados (usar APIs reais)
- ❌ Nunca ignorar responsividade (todas as telas devem funcionar em mobile, tablet e desktop)
- ❌ Nunca quebrar padrão de resposta
- ❌ Nunca implementar auth real
- ❌ Nunca criar componentes sem TypeScript
- ❌ Nunca ignorar performance
- ✅ Sempre usar APIs reais
- ✅ Sempre validar com Zod
- ✅ Sempre documentar código e componentes
- ✅ Sempre seguir estrutura e design system

## 6. Critérios de Aceite e Sucesso
- Todas as páginas e fluxos funcionais
- Integração real com backend sem erros
- Mobile-first em todas as telas
- Performance dentro das métricas
- Testes >80% cobertura
- Código 100% TypeScript estrito
- Catálogo público WhatsApp funcional e rápido
- Documentação e deploy completos

## 7. Entregáveis
1. Frontend React funcional e responsivo
2. Integração completa com backend
3. Catálogo público WhatsApp-ready
4. Dashboard e CRUDs completos
5. Testes e documentação
6. Deploy funcional

---

*Este PRD consolida todos os requisitos, regras e critérios do SellersAdmin Frontend para garantir alinhamento, rastreabilidade e entrega de valor ao negócio.* 
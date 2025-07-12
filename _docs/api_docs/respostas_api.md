# 📡 API Response Examples - SellersAdmin

**Sistema de E-commerce com Integração WhatsApp - Exemplos de Respostas das APIs**

---

## 🎯 PADRÃO DE RESPOSTA

### **✅ Resposta de Sucesso:**
```json
{
  "success": true,
  "data": {}, // Dados específicos da API
  "requestId": "req_123456789",
  "meta": { // Opcional - para paginação, estatísticas, etc.
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "pages": 10
    }
  }
}
```

### **❌ Resposta de Erro:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos",
    "details": {
      "field": "email",
      "reason": "Email inválido"
    }
  },
  "requestId": "req_123456789"
}
```

---

## 🏥 HEALTH & STATUS

### **GET /health**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "timestamp": "2025-01-05T10:30:00.000Z",
    "uptime": 3600,
    "memory": {
      "used": 150.5,
      "total": 512.0
    },
    "database": "connected"
  },
  "requestId": "req_health_001"
}
```

### **GET /api/v1/status**
```json
{
  "success": true,
  "data": {
    "message": "SellersAdmin API is running",
    "environment": "development",
    "timestamp": "2025-01-05T10:30:00.000Z",
    "version": "1.0.0"
  },
  "requestId": "req_status_001"
}
```

---

## 📦 CATALOG - CATEGORIAS

### **GET /api/v1/catalog/categories**
```json
{
  "success": true,
  "data": [
    {
      "id": "cat_cl9ebqhxk00008gk5y6n1n7u6",
      "name": "Eletrônicos",
      "description": "Produtos eletrônicos e gadgets",
      "slug": "eletronicos",
      "imageUrl": "https://example.com/images/eletronicos.jpg",
      "sortOrder": 1,
      "isActive": true,
      "createdAt": "2025-01-01T10:00:00.000Z",
      "updatedAt": "2025-01-01T10:00:00.000Z",
      "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
      "_count": {
        "products": 15
      }
    },
    {
      "id": "cat_cl9ebqhxk00008gk5y6n1n7u7",
      "name": "Roupas",
      "description": "Vestuário e acessórios",
      "slug": "roupas",
      "imageUrl": "https://example.com/images/roupas.jpg",
      "sortOrder": 2,
      "isActive": true,
      "createdAt": "2025-01-01T11:00:00.000Z",
      "updatedAt": "2025-01-01T11:00:00.000Z",
      "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
      "_count": {
        "products": 8
      }
    }
  ],
  "requestId": "req_categories_001",
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 2,
      "pages": 1
    }
  }
}
```

### **POST /api/v1/catalog/categories**
```json
{
  "success": true,
  "data": {
    "id": "cat_cl9ebqhxk00008gk5y6n1n7u8",
    "name": "Casa e Jardim",
    "description": "Produtos para casa e jardim",
    "slug": "casa-e-jardim",
    "imageUrl": "https://example.com/images/casa-jardim.jpg",
    "sortOrder": 0,
    "isActive": true,
    "createdAt": "2025-01-05T10:30:00.000Z",
    "updatedAt": "2025-01-05T10:30:00.000Z",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6"
  },
  "requestId": "req_create_category_001"
}
```

### **PUT /api/v1/catalog/categories/:id**
```json
{
  "success": true,
  "data": {
    "id": "cat_cl9ebqhxk00008gk5y6n1n7u8",
    "name": "Casa e Decoração",
    "description": "Produtos para casa, decoração e jardim",
    "slug": "casa-e-decoracao",
    "imageUrl": "https://example.com/images/casa-decoracao.jpg",
    "sortOrder": 1,
    "isActive": true,
    "createdAt": "2025-01-05T10:30:00.000Z",
    "updatedAt": "2025-01-05T11:00:00.000Z",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6"
  },
  "requestId": "req_update_category_001"
}
```

### **DELETE /api/v1/catalog/categories/:id**
```json
{
  "success": true,
  "data": {
    "message": "Categoria removida com sucesso",
    "deletedId": "cat_cl9ebqhxk00008gk5y6n1n7u8"
  },
  "requestId": "req_delete_category_001"
}
```

---

## 📦 CATALOG - PRODUTOS

### **GET /api/v1/catalog/products**
```json
{
  "success": true,
  "data": [
    {
      "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
      "name": "iPhone 15 Pro",
      "description": "Smartphone Apple iPhone 15 Pro 256GB",
      "price": 7999.99,
      "slug": "iphone-15-pro",
      "imageUrl": "https://example.com/images/iphone-15-pro.jpg",
      "tags": ["smartphone", "apple", "iphone"],
      "sku": "IPH15PRO256",
      "weight": 0.187,
      "dimensions": "146.6 x 70.6 x 7.65 mm",
      "isActive": true,
      "isFeatured": true,
      "isAvailable": true,
      "createdAt": "2025-01-01T10:00:00.000Z",
      "updatedAt": "2025-01-01T10:00:00.000Z",
      "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
      "categoryId": "cat_cl9ebqhxk00008gk5y6n1n7u6",
      "category": {
        "id": "cat_cl9ebqhxk00008gk5y6n1n7u6",
        "name": "Eletrônicos",
        "slug": "eletronicos"
      },
      "inventory": {
        "id": "inv_cl9ebqhxk00008gk5y6n1n7u6",
        "quantity": 25,
        "minQuantity": 5,
        "maxQuantity": 100,
        "reservedQty": 3
      }
    }
  ],
  "requestId": "req_products_001",
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "pages": 1
    }
  }
}
```

### **POST /api/v1/catalog/products**
```json
{
  "success": true,
  "data": {
    "id": "prod_cl9ebqhxk00008gk5y6n1n7u7",
    "name": "Samsung Galaxy S24",
    "description": "Smartphone Samsung Galaxy S24 128GB",
    "price": 4999.99,
    "slug": "samsung-galaxy-s24",
    "imageUrl": "https://example.com/images/galaxy-s24.jpg",
    "tags": ["smartphone", "samsung", "galaxy"],
    "sku": "GALS24128",
    "weight": 0.168,
    "dimensions": "147.0 x 70.6 x 7.6 mm",
    "isActive": true,
    "isFeatured": false,
    "isAvailable": true,
    "createdAt": "2025-01-05T10:30:00.000Z",
    "updatedAt": "2025-01-05T10:30:00.000Z",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
    "categoryId": "cat_cl9ebqhxk00008gk5y6n1n7u6"
  },
  "requestId": "req_create_product_001"
}
```

### **GET /api/v1/catalog/products/:id**
```json
{
  "success": true,
  "data": {
    "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
    "name": "iPhone 15 Pro",
    "description": "Smartphone Apple iPhone 15 Pro 256GB",
    "price": 7999.99,
    "slug": "iphone-15-pro",
    "imageUrl": "https://example.com/images/iphone-15-pro.jpg",
    "tags": ["smartphone", "apple", "iphone"],
    "sku": "IPH15PRO256",
    "weight": 0.187,
    "dimensions": "146.6 x 70.6 x 7.65 mm",
    "isActive": true,
    "isFeatured": true,
    "isAvailable": true,
    "createdAt": "2025-01-01T10:00:00.000Z",
    "updatedAt": "2025-01-01T10:00:00.000Z",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
    "categoryId": "cat_cl9ebqhxk00008gk5y6n1n7u6",
    "category": {
      "id": "cat_cl9ebqhxk00008gk5y6n1n7u6",
      "name": "Eletrônicos",
      "slug": "eletronicos"
    },
    "inventory": {
      "id": "inv_cl9ebqhxk00008gk5y6n1n7u6",
      "quantity": 25,
      "minQuantity": 5,
      "maxQuantity": 100,
      "reservedQty": 3
    }
  },
  "requestId": "req_product_details_001"
}
```

---

## 🌐 CATALOG - PÚBLICO (WHATSAPP)

### **GET /api/v1/catalog/public/:sellerId** ⚡ CRÍTICO
```json
{
  "success": true,
  "data": {
    "seller": {
      "id": "user_cl9ebqhxk00008gk5y6n1n7u6",
      "name": "João Silva",
      "businessName": "TechStore Brasil",
      "businessPhone": "+5511999999999",
      "businessAddress": "Rua das Flores, 123 - São Paulo, SP"
    },
    "categories": [
      {
        "id": "cat_cl9ebqhxk00008gk5y6n1n7u6",
        "name": "Eletrônicos",
        "slug": "eletronicos",
        "imageUrl": "https://example.com/images/eletronicos.jpg",
        "products": [
          {
            "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
            "name": "iPhone 15 Pro",
            "description": "Smartphone Apple iPhone 15 Pro 256GB",
            "price": 7999.99,
            "imageUrl": "https://example.com/images/iphone-15-pro.jpg",
            "isAvailable": true,
            "inStock": true,
            "quantity": 25
          }
        ]
      }
    ],
    "meta": {
      "totalProducts": 1,
      "totalCategories": 1,
      "lastUpdated": "2025-01-05T10:30:00.000Z",
      "cacheExpiry": "2025-01-05T10:35:00.000Z"
    }
  },
  "requestId": "req_public_catalog_001"
}
```

---

## 📦 INVENTORY - ESTOQUE

### **GET /api/v1/inventory**
```json
{
  "success": true,
  "data": [
    {
      "id": "inv_cl9ebqhxk00008gk5y6n1n7u6",
      "quantity": 25,
      "minQuantity": 5,
      "maxQuantity": 100,
      "reservedQty": 3,
      "availableQty": 22,
      "isActive": true,
      "createdAt": "2025-01-01T10:00:00.000Z",
      "updatedAt": "2025-01-05T09:30:00.000Z",
      "productId": "prod_cl9ebqhxk00008gk5y6n1n7u6",
      "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
      "product": {
        "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
        "name": "iPhone 15 Pro",
        "sku": "IPH15PRO256",
        "price": 7999.99,
        "imageUrl": "https://example.com/images/iphone-15-pro.jpg",
        "category": {
          "id": "cat_cl9ebqhxk00008gk5y6n1n7u6",
          "name": "Eletrônicos"
        }
      },
      "stockStatus": "IN_STOCK", // IN_STOCK, LOW_STOCK, OUT_OF_STOCK
      "stockLevel": "NORMAL" // CRITICAL, LOW, NORMAL, HIGH
    }
  ],
  "requestId": "req_inventory_001",
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "pages": 1
    },
    "summary": {
      "totalProducts": 1,
      "inStock": 1,
      "lowStock": 0,
      "outOfStock": 0
    }
  }
}
```

### **POST /api/v1/inventory**
```json
{
  "success": true,
  "data": {
    "id": "inv_cl9ebqhxk00008gk5y6n1n7u7",
    "quantity": 50,
    "minQuantity": 10,
    "maxQuantity": 200,
    "reservedQty": 0,
    "availableQty": 50,
    "isActive": true,
    "createdAt": "2025-01-05T10:30:00.000Z",
    "updatedAt": "2025-01-05T10:30:00.000Z",
    "productId": "prod_cl9ebqhxk00008gk5y6n1n7u7",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6"
  },
  "requestId": "req_create_inventory_001"
}
```

### **GET /api/v1/inventory/alerts**
```json
{
  "success": true,
  "data": [
    {
      "productId": "prod_cl9ebqhxk00008gk5y6n1n7u8",
      "productName": "Samsung Galaxy S24",
      "sku": "GALS24128",
      "currentQuantity": 3,
      "minQuantity": 10,
      "severity": "LOW",
      "message": "Estoque abaixo do mínimo",
      "category": "Eletrônicos",
      "lastUpdated": "2025-01-05T09:30:00.000Z"
    },
    {
      "productId": "prod_cl9ebqhxk00008gk5y6n1n7u9",
      "productName": "MacBook Pro M3",
      "sku": "MBPROM3",
      "currentQuantity": 0,
      "minQuantity": 2,
      "severity": "OUT_OF_STOCK",
      "message": "Produto fora de estoque",
      "category": "Eletrônicos",
      "lastUpdated": "2025-01-05T08:00:00.000Z"
    }
  ],
  "requestId": "req_inventory_alerts_001",
  "meta": {
    "totalAlerts": 2,
    "criticalAlerts": 0,
    "lowStockAlerts": 1,
    "outOfStockAlerts": 1
  }
}
```

### **GET /api/v1/inventory/stats**
```json
{
  "success": true,
  "data": {
    "totalProducts": 25,
    "totalValue": 125000.50,
    "inStock": 20,
    "lowStock": 3,
    "outOfStock": 2,
    "totalQuantity": 1250,
    "totalReserved": 45,
    "totalAvailable": 1205,
    "byCategory": [
      {
        "categoryId": "cat_cl9ebqhxk00008gk5y6n1n7u6",
        "categoryName": "Eletrônicos",
        "products": 15,
        "totalQuantity": 800,
        "totalValue": 95000.00
      },
      {
        "categoryId": "cat_cl9ebqhxk00008gk5y6n1n7u7",
        "categoryName": "Roupas",
        "products": 10,
        "totalQuantity": 450,
        "totalValue": 30000.50
      }
    ]
  },
  "requestId": "req_inventory_stats_001"
}
```

### **POST /api/v1/inventory/:id/stock/add**
```json
{
  "success": true,
  "data": {
    "id": "inv_cl9ebqhxk00008gk5y6n1n7u6",
    "quantity": 35,
    "previousQuantity": 25,
    "addedQuantity": 10,
    "operation": "ADD",
    "reason": "Reposição de estoque",
    "updatedAt": "2025-01-05T10:30:00.000Z",
    "product": {
      "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
      "name": "iPhone 15 Pro",
      "sku": "IPH15PRO256"
    }
  },
  "requestId": "req_add_stock_001"
}
```

### **POST /api/v1/inventory/:id/stock/remove**
```json
{
  "success": true,
  "data": {
    "id": "inv_cl9ebqhxk00008gk5y6n1n7u6",
    "quantity": 30,
    "previousQuantity": 35,
    "removedQuantity": 5,
    "operation": "REMOVE",
    "reason": "Produto danificado",
    "updatedAt": "2025-01-05T10:45:00.000Z",
    "product": {
      "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
      "name": "iPhone 15 Pro",
      "sku": "IPH15PRO256"
    }
  },
  "requestId": "req_remove_stock_001"
}
```

---

## 📋 ORDERS - PEDIDOS

### **GET /api/v1/orders**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "ord_cl9ebqhxk00008gk5y6n1n7u6",
        "orderNumber": "ORD-2025-001",
        "status": "CONFIRMED",
        "totalAmount": 8499.98,
        "deliveryAddress": "Rua das Palmeiras, 456 - São Paulo, SP",
        "deliveryDate": "2025-01-06T14:00:00.000Z",
        "deliveryFee": 15.00,
        "whatsappMessageId": "msg_wa_123456",
        "notes": "Entrega pela manhã",
        "isActive": true,
        "createdAt": "2025-01-05T10:00:00.000Z",
        "updatedAt": "2025-01-05T10:15:00.000Z",
        "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
        "customerId": "cust_cl9ebqhxk00008gk5y6n1n7u6",
        "customer": {
          "id": "cust_cl9ebqhxk00008gk5y6n1n7u6",
          "name": "Maria Santos",
          "email": "maria@email.com",
          "phone": "+5511888888888",
          "whatsappId": "5511888888888"
        },
        "items": [
          {
            "id": "item_cl9ebqhxk00008gk5y6n1n7u6",
            "quantity": 1,
            "unitPrice": 7999.99,
            "totalPrice": 7999.99,
            "productId": "prod_cl9ebqhxk00008gk5y6n1n7u6",
            "product": {
              "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
              "name": "iPhone 15 Pro",
              "sku": "IPH15PRO256",
              "imageUrl": "https://example.com/images/iphone-15-pro.jpg"
            }
          }
        ],
        "statusHistory": [
          {
            "status": "PENDING",
            "timestamp": "2025-01-05T10:00:00.000Z",
            "notes": "Pedido criado"
          },
          {
            "status": "CONFIRMED",
            "timestamp": "2025-01-05T10:15:00.000Z",
            "notes": "Pedido confirmado"
          }
        ]
      }
    ],
    "total": 1
  },
  "requestId": "req_orders_001",
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "pages": 1
    }
  }
}
```

### **POST /api/v1/orders**
```json
{
  "success": true,
  "data": {
    "id": "ord_cl9ebqhxk00008gk5y6n1n7u7",
    "orderNumber": "ORD-2025-002",
    "status": "PENDING",
    "totalAmount": 5014.99,
    "deliveryAddress": "Av. Paulista, 1000 - São Paulo, SP",
    "deliveryDate": null,
    "deliveryFee": 15.00,
    "whatsappMessageId": null,
    "notes": "Pedido via WhatsApp",
    "isActive": true,
    "createdAt": "2025-01-05T11:00:00.000Z",
    "updatedAt": "2025-01-05T11:00:00.000Z",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
    "customerId": "cust_cl9ebqhxk00008gk5y6n1n7u7",
    "customer": {
      "id": "cust_cl9ebqhxk00008gk5y6n1n7u7",
      "name": "Carlos Oliveira",
      "phone": "+5511777777777"
    },
    "items": [
      {
        "id": "item_cl9ebqhxk00008gk5y6n1n7u7",
        "quantity": 1,
        "unitPrice": 4999.99,
        "totalPrice": 4999.99,
        "productId": "prod_cl9ebqhxk00008gk5y6n1n7u7",
        "product": {
          "name": "Samsung Galaxy S24",
          "sku": "GALS24128"
        }
      }
    ]
  },
  "requestId": "req_create_order_001"
}
```

### **GET /api/v1/orders/:id**
```json
{
  "success": true,
  "data": {
    "id": "ord_cl9ebqhxk00008gk5y6n1n7u6",
    "orderNumber": "ORD-2025-001",
    "status": "CONFIRMED",
    "totalAmount": 8499.98,
    "deliveryAddress": "Rua das Palmeiras, 456 - São Paulo, SP",
    "deliveryDate": "2025-01-06T14:00:00.000Z",
    "deliveryFee": 15.00,
    "whatsappMessageId": "msg_wa_123456",
    "notes": "Entrega pela manhã",
    "isActive": true,
    "createdAt": "2025-01-05T10:00:00.000Z",
    "updatedAt": "2025-01-05T10:15:00.000Z",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
    "customerId": "cust_cl9ebqhxk00008gk5y6n1n7u6",
    "customer": {
      "id": "cust_cl9ebqhxk00008gk5y6n1n7u6",
      "name": "Maria Santos",
      "email": "maria@email.com",
      "phone": "+5511888888888",
      "address": "Rua das Palmeiras, 456 - São Paulo, SP",
      "whatsappId": "5511888888888"
    },
    "items": [
      {
        "id": "item_cl9ebqhxk00008gk5y6n1n7u6",
        "quantity": 1,
        "unitPrice": 7999.99,
        "totalPrice": 7999.99,
        "productId": "prod_cl9ebqhxk00008gk5y6n1n7u6",
        "product": {
          "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
          "name": "iPhone 15 Pro",
          "description": "Smartphone Apple iPhone 15 Pro 256GB",
          "sku": "IPH15PRO256",
          "imageUrl": "https://example.com/images/iphone-15-pro.jpg",
          "category": {
            "name": "Eletrônicos"
          }
        }
      }
    ],
    "statusHistory": [
      {
        "status": "PENDING",
        "timestamp": "2025-01-05T10:00:00.000Z",
        "notes": "Pedido criado via WhatsApp"
      },
      {
        "status": "CONFIRMED",
        "timestamp": "2025-01-05T10:15:00.000Z",
        "notes": "Pedido confirmado pelo vendedor"
      }
    ],
    "timeline": [
      {
        "event": "ORDER_CREATED",
        "timestamp": "2025-01-05T10:00:00.000Z",
        "description": "Pedido criado"
      },
      {
        "event": "ORDER_CONFIRMED",
        "timestamp": "2025-01-05T10:15:00.000Z",
        "description": "Pedido confirmado"
      }
    ]
  },
  "requestId": "req_order_details_001"
}
```

### **PUT /api/v1/orders/:id/status**
```json
{
  "success": true,
  "data": {
    "id": "ord_cl9ebqhxk00008gk5y6n1n7u6",
    "orderNumber": "ORD-2025-001",
    "status": "PREPARING",
    "previousStatus": "CONFIRMED",
    "statusChangedAt": "2025-01-05T11:00:00.000Z",
    "updatedAt": "2025-01-05T11:00:00.000Z",
    "statusHistory": [
      {
        "status": "PENDING",
        "timestamp": "2025-01-05T10:00:00.000Z",
        "notes": "Pedido criado"
      },
      {
        "status": "CONFIRMED",
        "timestamp": "2025-01-05T10:15:00.000Z",
        "notes": "Pedido confirmado"
      },
      {
        "status": "PREPARING",
        "timestamp": "2025-01-05T11:00:00.000Z",
        "notes": "Preparando pedido"
      }
    ]
  },
  "requestId": "req_update_order_status_001"
}
```

### **GET /api/v1/orders/stats**
```json
{
  "success": true,
  "data": {
    "period": "today",
    "totalOrders": 15,
    "totalRevenue": 45000.50,
    "averageOrderValue": 3000.03,
    "byStatus": {
      "PENDING": 3,
      "CONFIRMED": 5,
      "PREPARING": 4,
      "READY": 2,
      "DELIVERED": 1,
      "CANCELLED": 0
    },
    "topProducts": [
      {
        "productId": "prod_cl9ebqhxk00008gk5y6n1n7u6",
        "productName": "iPhone 15 Pro",
        "quantity": 8,
        "revenue": 63999.92
      }
    ],
    "hourlyStats": [
      {
        "hour": "09:00",
        "orders": 2,
        "revenue": 12000.00
      },
      {
        "hour": "10:00",
        "orders": 5,
        "revenue": 18000.50
      }
    ]
  },
  "requestId": "req_order_stats_001"
}
```

### **GET /api/v1/orders/recent**
```json
{
  "success": true,
  "data": [
    {
      "id": "ord_cl9ebqhxk00008gk5y6n1n7u6",
      "orderNumber": "ORD-2025-001",
      "status": "CONFIRMED",
      "totalAmount": 8499.98,
      "createdAt": "2025-01-05T10:00:00.000Z",
      "customer": {
        "name": "Maria Santos",
        "phone": "+5511888888888"
      },
      "itemsCount": 1,
      "firstItem": {
        "productName": "iPhone 15 Pro",
        "quantity": 1
      }
    }
  ],
  "requestId": "req_recent_orders_001"
}
```

### **GET /api/v1/orders/by-status/:status**
```json
{
  "success": true,
  "data": [
    {
      "id": "ord_cl9ebqhxk00008gk5y6n1n7u6",
      "orderNumber": "ORD-2025-001",
      "status": "CONFIRMED",
      "totalAmount": 8499.98,
      "createdAt": "2025-01-05T10:00:00.000Z",
      "customer": {
        "id": "cust_cl9ebqhxk00008gk5y6n1n7u6",
        "name": "Maria Santos",
        "phone": "+5511888888888"
      },
      "itemsCount": 1
    }
  ],
  "requestId": "req_orders_by_status_001"
}
```

---

## 👥 CUSTOMERS - CLIENTES

### **GET /api/v1/admin/customers**
```json
{
  "success": true,
  "data": {
    "customers": [
      {
        "id": "cust_cl9ebqhxk00008gk5y6n1n7u6",
        "name": "Maria Santos",
        "email": "maria@email.com",
        "phone": "+5511888888888",
        "address": "Rua das Palmeiras, 456 - São Paulo, SP",
        "whatsappId": "5511888888888",
        "isActive": true,
        "createdAt": "2025-01-01T10:00:00.000Z",
        "updatedAt": "2025-01-01T10:00:00.000Z",
        "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
        "_count": {
          "orders": 5
        },
        "totalSpent": 25000.50,
        "lastOrderDate": "2025-01-05T10:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 1,
      "pages": 1
    }
  },
  "requestId": "req_customers_001"
}
```

### **GET /api/v1/admin/customers/:id**
```json
{
  "success": true,
  "data": {
    "id": "cust_cl9ebqhxk00008gk5y6n1n7u6",
    "name": "Maria Santos",
    "email": "maria@email.com",
    "phone": "+5511888888888",
    "address": "Rua das Palmeiras, 456 - São Paulo, SP",
    "whatsappId": "5511888888888",
    "isActive": true,
    "createdAt": "2025-01-01T10:00:00.000Z",
    "updatedAt": "2025-01-01T10:00:00.000Z",
    "userId": "user_cl9ebqhxk00008gk5y6n1n7u6",
    "stats": {
      "totalOrders": 5,
      "totalSpent": 25000.50,
      "averageOrderValue": 5000.10,
      "lastOrderDate": "2025-01-05T10:00:00.000Z",
      "favoriteCategory": "Eletrônicos"
    },
    "recentOrders": [
      {
        "id": "ord_cl9ebqhxk00008gk5y6n1n7u6",
        "orderNumber": "ORD-2025-001",
        "status": "CONFIRMED",
        "totalAmount": 8499.98,
        "createdAt": "2025-01-05T10:00:00.000Z"
      }
    ]
  },
  "requestId": "req_customer_details_001"
}
```

### **GET /api/v1/admin/customers/:id/orders**
```json
{
  "success": true,
  "data": [
    {
      "id": "ord_cl9ebqhxk00008gk5y6n1n7u6",
      "orderNumber": "ORD-2025-001",
      "status": "CONFIRMED",
      "totalAmount": 8499.98,
      "createdAt": "2025-01-05T10:00:00.000Z",
      "updatedAt": "2025-01-05T10:15:00.000Z",
      "items": [
        {
          "id": "item_cl9ebqhxk00008gk5y6n1n7u6",
          "quantity": 1,
          "unitPrice": 7999.99,
          "totalPrice": 7999.99,
          "product": {
            "id": "prod_cl9ebqhxk00008gk5y6n1n7u6",
            "name": "iPhone 15 Pro",
            "sku": "IPH15PRO256"
          }
        }
      ]
    }
  ],
  "requestId": "req_customer_orders_001"
}
```

---

## 🔗 WEBHOOKS - INTEGRAÇÃO WHATSAPP

### **POST /api/v1/webhooks/whatsapp**
```json
{
  "success": true,
  "data": {
    "received": true,
    "processedAt": "2025-01-05T10:30:00.000Z",
    "messageId": "msg_wa_123456",
    "status": "PROCESSED"
  },
  "message": "WhatsApp webhook received - full implementation in later tasks",
  "requestId": "req_whatsapp_webhook_001"
}
```

---

## ❌ EXEMPLOS DE ERRO

### **400 - Validation Error**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados de entrada inválidos",
    "details": [
      {
        "field": "email",
        "message": "Email é obrigatório"
      },
      {
        "field": "price",
        "message": "Preço deve ser maior que 0"
      }
    ]
  },
  "requestId": "req_validation_error_001"
}
```

### **401 - Unauthorized**
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Token de autenticação inválido ou expirado"
  },
  "requestId": "req_unauthorized_001"
}
```

### **403 - Forbidden**
```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Acesso negado. Permissões insuficientes"
  },
  "requestId": "req_forbidden_001"
}
```

### **404 - Not Found**
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Recurso não encontrado",
    "details": {
      "resource": "Product",
      "id": "prod_invalid_id"
    }
  },
  "requestId": "req_not_found_001"
}
```

### **409 - Conflict**
```json
{
  "success": false,
  "error": {
    "code": "CONFLICT",
    "message": "Recurso já existe",
    "details": {
      "field": "email",
      "value": "user@example.com",
      "reason": "Email já está em uso"
    }
  },
  "requestId": "req_conflict_001"
}
```

### **500 - Internal Server Error**
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "Erro interno do servidor",
    "details": {
      "timestamp": "2025-01-05T10:30:00.000Z",
      "errorId": "err_internal_001"
    }
  },
  "requestId": "req_internal_error_001"
}
```

---

## 📊 CÓDIGOS DE STATUS HTTP

| Status | Significado | Uso |
|--------|-------------|-----|
| **200** | OK | Operação bem-sucedida |
| **201** | Created | Recurso criado com sucesso |
| **400** | Bad Request | Dados inválidos |
| **401** | Unauthorized | Não autenticado |
| **403** | Forbidden | Sem permissão |
| **404** | Not Found | Recurso não encontrado |
| **409** | Conflict | Conflito de dados |
| **422** | Unprocessable Entity | Validação falhou |
| **500** | Internal Server Error | Erro interno |

---

## 🔧 CONFIGURAÇÃO AXIOS FRONTEND

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

// Interceptor para adicionar token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor para tratar respostas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirecionar para login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
```

---

## 📱 OTIMIZAÇÕES MOBILE (WhatsApp)

### **Catálogo Público - Otimizado para Mobile:**
- **Cache**: 5 minutos
- **Compressão**: Gzip ativado
- **Imagens**: Lazy loading
- **Paginação**: Infinite scroll
- **Timeout**: 2 segundos máximo

### **Headers Recomendados:**
```http
Cache-Control: public, max-age=300
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
X-Response-Time: 150ms
```

---

**🎯 RESULTADO: Documentação completa de todas as APIs com exemplos reais de resposta para implementação eficiente do frontend.**

**⚡ FOCO: Integração WhatsApp, Performance Mobile, Padrões Consistentes**

---

*Documentação criada para desenvolvimento eficiente - Janeiro 2025* 
# 🚀 **exp-seq-auth-api**
---

## 🌟 **Funcionalidades Principales**

- **Autenticación de usuarios** con control de acceso.
- Gestión de **Productos**:
  - Creación, lectura, actualización y eliminación.
  - Filtro y paginación avanzados.
- Gestión de **Comentarios**:
  - Valora productos con un sistema de puntuación.
  - Total control sobre los comentarios realizados.
- Consultas personalizables con parámetros como `search`, `include`, `limit` y más.

---

## ⚙️ **Requerimientos Funcionales**

1. Sistema de autenticación para proteger recursos sensibles.
2. CRUD para **Productos** y **Comentarios**.
3. Filtro y paginación en todas las consultas.
4. Asociaciones entre modelos:
   - Un usuario puede gestionar varios productos y comentarios.
   - Los comentarios están vinculados a productos y usuarios.

---

## 📋 **Estructura del API**

### **Autenticación**
- `POST /auth/login` - Autenticar usuario y obtener un token de acceso.  

### **Productos**
- `GET /models/products` - Listar productos con soporte para filtros y paginación.  
- `GET /models/products/:id` - Obtener un producto por su ID.  
- `POST /models/products` - Crear un producto (autenticación requerida).  
- `PUT /models/products/:id` - Actualizar un producto existente (autenticación requerida).  
- `DELETE /models/products/:id` - Eliminar un producto (autenticación requerida).  

### **Comentarios**
- `GET /models/comments` - Listar comentarios con soporte para filtros y paginación.  
- `GET /models/comments/:id` - Obtener un comentario por su ID.  
- `POST /models/comments` - Crear un nuevo comentario (autenticación requerida).  
- `PUT /models/comments/:id` - Actualizar un comentario existente (autenticación requerida).  
- `DELETE /models/comments/:id` - Eliminar un comentario (autenticación requerida).  

---

## 🛠️ **Modelos y Validaciones**

### **User**
- Campos:
  - `username` (único, obligatorio).  
  - `password` (obligatorio).  
- Relaciones:
  - Puede crear varios productos y comentarios.
  
### **Product**
- Campos:
  - `name` (obligatorio).  
  - `description`.  
  - `price` (número fraccionario, obligatorio).  
- Relaciones:
  - Asociado a un **User**.
  - Puede recibir varios **Comments**.

### **Comment**
- Campos:
  - `rating` (entero, entre 1 y 5).  
  - `text` (obligatorio).  
- Relaciones:
  - Asociado a un **Product** y un **User**.

---

## 🔎 **Filtros y Paginación**

Las consultas `GET /models/products` y `GET /models/comments` soportan los siguientes parámetros:

- **`search`**: Realiza búsquedas en campos relevantes (por ejemplo, `name` o `description`).  
- **`include`**: Define las relaciones a incluir en la respuesta (por ejemplo, `comments` para productos).  
- **`limit`**: Controla el número máximo de resultados por página.  
- **`offset`**: Define

---

## 🛠️ **Cómo Usar Este Proyecto**

Sigue estos pasos para poner en marcha esta **API** y aprovechar al máximo sus funcionalidades.

### **1. Clonar el Repositorio**
Primero, clona este repositorio en tu máquina local:
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>

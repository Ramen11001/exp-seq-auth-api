# 🚀 **exp-seq-auth-api**

## 🌟 **Main Features**

- **User Authentication** with access control.
- **Products Management**:
  - Create, read, update, and delete (CRUD).
  - Advanced filtering and pagination.
- **Comments Management**:
  - Rate products with a scoring system.
  - Full control over submitted comments.
- Customizable queries with parameters like `search`, `include`, `limit`, and more.

## ⚙️ **Functional Requirements**

1. Authentication system to protect sensitive resources.
2. CRUD for **Products** and **Comments**.
3. Filtering and pagination in all queries.
4. Associations between models:
   - A user can manage multiple products and comments.
   - Comments are linked to products and users.

## 📋 **API Structure**

### **Authentication**
- `POST /auth/login` - Authenticate user and obtain an access token.

### **Products**
- `GET /models/products` - List products with support for filters and pagination.  
- `GET /models/products/:id` - Get a product by its ID.  
- `POST /models/products` - Create a product (authentication required).  
- `PUT /models/products/:id` - Update an existing product (authentication required).  
- `DELETE /models/products/:id` - Delete a product (authentication required).  

### **Comments**
- `GET /models/comments` - List comments with support for filters and pagination.  
- `GET /models/comments/:id` - Get a comment by its ID.  
- `POST /models/comments` - Create a new comment (authentication required).  
- `PUT /models/comments/:id` - Update an existing comment (authentication required).  
- `DELETE /models/comments/:id` - Delete a comment (authentication required).  


## 🛠️ **Models and Validations**

### **User**
- Fields:
  - `username` (unique, required).  
  - `password` (required).  
- Relationships:
  - Can create multiple products and comments.

### **Product**
- Fields:
  - `name` (required).  
  - `description`.  
  - `price` (fractional number, required).  
- Relationships:
  - Associated with a **User**.
  - Can receive multiple **Comments**.

### **Comment**
- Fields:
  - `rating` (integer, between 1 and 5).  
  - `text` (required).  
- Relationships:
  - Associated with a **Product** and a **User**.


## 🔎 **Filters and Pagination**

The queries `GET /models/products` and `GET /models/comments` support the following parameters:

- **`search`**: Searches relevant fields (e.g., `name` or `description`).  
- **`include`**: Defines relationships to include in the response (e.g., `comments` for products).  
- **`limit`**: Controls the maximum number of results per page.  
- **`offset`**: Defines the starting point for results.


## 🛠️ **How to Use This Project**

Follow these steps to set up this **API** and make the most of its features.

### **1. Clone the Repository**
First, clone this repository to your local machine:
```bash
git clone <https://github.com/Ramen11001/exp-seq-auth-api.git>
cd <exp-seq-auth-api>
```

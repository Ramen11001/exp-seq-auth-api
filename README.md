# 🚀 **exp-seq-auth-api**

## 🌟 **Project Description**

This project is an **API** developed using **Node.js 16**, **Express** and **Sequelize**. The API enables the management of **Products** and **Review**, along with a user authentication system. Additionally, it includes filtering and pagination functionalities for more efficient queries.

## 🛠️ **Functional Requirements**

The project must fulfill the following requirements:

### **User Authentication**
- Users should be able to log in and obtain an access token.

### **Product Management**
- Create, read, update, and delete products..
- Associate products with the user who created them.

### **Comment Management**
- Create, read, update, and delete comments.
- Associate comments with a product and a user.


## 📋 **API Structure**

### **Authentication**
- `POST /auth/login` - Authenticate a user and obtain an access token..  

### **Products**
- `GET /models/products` - List products with support for filters and pagination.
- `GET /models/products/:id` - Retrieve a product by its ID.
- `POST /models/products` - Create a product (authentication required).
- `PUT /models/products/:id` - Update an existing product (authentication required).
- `DELETE /models/products/:id` - Delete a product (authentication required).

### **Comments**
- `GET /models/comments` - List comments with support for filters and pagination.  
- `GET /models/comments/:id` - Retrieve a comment by its ID.  
- `POST /models/comments` - Create a new comment (authentication required).
- `PUT /models/comments/:id` - Update an existing comment (authentication required). 
- `DELETE /models/comments/:id` - Delete a comment (authentication required).  

## ⚙️ **Installation**

Follow these steps to install and run the project:

Clone this repository to your local machine.
   ```bash
   git clone <https://github.com/Ramen11001/exp-seq-auth-api.git>
cd <exp-seq-auth-api>
```

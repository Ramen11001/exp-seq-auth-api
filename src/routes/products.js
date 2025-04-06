const express = require("express");
const router = express.Router();
const productServise = require("../services/products.service");

router.get("/routes/products", validateProductData, async (req, res) => {
  try {
    const product = await productServise.getAllProducts();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al otener los productos" });
  }
});

router.get("/routes/products/:id",validateProductData, async (req, res) => {
  try {
    const products = await productServise.getProductsById(req.params.id);
    if (!products) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
});

router.post("/routes/products",validateProductData, async (req, res) => {
  try {
    const newProduct = await productServise.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

router.put("/routes/products/:id",validateProductData, async (req, res) => {
  try {
    const upadatedProduct = await productServise.upadateProduct(req.params.id);
    if (!upadatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(upadatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

router.delete("/routes/products/:id",validateProductData, async (req, res) => {
  try {
    const deletedProduct = await productServise.deleteProduct(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

module.exports = router;

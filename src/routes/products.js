const express = require("express");
const router = express.Router();
const productService = require("../services/products.service");
const { validateProductData, validateProductDataUpdate } = require("../validators/products.validator");
const { validationResult } = require("express-validator");
const queryMiddleware = require('../middleware/filter');

router.post("/", validateProductData, async (req, res) => {
  const errors = validationResult(req);
  console.log(errors.array());
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await productService.getProductsById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
});

router.put("/:id", validateProductDataUpdate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedProduct = await productService.upadateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

//help idk
router.get('/', queryMiddleware, async (req, res) => {
  try {
      const products = await Product.findAll(req.queryOptions);
      res.json(products);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;

module.exports = router;

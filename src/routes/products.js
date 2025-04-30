const express = require("express");
const router = express.Router();
const productService = require("../services/products.service");
const {
  validateProductData,
  validateProductDataUpdate,
} = require("../validators/products.validator");
const { validationResult } = require("express-validator");
const { filterPagination } = require("../middleware/filter");

/**
 * Route handler for creating a new product.
 * Validates the request body before passing it to the service.
 *
 * @route POST /products
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.post("/", validateProductData, async (req, res) => {
  const errors = validationResult(req);
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

/**
 * Route handler for retrieving products with pagination and filtering.
 * Uses middleware to modify query options before passing them to the service.
 *
 * @route GET /products
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.get("/", filterPagination, async (req, res) => {
  try {
    const products = await productService.getProducts(req.queryOptions);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

/**
 * Route handler for retrieving a specific product by ID.
 * Returns a 404 error if the product is not found.
 *
 * @route GET /products/:id
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
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

/**
 * Route handler for updating a product by ID.
 * Validates the request body and returns a 404 error if the product is not found.
 *
 * @route PUT /products/:id
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
router.put("/:id", validateProductDataUpdate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

/**
 * Route handler for deleting a product by ID.
 * Returns a 404 error if the product does not exist.
 *
 * @route DELETE /products/:id
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
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

module.exports = router;

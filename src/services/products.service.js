const { Product } = require("../models");

/**
 * Retrieves all products based on query options.
 *
 * @async
 * @function getProducts
 * @param {object} [queryOptions={}] - Options for filtering and pagination.
 * @returns {Promise<Array>} - List of products matching query options.
 */
const getProducts = async (queryOptions = {}) => {
  return await Product.findAll(queryOptions);
};

/**
 * Retrieves a specific product by its ID.
 *
 * @async
 * @function getProductsById
 * @param {number} id - The ID of the product to retrieve.
 * @returns {Promise<object|null>} - The found product or null if not found.
 */
const getProductsById = async (id) => {
  return await Product.findByPk(id);
};

/**
 * Creates a new product in the database.
 *
 * @async
 * @function createProduct
 * @param {object} data - The data for the new product.
 * @returns {Promise<object>} - The newly created product.
 */
const createProduct = async (data) => {
  return await Product.create(data); //data is generic
};

/**
 * Updates an existing product by ID.
 *
 * @async
 * @function updateProduct
 * @param {number} id - The ID of the product to update.
 * @param {object} data - The new data for the product.
 * @returns {Promise<object|null>} - The updated product or null if not found.
 */
const updateProduct = async (id, data, userId) => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error('Producto no encontrado');
  }


  if (product.userId !== userId) {
    throw new Error('No tienes permiso para editar este producto');
  }

  return await product.update(data);
};

/**
 * Deletes a product by ID.
 *
 * @async
 * @function deleteProduct
 * @param {number} id - The ID of the product to delete.
 * @returns {Promise<object|null>} - A success message or null if the product was not found.
 */
const deleteProduct = async (id, userId) => {
  const product = await Product.findByPk(id);
  if (!product) {
    return null;
  }

  if (product.userId !== userId) {
    throw new Error('No tienes permiso para eliminar este producto');
  }
  await product.destroy(); //Sequelize's own function
  return { message: "Producto eliminado exitosamente" };
};

module.exports = {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};

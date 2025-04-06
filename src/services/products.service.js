const products = require("../models/product");

const getAllProducts = async () => {
  return await Product.findAll();
};

const getProductById = async () => {
  return await Product.findByPk(id);
};
const createProduct = async (data) => {
  return await Product.create(data); //data is generic
};

const upadateProduct = async (id, data) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.upadate(data); //Sequelize's own function
  }
  return null;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (product) {
    await product.destroy(); //Sequelize's own function
  }
  return null;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  upadateProduct,
  deleteProduct,
};

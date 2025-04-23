const e = require("express");
const { Product } = require("../models");

const getProducts = async (queryOptions = {}) => {
  return await Product.findAll(queryOptions);
};

const getProductsById = async (id) => {
  return await Product.findByPk(id);
};
const createProduct = async (data) => {
  return await Product.create(data); //data is generic
};

const upadateProduct = async (id, data) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.update(data); //Sequelize's own function
  }
  return null;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    return null;
  }

  await product.destroy(); //Sequelize's own function
  return { message: "Producto eliminado exitosamente" };
};

module.exports = {
  getProducts,
  getProductsById,
  createProduct,
  upadateProduct,
  deleteProduct,
};

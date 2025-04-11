const e = require("express");
const { Product } = require("../models");

const getAllProducts = async () => {
  return await Product.findAll();
};

const getProductsById = async (id) => {
  return await Product.findByPk(id);
};
const createProduct = async (data) => {
  return await Product.create(data); //data is generic
};

const upadateProduct  = async (id, data) => {
  const product = await Product.findByPk(id);
  if (product) {
    return await product.update(data); //Sequelize's own function
  }
  return null;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if(!product){
    throw new Error("Producto no encontrado"); 
  }

await product.destroy(); //Sequelize's own function
return { message: "Producto eliminado exitosamente" };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  upadateProduct,
  deleteProduct,
};

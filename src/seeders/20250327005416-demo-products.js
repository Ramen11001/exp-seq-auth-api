'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    async function getUserByUsername(){
      const idUser=await User.findAll({
        attributes: ['id'], 
      });
      return idUser
    }
    return queryInterface.bulkInsert('Products', [
      {
        name: "Skirt",
        description: "Elegant and comfortable skirt, size M, perfect for casual or formal occasions.",
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        //This is for ID.
        userId: ,
      },
      {
        name: "T-Shirt",
        description: "High-quality cotton T-shirt, size L, available in a variety of colors, breathable fabric for daily wear.",
        price: 12.50,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.find((e)=> e.username == getUser('Victor')).id
      },
      {
        name: "Sneakers",
        description: "Unisex running sneakers with lightweight material, size 9, designed for maximum comfort and durability.",
        price: 49.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.find((e)=> e.username == getUser('Eddy')).id
      },
      {
        name: "Backpack",
        description: "Water-resistant backpack with multiple compartments, ideal for school or travel, 25L capacity.",
        price: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.find((e)=> e.username == getUser('Nestor')).id
      },
      {
        name: "Smartwatch",
        description: "Advanced smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
        price: 89.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.find((e)=> e.username == getUser('Almarales')).id
      },
      {
        name: "Bluetooth Headphones",
        description: "Wireless over-ear headphones with noise cancellation and up to 30 hours of battery life.",
        price: 59.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.find((e)=> e.username == getUser('José')).id
      },
      {
        name: "Spiderman Notebook",
        description: "Hardcover notebook with 120 pages of dotted paper, perfect for journaling or sketching.",
        price: 8.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.find((e)=> e.username == getUser('Rafael')).id
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    //This is for delete the Products Table
    return queryInterface.bulkDelete('Products', null, {});
  }
};

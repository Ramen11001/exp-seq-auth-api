'use strict';
const { User } = require('../models');
const { Product } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //For User
    async function getUserId() {
      const idUser = await User.findAll({
        attributes: ['id'],
      });
      return idUser
    }
    const userIds = await getUserId();
    //For Product
    async function getProductId() {
      const idProduct = await Product.findAll({
        attributes: ['id'],
      });
      return idProduct
    }
    const productIds = await getProductId();
    return queryInterface.bulkInsert('Comments', [
      {
        rating: 1,
        text: "Nice",
        userId: userIds[0].id,
        productId: productIds[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 2,
        text: "Perfect size",
        userId: userIds[1].id,
        productId: productIds[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 3,
        text: "Cool color!!!!",
        userId: userIds[2].id,
        productId: productIds[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 4,
        text: "I prefer another model",
        userId: userIds[3].id,
        productId: productIds[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 5,
        text: "Amazing!!",
        userId: userIds[4].id,
        productId: productIds[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 3,
        text: "Long size",
        userId: userIds[5].id,
        productId: productIds[5].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rating: 1,
        text: "Cool color",
        userId: userIds[6].id,
        productId: productIds[6].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);


  },
  async down(queryInterface, Sequelize) {
    //This is for delete the Products Table
    return queryInterface.bulkDelete('Comments', null, {});
  }
};

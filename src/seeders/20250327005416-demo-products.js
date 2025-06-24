'use strict';
const { User } = require('../models');
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
    return queryInterface.bulkInsert('Products', [
      {
        name: "Skirt",
        description: "Elegant and comfortable skirt, size M, perfect for casual or formal occasions.",
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        //This is for ID.
        userId: userIds[0].id,
      },
      {
        name: "Blouse",
        description: "Lightweight and stylish blouse, size M, ideal for sunny days or office outfits.",
        price: 24.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[0].id,
      },
      {
        name: "Jeans",
        description: "Classic blue jeans, size M, comfortable fit for everyday wear.",
        price: 34.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[0].id,
      },
      {
        name: "T-Shirt",
        description: "Soft cotton T-shirt, size M, with modern print design.",
        price: 14.49,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[0].id,
      },
      {
        name: "Dress",
        description: "Flowy and elegant dress, size M, perfect for events or parties.",
        price: 39.95,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[3].id,
      },
      {
        name: "Cardigan",
        description: "Cozy knitted cardigan, size M, great for layering in chilly weather.",
        price: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[4].id,
      },
      {
        name: "Shorts",
        description: "Casual denim shorts, size M, with a relaxed summer look.",
        price: 18.49,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[6].id,
      },
      {
        name: "Tank Top",
        description: "Sleeveless tank top, size M, breathable and perfect for workouts.",
        price: 11.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[1].id,
      },
      {
        name: "Sweater",
        description: "Warm wool sweater, size M, stylish yet comfortable.",
        price: 32.00,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[1].id,
      },
      {
        name: "Jacket",
        description: "Light windbreaker jacket, size M, functional and sporty.",
        price: 45.00,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[2].id,
      },
      {
        name: "Leggings",
        description: "Stretchy and soft leggings, size M, for casual wear or exercise.",
        price: 21.49,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[5].id,
      },
      {
        name: "Poncho",
        description: "Boho-style poncho, one size fits most, with fringe details.",
        price: 26.75,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[2].id,
      },
      {
        name: "Scarf",
        description: "Light silk scarf, elegant accessory for any outfit.",
        price: 12.00,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[0].id,
      },
      {
        name: "Romper",
        description: "Trendy floral romper, size L, playful and modern.",
        price: 28.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[3].id,
      },
      {
        name: "Kimono",
        description: "Chiffon kimono cover-up, size M, adds flair to beachwear or basics.",
        price: 23.50,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[4].id,
      },
      {
        name: "Overalls",
        description: "Utility denim overalls, size M, fun and versatile outfit piece.",
        price: 37.90,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[5].id,
      },
      {
        name: "T-Shirt",
        description: "High-quality cotton T-shirt, size L, available in a variety of colors, breathable fabric for daily wear.",
        price: 12.50,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[1].id
      },
      {
        name: "Sneakers",
        description: "Unisex running sneakers with lightweight material, size 9, designed for maximum comfort and durability.",
        price: 49.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[2].id
      },
      {
        name: "Backpack",
        description: "Water-resistant backpack with multiple compartments, ideal for school or travel, 25L capacity.",
        price: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[3].id
      },
      {
        name: "Smartwatch",
        description: "Advanced smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
        price: 89.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[4].id
      },
      {
        name: "Bluetooth Headphones",
        description: "Wireless over-ear headphones with noise cancellation and up to 30 hours of battery life.",
        price: 59.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[5].id
      },
      {
        name: "Spiderman Notebook",
        description: "Hardcover notebook with 120 pages of dotted paper, perfect for journaling or sketching.",
        price: 8.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userIds[6].id
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    //This is for delete the Products Table
    return queryInterface.bulkDelete('Products', null, {});
  }
};

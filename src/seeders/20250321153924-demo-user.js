'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
      {
        username: "Grace",
        password: "idk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        username:"Victior",
        password:"abc3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Rafael",
        password: "34r",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'José',
        password: "h76",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Nestor",
        password: "npld3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Eddy",
        password: "olp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Almarales",
        password: "8uj",
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});

  },

};

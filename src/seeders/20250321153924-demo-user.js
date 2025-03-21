'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('prodify', [
      {
        username: 'Grace',
       password: 'idk',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
   queryInterface.bulkDelete('prodify', null, {});
   return queryInterface.bulkDelete('prodify', null, {});

  },

};

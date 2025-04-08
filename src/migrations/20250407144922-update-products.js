'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.STRING,
      allowNull: true, // Change this
    });

    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.DOUBLE,
      allowNull: false, // CChange this
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.STRING,
      allowNull: false, 
    });

    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });
  }
};

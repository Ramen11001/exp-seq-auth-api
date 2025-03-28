'use strict';
const md5 = require('md5')
//Import the md5 library, and only put md5("the password"),
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
      {
        username: "Grace",
        password: md5("id33r875frgffk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Víctor",
        password: md5("advf4t5ggf"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Rafael",
        password: md5("id4533rdfk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'José',
        password: md5("h76yujfg"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Nestor",
        password: md5("ixcddfvvfk645"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Eddy",
        password:md5("ittrr67887tdk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Almarales",
        password: md5("idrt6d6t6fdfdk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    //This is for delete the table
    return queryInterface.bulkDelete('User', null, {});
  },
};

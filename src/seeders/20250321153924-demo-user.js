'use strict';
const md5 = require('md5')
//Import the md5 library, and only put md5("the password"),
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
      {
        userId:"1",
        name: "Grace",
        password: md5("id33r875frgffk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:"2",
        username: "Víctor",
        password: md5("advf4t5ggf"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:"3",
        username: "Rafael",
        password: md5("id4533rdfk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:"4",
        username: 'José',
        password: md5("h76yujfg"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:"5",
        username: "Nestor",
        password: md5("ixcddfvvfk645"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:"6",
        username: "Eddy",
        password:md5("ittrr67887tdk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:"7",
        username: "Almarales",
        password: md5("idrt6d6t6fdfdk"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  },
};

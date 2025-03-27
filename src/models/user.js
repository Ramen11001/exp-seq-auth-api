'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.associate = (models) => {
        User.hasMany(models.Product, { //I used hasMany because a user can have several products 
          foreignKey: 'userId', //IT IS MADE IN MIGRATION
          onDelete: 'CASCADE', // Delete products when deleting the user
        });
      };
    }
  }
  User.init({
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};
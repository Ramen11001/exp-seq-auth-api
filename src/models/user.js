'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
        User.hasMany(models.Product, { //I used hasMany because a user can have several products 
          foreignKey: 'userId', //IT IS MADE IN MIGRATION
          onDelete: 'CASCADE', // Delete products when deleting the user
        });
        User.hasMany(models.Comment, { //I used hasMany because a user make many comments 
          foreignKey: 'userId', //IT IS MADE IN MIGRATION
          onDelete: 'CASCADE', // Delete products when deleting the user
        });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
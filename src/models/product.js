'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
        Product.belongsTo(models.User, { //Because one product can only have one user.
          foreignKey: 'userId',//IT IS MADE IN MIGRATION
          onDelete: 'CASCADE', // Relationship with the user, allows cascading deletion
        });
      
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
     {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
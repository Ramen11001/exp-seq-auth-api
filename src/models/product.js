"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  /**
   * Represents a product in the system.
   * Each product is associated with a user and can have multiple comments.
   */
  class Product extends Model {
    /**
     * Defines associations between models.
     * This method is called automatically in `models/index.js` and is not part of the Sequelize lifecycle.
     *
     * @param {object} models - All defined models in the application.
     */
    static associate(models) {
      Product.belongsTo(models.User, {
        foreignKey: "userId", // Defined in migration, links product to a specific user.
        onDelete: "CASCADE", // Enables cascading deletion when a user is removed.
      });

      Product.hasMany(models.Comment, {
        foreignKey: "productId", // Defined in migration, links product to multiple comments.
        onDelete: "CASCADE", // Enables cascading deletion when a product is removed.
      });
    }
  }

  // Initialize the Product model with attributes
  Product.init(
    {
      /**
       * Name of the product.
       * Expected to be a non-null string.
       */
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      /**
       * Description of the product.
       * Can be null if not provided.
       */
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      /**
       * Price of the product.
       * Expected to be a non-null floating-point number.
       */
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};

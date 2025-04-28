"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  /**
   * Represents a user in the system.
   * Each user can own multiple products and post multiple comments.
   */
  class User extends Model {
    /**
     * Defines associations between models.
     * This method is automatically called in `models/index.js` and is not part of the Sequelize lifecycle.
     *
     * @param {object} models - All defined models in the application.
     */
    static associate(models) {
      User.hasMany(models.Product, {
        foreignKey: "userId", // Defined in migration, links user to multiple products.
        onDelete: "CASCADE", // Enables cascading deletion when a user is removed.
      });
      User.hasMany(models.Comment, {
        foreignKey: "userId", // Defined in migration, links user to multiple comments.
        onDelete: "CASCADE", // Enables cascading deletion when a user is removed.
      });
    }
  }

  // Initialize the User model with attributes
  User.init(
    {
      /**
       * Unique username for the user.
       * Expected to be a non-null string.
       */
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      /**
       * Password for the user.
       * Expected to be a non-null string.
       */
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

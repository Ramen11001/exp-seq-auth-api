'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { //Because one comment can only have one user.
        foreignKey: 'userId',//IT IS MADE IN MIGRATION
        onDelete: 'CASCADE', // Relationship with the user, allows cascading deletion
      });
      Comment.belongsTo(models.Product, { //Because one comment can only have one product.
        foreignKey: 'productId',//IT IS MADE IN MIGRATION
        onDelete: 'CASCADE', // Relationship with the user, allows cascading deletion
      });
    }
  }
  Comment.init({
    rating: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
const { Op } = require('sequelize');
const Comment = require("../models/comment");
const Product = require("../models/product");
const User = require("../models/user");

function filterPagination(req, res, next) {
  const { search, include, limit, offset, pagination } = req.query;
  const queryOptions = {};

  if (req.baseUrl == '/products') {
    if (search) {
      queryOptions.where = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { description: { [Op.iLike]: `%${search}%` } },
        ],
      }
    }
  };

  if (req.baseUrl == '/comments') {
    if (search) {
      queryOptions.where = {
        [Op.or]: [
          { text: { [Op.iLike]: `%${search}%` } },
        ],
      }
    }
  }

  if (req.baseUrl == '/users') {
    if (search) {
      queryOptions.where = {
        [Op.or]: [
          { username: { [Op.iLike]: `%${search}%` } },
          { password: { [Op.iLike]: `%${search}%` } },
        ],
      }
    }
  }

  //Aquí ya viene como array. El split es innecesario. Cómo sería para un único caso que le mande
  if (include) {
    queryOptions.include = include.map((relation) => {
      return { association: relation };
    });
  }
  //OK??
  if (pagination === "true") {
    queryOptions.limit = limit && !isNaN(limit) ? parseInt(limit, 10) : 10;
    queryOptions.offset = offset && !isNaN(offset) ? parseInt(offset, 10) : 0;
  } else {
    delete queryOptions.limit; // Elimina la paginación si `pagination=false`
    delete queryOptions.offset;
  }


  req.queryOptions = queryOptions;
  next();
}
module.exports = { filterPagination };

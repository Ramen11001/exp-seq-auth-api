const { Op } = require('sequelize');
const Comment = require("../models/comment");
const Product = require("../models/product");

function filterPagination(req, res, next) {
  const { search, include, limit, offset, pagination } = req.query;
  const queryOptions = {};


  //OK
  if (search) {
    queryOptions.where = {
      [Op.or]: [
        { name: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } },
        { username: { [Op.iLike]: `%${search}%` } }, 
        { password: { [Op.iLike]: `%${search}%` } }, 
        { text: { [Op.iLike]: `%${search}%` } },
      ],
    };
  }
  //OK
  if (include) {
    queryOptions.include = include.split(",").map((relation) => {
      if (relation === "Comments") {
        return { association: 'Comments' };
      }
      return null;
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

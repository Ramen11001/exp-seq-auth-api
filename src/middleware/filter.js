const { Op } = require('sequelize');
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
  if (include) {
    if (Array.isArray(include)) {
      queryOptions.include = include.map((relation) => {
        return { association: relation };
      });
    }
    queryOptions.include = { association: include };
  };

  if (pagination === "true") {
    queryOptions.limit = limit && !isNaN(limit) ? parseInt(limit, 10) : 10;
    queryOptions.offset = offset && !isNaN(offset) ? parseInt(offset, 10) : 0;
  } else {
    delete queryOptions.limit;
    delete queryOptions.offset;
  }


  req.queryOptions = queryOptions;
  next();
}
module.exports = { filterPagination };

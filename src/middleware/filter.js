const { Op } = require("sequelize");
/**
 * Middleware for handling pagination and search queries.
 * Modifies `req.queryOptions` with the generated options.
 *
 * @param {object} req - HTTP request object.
 * @param {object} res - HTTP response object.
 * @param {function} next - Function to continue to the next middleware.
 */
function filterPagination(req, res, next) {
  const { search, include, limit, offset, pagination } = req.query;
  const queryOptions = {};
  // Search configuration for products
  if (req.baseUrl == "/products") {
    if (search) {
      queryOptions.where = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { description: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }
  }
  // Search configuration for comments
  if (req.baseUrl == "/comments") {
    if (search) {
      queryOptions.where = {
        [Op.or]: [{ text: { [Op.iLike]: `%${search}%` } }],
      };
    }
  }
  // Search configuration for users
  if (req.baseUrl == "/users") {
    if (search) {
      queryOptions.where = {
        [Op.or]: [
          { username: { [Op.iLike]: `%${search}%` } },
          { password: { [Op.iLike]: `%${search}%` } },
        ],
      };
    }
  }
  // Handling relationships using `include`
  if (include) {
    if (Array.isArray(include)) {
      queryOptions.include = include.map((relation) => {
        return { association: relation };
      });
    }
    queryOptions.include = { association: include };
  }
  // Pagination setup
  if (pagination === "true") {
    queryOptions.limit = limit && !isNaN(limit) ? parseInt(limit, 10) : 10;
    queryOptions.offset = offset && !isNaN(offset) ? parseInt(offset, 10) : 0;
  } else {
    delete queryOptions.limit;
    delete queryOptions.offset;
  }
  // Attach the query options to the request object
  req.queryOptions = queryOptions;
  next();
}
module.exports = { filterPagination };

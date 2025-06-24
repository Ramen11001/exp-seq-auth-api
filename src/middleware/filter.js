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
   const priceConditions = [];

    if (req.query.minPrecio && !isNaN(req.query.minPrecio)) {
      // Add price filter for minimum price
      priceConditions.push({ price: { [Op.gte]: parseFloat(req.query.minPrecio) } });
    }

    if (req.query.maxPrecio && !isNaN(req.query.maxPrecio)) {
      // Add price filter for maximum price
      priceConditions.push({ price: { [Op.lte]: parseFloat(req.query.maxPrecio) } });
    }

    // If priceConditions contains filters, apply them with Op.and
    if (priceConditions.length > 0) {
      if (queryOptions.where) {
        queryOptions.where = {
          [Op.and]: [queryOptions.where, ...priceConditions]
        };
      } else {
        queryOptions.where = { [Op.and]: priceConditions };
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
    } else {
      queryOptions.include = { association: include };
    }

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

function filterPagination(req, res, next) {
  const { search, include, limit, offset, pagination } = req.query;
  const queryOptions = {};

  if (search) {
    queryOptions.where = {
      [Op.or]: [
        { name: { [Op.iLike]: `%${search}%` } }, // ignore mayus
        { description: { [Op.iLike]: `%${search}%` } },
      ],
    };
  }
  if (include) {
    queryOptions.include = include.split(",").map((model) => ({ model }));
  }
  if (pagination === "true") {
    queryOptions.limit = limit ? parseInt(limit) : 10;
    queryOptions.offset = offset ? parseInt(offset) : 0;
  }
  req.queryOptions = queryOptions;
  next();
}

//help
const { User } = require("../models");

/**
 * Retrieves all users based on query options.
 *
 * @async
 * @function getUser
 * @param {object} [queryOptions={}] - Options for filtering and pagination.
 * @returns {Promise<Array>} - List of products matching query options.
 */
const getUser = async (queryOptions = {}) => {
  return await Product.findAll(queryOptions);
};

/**
 * Retrieves a specific user by its ID.
 *
 * @async
 * @function getUserById
 * @param {number} id - The ID of the user to retrieve.
 * @returns {Promise<object|null>} - The found user or null if not found.
 */
const getUserById = async (id) => {
  return await User.findByPk(id);
};

/**
 * Creates a new user in the database.
 *
 * @async
 * @function createUser
 * @param {object} data - The data for the new user.
 * @returns {Promise<object>} - The newly created user.
 */
const createUser = async (data) => {
  return await User.create(data); //data is generic
};

/**
 * Updates an existing user by ID.
 *
 * @async
 * @function updateUser
 * @param {number} id - The ID of the user to update.
 * @param {object} data - The new data for the user.
 * @returns {Promise<object|null>} - The updated user or null if not found.
 */
const updateUser = async (id, data) => {
  const users = await User.findByPk(id);
  if (users) {
    return await users.update(data); //Sequelize's own function
  }
  return null;
};

/**
 * Deletes a user by ID.
 *
 * @async
 * @function deleteUser
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<object|null>} - A success message or null if the user was not found.
 */
const deleteUser = async (id) => {
  const users = await User.findByPk(id);
  if (!users) {
    return null;
  }

  await users.destroy(); //Sequelize's own function
  return { message: "Usuario eliminado exitosamente" };
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};

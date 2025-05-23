const jwt = require("jsonwebtoken");
const { User } = require("../models");
const SECRET_KEY = "secret_key";

/**
 * User authentication and token generation
 * @param {string} username - User's usernam
 * @param {string} password - Password
 * @returns {string} JWT token
 */
const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  if (!user || user.password !== password) {
    throw new Error("Credenciales inválidas");
  }

  return{
   token:jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" }),
     user: { id: user.id, username: user.username }
  } 
};

module.exports = { login };
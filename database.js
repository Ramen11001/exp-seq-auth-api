require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Base de datos
  process.env.DB_USERNAME, // Usuario
  process.env.DB_PASSWORD, // Contraseña
  {
    host: process.env.DB_HOST, // Host
    port: process.env.DB_PORT, // Puerto
    dialect: 'postgres',       // Dialecto (PostgreSQL)
  }
);

module.exports = sequelize;

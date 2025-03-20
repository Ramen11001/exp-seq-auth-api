require('dotenv').config();
module.exports = {
    "development": {
      "host": "localhost",
      "port": 5432,
      "database": "prodify",
      "username": "postgres",
      "password": "postgres",
      "dialect": "postgres"
    },
    "production": {
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "database":process.env.prodify ,
      "username": process.env.USUARIO_PRODUCCION,
      "password": process.env.PASSWORD_PRODUCCION,
      "dialect": "postgres"
    }
  }
  
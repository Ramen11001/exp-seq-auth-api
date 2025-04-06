const { body } = require("express-validator");

const validateProductData = [
  body("name")
    .notEmpty()
    .withMessage('El campo "name" es obligatorio.')
    .isString()
    .withMessage('El campo "name" debe ser una cadena de texto.'),
  body("description")
    .notEmpty()
    .withMessage('El campo "description" es obligatorio.')
    .isString()
    .withMessage('El campo "description" debe ser una cadena de texto.'),
  body("price")
    .optional() 
    .isFloat({ gt: 0 })
    .withMessage('El campo "price" debe ser un número positivo.'),
  body("user_id")
    .notEmpty()
    .withMessage('El campo "user_id" es obligatorio.')
    .isInt()
    .withMessage('El campo "user_id" debe ser un número entero válido.'),
];

module.exports = { validateProductData };

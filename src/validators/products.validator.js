const { body } = require("express-validator");

/**
 * Validation rules for creating a new product.
 * Ensures required fields are present and correctly formatted.
 */
const validateProductData = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El campo name es obligatorio.")
    .isString()
    .isLength({ min: 1 })
    .withMessage("El campo name debe ser una cadena de texto."),
  body("description")
    .optional()
    .isString()
    .withMessage("El campo description debe ser una cadena de texto."),
  body("price")
    .notEmpty()
    .isFloat({ gt: 0 })
    .withMessage("El campo price debe ser un número positivo."),
  body("userId")
    .notEmpty()
    .withMessage("El campo userId es obligatorio.")
    .isInt()
    .withMessage("El campo userId debe ser un número entero válido."),
];

/**
 * Validation rules for updating a product.
 * Ensures optional fields are correctly formatted.
 */
const validateProductDataUpdate = [
  body("name")
    .optional()
    .isString()
    .withMessage("El campo description debe ser una cadena de texto."),
  body("description")
    .optional()
    .isString()
    .withMessage("El campo description debe ser una cadena de texto."),
  body("price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("El campo price debe ser un número positivo."),
  body("userId")
    .optional()
    .isInt()
    .withMessage("El campo userId debe ser un número entero válido."),
];

module.exports = {
  validateProductData,
  validateProductDataUpdate,
};

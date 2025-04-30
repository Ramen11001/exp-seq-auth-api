const { body } = require("express-validator");

/**
 * Validation rules for creating a new user.
 * Ensures required fields are present and correctly formatted.
 */
const validateUserData = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("El campo name es obligatorio.")
        .isString()
        .isLength({ min: 1 })
        .withMessage("El campo name debe ser una cadena de texto."),
    body("description")
        .trim()
        .notEmpty()
        .withMessage("El campo password es obligatorio.")
        .isString()
        .isLength({ min: 1 })
        .withMessage("El campo password debe ser una cadena de texto."),
];

/**
 * Validation rules for updating a user.
 * Ensures optional fields are correctly formatted.
 */
const validateUserDataUpdate = [
    body("name")
        .optional()
        .isString()
        .withMessage("El campo description debe ser una cadena de texto."),
    body("password")
        .optional()
        .isString()
        .withMessage("El campo description debe ser una cadena de texto."),
];

module.exports = {
    validateUserData,
    validateUserDataUpdate
};

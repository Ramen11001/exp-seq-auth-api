const { body } = require("express-validator");

const validateCommentData = [
    body("rating")
        .notEmpty()
        .withMessage('El campo rating es obligatorio.')
        .isInt({ min: 1, max: 5 })
        .withMessage('El campo "rating" debe ser un número entre 1 y 5.'),
    body("text")
        .notEmpty()
        .withMessage('El campo text es obligatorio.')
        .isString()
        .withMessage('El campo text debe ser una cadena de texto.'),
    body("productId")
        .notEmpty()
        .withMessage('El campo productId es obligatorio.')
        .isInt()
        .withMessage('El campo productId debe ser un número entero válido.'),
    body("userId")
        .notEmpty()
        .withMessage('El campo userId es obligatorio.')
        .isInt({ min: 1, max: 5 })
        .withMessage('El campo "rating" debe ser un número entre 1 y 5.'),
];

//Validator to update functions
const validateCommentDataUpdate = [
    body("rating")
        .optional()
        .isInt()
        .withMessage('El campo rating debe ser un número entero válido'),
    body("text")
        .optional()
        .isString()
        .withMessage('El campo text debe ser una cadena de texto.'),
    body("productId")
        .optional()
        .isInt()
        .withMessage('El campo productId debe ser un número entero válido.'),
    body("userId")
        .optional()
        .isInt()
        .withMessage('El campo userId debe ser un número entero válido.'),
]

module.exports = {
    validateCommentData,
    validateCommentDataUpdate
}

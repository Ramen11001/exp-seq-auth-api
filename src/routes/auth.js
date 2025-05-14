const express = require("express");
const authService = require("../services/auth.service");
const router = express.Router();

/**
 * Authentication path: `POST /auth/login`
 * @route POST /auth/login
 * @param {string} username - username
 * @param {string} password - user password
 * @returns {string} token - JWT token if authentication is successful
 */
router.post("/login", async (req, res) => {
    console.log("Datos recibidos en el backend:", req.body);
    try {
        const { username, password } = req.body;
        const token = await authService.login(username, password);
        res.json(result);
    } catch (error) {
        res.status(401).json({ error: "Credenciales inválidas" });
    }
});

module.exports = router;
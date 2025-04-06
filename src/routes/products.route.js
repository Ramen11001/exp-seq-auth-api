const express = require('express');
const router = express.Router();
const productServise = require('../services/products.service');


router.get('/models/products');
router.get('/models/products7:id');
router.post('/models/products');
router.put('/models/products/:id');
router.delete('/models/products/:id');

module.exports = router;

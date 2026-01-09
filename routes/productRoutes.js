const express = require('express');
const router = express.Router();
const getAllProducts = require('../controllers/productController');
const connectDB = require('../db/connection')

router.get('/products', async (req, res, next) => {
    try {
        await connectDB();
        await getAllProducts(req, res, next);
    } catch (err) {
        next(err);
    }
});

// router.get('/products', getAllProducts);

module.exports = router;
const Product = require('../models/productModel');

// GET semua produk
const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find(); 
        res.json(products); 
    }catch (error) {
        next(error)
    }
};

module.exports =  getAllProducts ;
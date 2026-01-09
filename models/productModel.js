const mongoose = require('mongoose');

// definisi schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

// Buat model
const product = mongoose.model('Product', productSchema);


module.exports = product;
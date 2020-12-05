const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
        min: [0, "Can't be free"]
    },
    qty: {
        type: Number,
        min: [0, "Too few items"]
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
const Mongoose = require('mongoose');

const productSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
});

const Product = Mongoose.model('product', productSchema);

module.exports = Product;

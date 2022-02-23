const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    productId: String,
    price: Number,
});

const SellerSchema = mongoose.Schema({
    sellerName : String,
    sellerId : String,
    products : [ProductSchema]
})

const seller = mongoose.model('Seller', SellerSchema);

module.exports = seller;


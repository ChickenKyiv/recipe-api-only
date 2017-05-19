const mongoose = require('mongoose');

//@todo format later to similar models, from other projects

//product schema
const productSchema = mongoose.Schema({

    product_id: {
        type: String,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
    },
    SKU: {
        type: String,
        required: true
    },
    SRP: {
        type: String,
        required: true
    },
    gross_weight: {
        type: String,
    },
    net_weight: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Product = module.exports = mongoose.model('Product', productSchema);

//get products
module.exports.getProducts = function (callback, limit) {

    Product.find(callback).limit(limit);
}

//get product by ID
module.exports.getProductById = function (id, callback) {

    Product.findById(id, callback);
}

//add product
module.exports.addProduct = function (product, callback) {

    Product.create(product, callback);
}

//update product
module.exports.updateProduct = function (id, product, options, callback) {

    const query = {
        _id: id
    };

    const update = {
        product_id: product.product_id,
        brand_name: product.brand_name,
        product_name: product.product_name,
        SKU: product.SKU,
        SRP: product.SRP,
        gross_weight: product.gross_weight,
        net_weight: product.net_weight,
    };

    Product.findOneAndUpdate(query, update, options, callback);
}

//delete product
module.exports.deleteProduct = function (id, callback) {

    const query = {
        _id: id
    };
    Product.remove(query, callback);
}
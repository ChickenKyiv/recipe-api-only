'use strict';

// middleware
var express = require('express');
var router  = express.Router();

// controllers
var controller = require('../controllers/product-controller');


//@TODO remove app from attributes
module.exports = function (app) {
  
};

/* This is part of other project, contain few api routers
 * @todo Later move this particular routes to another file and include it here.
 *
 */

	//connect to database. right now it'll cause an error

	//products api
	router.get('/api/products', function (req, res) {

	    Product.getProducts(function (err, products) {

	        if (err) { throw err; }
	        res.json(200, products);
	    });

	});

	//products api by ID
	router.get('/api/products/:_id', function (req, res) {

	    Product.getProductById(req.params._id, function (err, product) {

	        if (err) { throw err; }
	        res.json(200, product);
	    });

	});

	//add product via api
	router.post('/api/products', function (req, res) {

	    const product = req.body;
	    Product.addProduct(product, function (err, product) {

	        if (err) { throw err; }
	        res.json(200, product);
	    });

	});

	//update product via api
	router.put('/api/products/:_id', function (req, res) {

	    const id = req.params._id;
	    const product = req.body;
	    Product.updateProduct(id, product, {}, function (err, product) {

	        if (err) { throw err; }
	        res.json(200, product);
	    });

	});

	//delete product via api
	router.delete('/api/products/:_id', function (req, res) {

	    const id = req.params._id;
	    Product.deleteProduct(id, function (err, product) {

	        if (err) { throw err; }
	        res.json(200, product);
	    });

	});




module.exports = function(router, request, async, config) {

	
	
};
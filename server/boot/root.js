'use strict';

// how we'll get a methods to operate the router
// var db = require('queries'); or include model schemas here

var bodyParser = require('body-parser');
var consign    = require('consign');
// var mongodb    = require('mongodb');
// var mongoose = require('mongoose'); 

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });


// Use 
 // request = require('request'),
 //    async   = require('async'),
 //    config  = require('./config');


// var models     = require('../models');
// var GL         = models.Grocerylist;
// var Product    = models.Product; // i.e. ingredient
// var OtherModel = models['other-model'];

module.exports = function(server) {
  // Install a `/` route that returns server status
	var router = server.loopback.Router();

	consign()
	  .include('models')
	  .then('controllers')
	  .into(server);


	router.get('/', server.loopback.status());


/*  "/api/recipe"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	router.get('/recipe/:id', function(req, res){		
		res.send('This is not implemented now');
	});


/*  "/api/menu"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	router.get('/menu/:id', function(req, res){
		res.send('This is not implemented now');
	});


/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	router.get('/grocery/:id', function(req, res){
		res.send('This is not implemented now');
	});
	

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




	server.use(router);

	// replace with lines below when we'll slice routers to different files
	// Register routes of Router
	// require('./routes/issues')(router, request, async, config);
	// require('router-product')(router, request, async, config);

	// Prefix all routes with /api
	// server.use('/api', router);
	// better to use
	// server.use('/api/products', router);

	//Not sure why it have.json. maybe we need to remove it. @todo
	var recipe = require('router-recipe');

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	server.get('/api/recipe.json', recipe.list);

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	server.post('/api/recipe.json', recipe.create);

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	server.get('/api/recipe/:id.json', recipe.show);

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	server.put('/api/recipe/:id.json', recipe.update);


	server.use(bodyParser.json({limit: '1mb'}));


	var ing = require('router-ingredient');

	server.get('/api/ingredients/', ing.list);	
	server.get('/api/ingredients/:id', ing.show);	

	server.get('/api/recipe/:recipe_id/ingredients/', ing.list_recipe);	
	server.get('/api/recipe/:recipe_id/ingredients/:ingredient_id', ing.show_from_recipe);	





};

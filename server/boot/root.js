'use strict';

// how we'll get a methods to operate the router
// var db = require('queries'); or include model schemas here

var bodyParser = require('body-parser');
// var mongodb    = require('mongodb');
// var mongoose = require('mongoose'); 

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

var models     = require('../models');
var GL         = models.Grocerylist;
var Product    = models.Product; // i.e. ingredient
// var OtherModel = models['other-model'];

module.exports = function(server) {
  // Install a `/` route that returns server status
	var router = server.loopback.Router();

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





	server.use(router);


	server.use(bodyParser.json({limit: '1mb'}));

};

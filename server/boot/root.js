'use strict';

// how we'll get a methods to operate the router
// var db = require('queries'); or include model schemas here

// var bodyParser = require('body-parser');
// var mongodb    = require('mongodb');
// var mongoose = require('mongoose'); 

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

var models     = require('../models');
var GL         = models.Grocerylist;
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
	



  server.use(router);
};

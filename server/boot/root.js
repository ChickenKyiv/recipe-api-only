'use strict';

// how we'll get a methods to operate the router
// var db = require('queries'); or include model schemas here

// var bodyParser = require('body-parser');
// var mongodb    = require('mongodb');

module.exports = function(server) {
  // Install a `/` route that returns server status
	var router = server.loopback.Router();

	router.get('/', server.loopback.status());

/*  "/api/recipe"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	router.get('/recipe/:id', function(req, res){})

/*  "/api/menu"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	router.get('/menu/:id', function(req, res){})

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
	router.get('/grocery/:id', function(req, res){})



  server.use(router);
};

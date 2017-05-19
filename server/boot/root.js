'use strict';

// how we'll get a methods to operate the router
// var db = require('queries'); or include model schemas here

var bodyParser   = require('body-parser');
var consign      = require('consign');
var routeConfig  = require('route-config.js');
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


	// clean version, without any changes
	// Install a `/` route that returns server status
  	var router = server.loopback.Router()
  	router.get('/', server.loopback.status())
  	server.use(router)







  // Install a `/` route that returns server status
	var router = server.loopback.Router();

	//@TODO test this configuration. It might not work well right now
	consign()
	  .include('models')
	  .then('controllers')
	  .into(server); 

	  //moved to route-main.js
	// router.get('/', server.loopback.status());







	//dont need this, because we're using routerConfig
	server.use(router)	;

	// replace with lines below when we'll slice routers to different files
	// Register routes of Router
	// require('./routes/issues')(router, request, async, config);
	// require('router-product')(router, request, async, config);

	// Prefix all routes with /api
	// server.use('/api', router);
	// better to use
	// server.use('/api/products', router);




	server.use(bodyParser.json({limit: '1mb'}));


	var ing = require('router-ingredient');


	//@TODO test this

	// *** config ** //
	routeConfig.init(server); //@TODO test this configuration


};

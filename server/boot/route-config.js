(function (routeConfig) {

  'use strict';

  routeConfig.init = function (server) {

    // *** routes *** //
    //@TODO test this configuration
	const recipe  = require('router-recipe');
	const product = require('router-product');
	const menu    = require('router-menu');
	const ingredients = require('router-ingredients');
	const grocery = require('router-grocery');

    // *** register routes *** //  
 //    server.use('/', index);
	// server.use('/player', player);


  };

})(module.exports);
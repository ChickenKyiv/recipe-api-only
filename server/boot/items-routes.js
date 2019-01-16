'use strict';

var request        = require('request');
// var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app) {
	var router  = app.loopback.Router();


	// router.get('/add/item/:id/:groceryId', function(req, res, next){
	// 	var ingredientId = req.params.id;
	// 	var groceryId = req.params.groceryId;
		
	// 	var Grocery   = app.models.Grocery;
		
	// 	var options = {

	//       groceryId: groceryId,
	//       secondArray: [ ingredientId ]
	//     };
		

	// 	Grocery.addIngredient(options);


	// 	// .findById(departmentId, {}, function(err, model){
	// 	//   model.updateAttribute('visible', false);
	// 	// });
	// });

	router.get('/del/item/:id/:groceryId', function(req, res, next){
		// var itemId = req.params.id;
		// var groceryId = req.params.groceryId;

		// var Grocery   = app.models.Grocery;
		
		// var options = {

	 //      groceryId: groceryId,
	 //      secondArray: [ ingredientId ]
	 //    };
		
	    
		// Grocery.removeItem(options);

		// ADD removing ID FROM DATABASE

	});

	app.use(router);
};  	
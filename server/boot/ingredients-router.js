'use strict';

const request  = require('request');
const _        = require("underscore");
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const async    = require('async');

const Raven = require('raven');
Raven.config('https://6c8ba2737aae4d81908677e4dba9be3f:26c83aa1a38a42cdbf0beea41a82cacf@sentry.io/231031').install();


module.exports = function(app) {
	var router  = app.loopback.Router();

	// var request = require('request');

	// :todo this must be a remote method
	router.get('/add/ing/:id/:groceryId', function(req, res, next){
		var ingredientId = req.params.id;
		var groceryId    = req.params.groceryId;
		
		var Grocery   = app.models.Grocery;
		
		var options = {
	      groceryId: groceryId,
	      secondArray: [ ingredientId ]
	    };
		Grocery.addIngredient(options);

	});






	// Ing change Department ID
	router.get('/changedepartmentid/:id/:departmentId', function(req, res, next){
		var Ingredient   = app.models.Ingredient;
		var ingredientId = req.params.id;
		var departmentId = req.params.departmentId;
        

		Ingredient.findById(ingredientId, function(err, model){
			model.updateAttribute('departmentId', departmentId);
		})
	});



    // :todo I think this can be just a remote method.
    // if this will works fine - it'll reduse some place in routes.

    // :todo extend this method. make it async

	// Ing change name
	router.post('/changename/', async function(req, res, next){
		// var Ingredient   = app.models.Ingredient;
		var ingredientId = req.body.id;

		var name         = req.body.name;
		// var departmentId = req.body.departmentId;
		// var groceryId    = req.body.groceryId;

	// :todo change this and remoe asycn from this file
	  let ingredient
	  let response
	  try {      
	  	var Ingredient   = app.models.Ingredient;
	     // var Grocery   = app.models.Grocery;
	     // grocery = await Grocery.fetchById(groceryId);
	     ingredient  = await Ingredient.findById(ingredientId);
	     
	     // console.log(ingredient);
	     // response = Grocery.convertCollectionData(grocery);
	     // console.log(response);

	  } catch (e) {
	     Raven.captureException(e);
	    //this will eventually be handled by your error handling middleware
	    next(e) 
	  }

	  ingredient.updateAttribute('name', name);
	  res.json('success');

	  // if (ingredient.custom){
			// ingredient.updateAttribute('name', name);
			// res.json('success');	  	
	  // }

	  // let response
	  // try {
	  // 	response = await Ingredient.create({
	  // 		name: name,
	  // 		departmentId: departmentId,
	  // 		custom: true,
	  // 	});
	  // 	console.log(response);
	  // } catch (e) {
	  //    Raven.captureException(e);
	  //   //this will eventually be handled by your error handling middleware
	  //   next(e) 
	  // }  
	  // console.log(request);


	  // AS this code below in not worked, I copy paste code from other routers.

	  // console.log(req.headers.host)
	 //  request.post({
		//     url: req.headers.host + '/create/ing/', 
		//     body: req.body,
		//     json: true
		// }, function(err, response, body){
		//     console.log(body);console.log('error:', err); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
		// })

	  // 1. as this is not a custom ingredient,
	  // we need to create a new ingredient with a new name
	  // 2. remove previous ingredient from GL
	  // 3. add a new ingredient
		// res.json('success');
		// Ingredient.findById(ingredientId, function(err, model){

		// 	console.log(model);

		// 	model.updateAttribute('name', name);

		// 	res.json('success');
		// });
	});



// :todo this must be a remote method
	// Ing create. Not working with not advanced forms
	router.post('/create/ing/', function(req, res, next){
		var Ingredient   = app.models.Ingredient;
		var Grocery      = app.models.Grocery;
	
		var departmentId = req.body.departmentId;
		var name         = req.body.name;
		var groceryId    = req.body.groceryId;
		
		var object = {
			name: name,
			departmentId: departmentId,
			custom: true
		};

		Ingredient.create(object, function(err, model){

			var options = {
		      groceryId: groceryId,
		      secondArray: [ model.id ]
		    };
		    // console.log(model.id);
			Grocery.addIngredient(options);
			// res.json('success');
			res.json({ id: model.id });
			// res.redirect('/department/' + departmentId + '/' + groceryId); // :todo update this
		});


	});


	// router.post('/delete/ingredients/:ingredients', function(req, res, next){

	// })


	    // [
      //   {"title":"123", "completed":false, "departmentId": "0"},
      //   {"title":"333", "completed":false, "departmentId": "0"},
      //   {"title":"Ingredos", "completed":false, "departmentId": "0"}
      // ]
      
  // :todo think about making this post instead of get
 //  	router.get('/getingredients/:groceryId/:departmentId/', 
	// 	ensureLoggedIn('/auth/account'),  // :todo get back this 
	// 	function(req, res, next){    
	// 	var Grocery      = app.models.Grocery;
	// 	// var userId    = req.user.id;
	// 	var groceryId    = req.params.groceryId;
	// 	var departmentId = req.params.departmentId;
		
	// 	// console.log(departmentId);
	// 	// console.log(groceryId);

	// 	Grocery.fetchById3(groceryId, departmentId, function(err, response){
	// 	  console.log(response);
	// 	  // console.log(response.data.ingredients);
	// 	  res.json(response.data.ingredients);
	// 	});

	// });



	app.use(router);
};  	
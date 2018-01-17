'use strict';


const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const Raven   = require('raven');

Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));

// //include middleware
// @todo make it auto-icludable from folder
let Ingredient    = require(path.resolve(__dirname, 'ingredients'));
let Grocery    = require(path.resolve(__dirname, 'grocery'));
let Departments    = require(path.resolve(__dirname, 'departments'));
let Users    = require(path.resolve(__dirname, 'users'));


async.parallel({
		users       : async.apply(Users.init,       server, Raven),
		
    
    
    departments : async.apply(Departments.createDepartments),
		groceries   : async.apply(Groceries.createGroceries),
    
    ingredients  : async.apply(Ingredient.init,    server, Raven),
  
  
  
		courses    : async.apply(Course.init,     server, Raven),
		cuisines   : async.apply(Cuisine.init,    server, Raven),
  

	}, function(err, results){
		if( err ) {
			Raven.captureException(err);
			throw err;

		}
    
    if( !results || !results.departments || !results.groceries
				|| !results.ingredients || !results.users) {
					Raven.captureException("not imported well");
		}

  
    	// console.log(results.ingredients);
		// console.log(results.departments);
		// console.log(results.groceries);

		Users.assignAdmin(results.users[2]);
		Users.attachGroceryToAdmin(results.users[2], results.groceries[0]);

		Ingredients.createIngredients(
			results.departments, function(err, ingredients){

				// console.log(ingredients);

				Ingredients.attachIngredientsToGroceries(
						ingredients, results.groceries
			 	);
				console.log('import finished');
			});

  
  
		process.on('exit', function(code) {
    	return console.log(`About to exit with code ${code}`);
		});
		process.exit(22);



	}
);

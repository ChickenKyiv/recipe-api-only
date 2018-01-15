'use strict';


var path            = require('path');
var async           = require('async');

// let server          = require(path.resolve(__dirname, '../../server/server'));


// //include middleware
let Ingredients  = require(path.resolve(__dirname, 'ingredients'));

let Groceries    = require(path.resolve(__dirname, 'grocery'));

let Departments  = require(path.resolve(__dirname, 'departments'));

let Users        = require(path.resolve(__dirname, 'users'));

// async.series()


async.parallel({		
		users       : async.apply(Users.createUsers),
		departments : async.apply(Departments.createDepartments),
		groceries   : async.apply(Groceries.createGroceries),

		// recipes     : async.apply(Recipes.createRecipes),
		

	
	}, function(err, results){
		if( err ) throw err; 

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

		// console.log(ingredient);
		
		



	}
);

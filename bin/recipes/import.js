'use strict';


const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const Raven   = require('raven');

Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));


let helper     = require(path.resolve(__dirname, '../helper'));
//
// include middleware
// @todo make it auto-icludable from folder
let Users        = require(path.resolve(__dirname, 'users'));
let Recipes      = require(path.resolve(__dirname, 'recipes'));

// recipes for search
//let getRecipes2     = require(path.resolve(__dirname, 'sample-recipes-search-data'));


// let Menus        = require(path.resolve(__dirname, 'menus'));

// let Ingredients  = require(path.resolve(__dirname, 'ingredients'));
// let getIngredients  = require(path.resolve(__dirname, 'sample-ingredients-data'));
// let Groceries    = require(path.resolve(__dirname, 'grocery'));
// let Departments  = require(path.resolve(__dirname, 'departments'));

let options = [
	server,
	helper,
	Raven
]
//
async.parallel({
		users       : async.apply(Users.init, options),

		recipes     : async.apply(Recipes.init, options),

		// menus       : async.apply(Menus.init, options),
    // ingredients : async.apply(Ingredients.init, server, Raven),
    // groceries   : async.apply(Groceries.init,   server, Raven),
    // departments : async.apply(Departments.init, server, Raven)


	}, function(err, results){
		if( err ) {
			Raven.captureException(err);
			throw err;

		}

		if( !results || !results.users || !results.recipes
				//|| !results.menus
				//|| !results.ingredients || !results.groceries || !results.departments
			) {
					Raven.captureException("not imported well");
		}

		// console.log(err);
		// console.log(results);
		// console.log(results.allergies);
		// console.log(results.courses);
    // console.log(results.cuisines);
    // console.log(results.diets);
    // console.log(results.holidays);
    // console.log(results.nutritions);


		// Users.assignAdmin(results.users[2].id);

		// attachRecipesToMenu

		// Users.assignAdmin(results.users[2]);
		// Users.attachGroceryToAdmin(results.users[2], results.groceries[0]);
    //
		// Ingredients.createIngredients(
		// 	results.departments, function(err, ingredients){
    //
		// 		// console.log(ingredients);
    //
		// 		Ingredients.attachIngredientsToGroceries(
		// 				ingredients, results.groceries
		// 	 	);
		// 		console.log('import finished');
		// 	});

		// console.log(ingredient);



		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);

	}

);
// process.exit(-1);

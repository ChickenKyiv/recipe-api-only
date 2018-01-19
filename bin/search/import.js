'use strict';

const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const Raven   = require('raven');

Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));

//
// include middleware
// @todo make it auto-icludable from folder
let Allergy    = require(path.resolve(__dirname, 'allergy'));
let Course     = require(path.resolve(__dirname, 'courses'));
let Cuisine    = require(path.resolve(__dirname, 'cuisines'));
let Diet       = require(path.resolve(__dirname, 'diets'));
let Holiday    = require(path.resolve(__dirname, 'holidays'));
let Nutritions = require(path.resolve(__dirname, 'nutritions'));

//
async.parallel({
		allergies  : async.apply(Allergy.init,    server, Raven),
		courses    : async.apply(Course.init,     server, Raven),
		cuisines   : async.apply(Cuisine.init,    server, Raven),
    diets      : async.apply(Diet.init,       server, Raven),
    holidays   : async.apply(Holiday.init,    server, Raven),
    nutritions : async.apply(Nutritions.init, server, Raven)


	}, function(err, results){
		if( err ) {
			Raven.captureException(err);
			throw err;

		}

		if( !results || !results.allergies || !results.courses
				|| !results.cuisines || !results.diets || !results.holidays || !results.nutritions) {
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




    // 
		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);

	}

);
// process.exit(-1);

'use strict';

const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const Raven   = require('raven');

Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));


let helper     = require(path.resolve(__dirname, '../helper'));
// console.log(helper);
// //include middleware
// @todo make it auto-icludable from folder

let Ingredients  = require(path.resolve(__dirname, 'ingredients'));

let Groceries    = require(path.resolve(__dirname, 'grocery'));

let Departments  = require(path.resolve(__dirname, 'departments'));

let Users        = require(path.resolve(__dirname, 'users'));

let options = [
	server,
	helper,
	Raven
]

async.parallel({

	departments : async.apply(Departments.init, options),
	groceries   : async.apply(Groceries.init, options),
	// users       : async.apply(Users.init, options),


	// ingredients  : async.apply(Ingredients.init,    server, Raven),


	}, function(err, results){
		if( err ) {
			Raven.captureException(err);
			throw err;
		}


    //
    // if( !results || !results.departments || !results.groceries
		// 		//|| !results.ingredients
    //     || !results.users) {
		// 			Raven.captureException("not imported well");
		// }
    // //
		let ingredients = Ingredients.init( results.departments, options );
    // let ingredients = Ingredients.init( results.departments, options.push(results.departments) );
    // console.log(ingredients);


   // console.log(results.ingredients);
	 // console.log(results);
		console.log(results.departments);
		console.log(results.groceries);

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



		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);



	}
);

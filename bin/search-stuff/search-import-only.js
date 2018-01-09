'use strict';


const path    = require('path');
const async   = require('async');

const Raven   = require('raven');
Raven.config('https://6c8ba2737aae4d81908677e4dba9be3f:26c83aa1a38a42cdbf0beea41a82cacf@sentry.io/231031').install();

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
		allergies  : async.apply(Allergy.init),
		courses    : async.apply(Course.init),
		cuisines   : async.apply(Cuisine.init),
    diets      : async.apply(Diet.init),
    holidays   : async.apply(Holiday.init),
    nutritions : async.apply(Nutritions.init)


	}, function(err, results){
		if( err ) throw err;

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





	}
);

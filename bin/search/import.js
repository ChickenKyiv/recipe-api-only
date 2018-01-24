'use strict';

const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const Raven   = require('raven');

Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));
let helper     = require(path.resolve(__dirname, '../helper'));

// include middleware
// @todo make it auto-icludable from folder
let Allergy    = require(path.resolve(__dirname, 'allergy'));
let Course     = require(path.resolve(__dirname, 'courses'));
let Cuisine    = require(path.resolve(__dirname, 'cuisines'));
let Diet       = require(path.resolve(__dirname, 'diets'));
let Holiday    = require(path.resolve(__dirname, 'holidays'));
let Nutritions = require(path.resolve(__dirname, 'nutritions'));

// we including a file from other import directory.
// @TODO this is not cool. maybe it's better to have a short version of recipe file just for attaching things.
// let Recipe    = require(path.resolve(__dirname, 'recipes'));
let Recipe    = require(path.resolve(__dirname, '../recipes/recipes'));
// let Recipes    = require(path.resolve(__dirname, '../recipes/recipes'));


let options = [
	server,
	helper,
	Raven
]

async.parallel({
		allergies  : async.apply(Allergy.init,    options),
		courses    : async.apply(Course.init,     options),
		cuisines   : async.apply(Cuisine.init,    options),
    diets      : async.apply(Diet.init,       options),
    holidays   : async.apply(Holiday.init,    options),
    nutritions : async.apply(Nutritions.init, options),
		recipes    : async.apply(Recipe.init, options),

	}, function(err, results){
		if( err ) {
			Raven.captureException(err);
			throw err;

		}

		if( !results || !results.allergies || !results.courses
				|| !results.cuisines || !results.diets || !results.holidays || !results.nutritions) {
					Raven.captureException("not imported well");
		}


		// @TODO make this call less shitty
		// Recipes.relate( options, results );


		// console.log(err);
		console.log(results);

		// console.log(results.allergies);
		// console.log(results.courses);
    // console.log(results.cuisines);
    // console.log(results.diets);
    // console.log(results.holidays);
    // console.log(results.nutritions);





		console.log('import finished');
    //
		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);

	}

);

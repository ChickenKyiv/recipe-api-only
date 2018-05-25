'use strict';

const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const raven   = require('raven');

raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));
let database   = server.datasources.recipeDS;

let helper     = require(path.resolve(__dirname, '../helper'));

// //include middleware
// @todo make it auto-icludable from folder

let Ingredients  = require(path.resolve(__dirname, 'ingredients'));
let Groceries    = require(path.resolve(__dirname, 'grocery'));
let Departments  = require(path.resolve(__dirname, 'departments'));
let Users        = require(path.resolve(__dirname, 'users'));


let options = {
	server: server,
	database: database,
	raven: raven
}

async.parallel({

	departments : async.apply(helper.create, options, Departments),
	groceries   : async.apply(helper.create, options, Groceries),
	users       : async.apply(helper.create, options, Users),

	}, function(err, results){
		if( err ) {
			raven.captureException(err);
			throw err;
		}



    if( !results || !results.departments || !results.groceries || !results.users) {
					raven.captureException("not imported well");
		}
		// // cause we need data related to departments (ids only)


		// // user stuff
		Users.assignAdmin(options, results.users[2].id);


		options.predata = results.departments;
		// console.log('qwe')
		helper.create(options, Ingredients, (err, data) => {
			// console.log(data);
		});

		// // @TODO make this call less shitty
		Departments.relate( options, results, helper );
		Groceries.relate( options, results, helper );



		console.log('import finished');

		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);



	}
);

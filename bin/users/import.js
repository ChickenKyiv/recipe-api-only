'use strict';

const path    = require('path');
const async   = require('async');
const debug   = require('debug');
const raven   = require('raven');

raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server     = require(path.resolve(__dirname, '../../server/server'));
let database   = server.datasources.recipeDS;

let helper     = require(path.resolve(__dirname, '../helper'));

// include middleware
// @todo make it auto-icludable from folder
let User    = require(path.resolve(__dirname, 'users'));



let options = {
	server: server,
	database: database,
	raven: raven
}

async.parallel({

		users    : async.apply(helper.create, options, User),


	}, function(err, results){
		if( err ) {
			raven.captureException(err);
			throw err;

		}

		if( !results || !results.users ) {
					raven.captureException("not imported well");
		}


		// @TODO make this call less shitty
		// console.log('123');
		// Recipe.relate( options, results, helper );
    // Here we'll add all necessary methods, that include all things to users, admin user, other stuff






		console.log('import finished');
    //
		// process.on('exit', function(code) {
    // 	return console.log(`About to exit with code ${code}`);
		// });
		// process.exit(22);

	}

);

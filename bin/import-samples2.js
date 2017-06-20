'use strict';


var path        = require('path');
var async       = require('async');

let server      = require(path.resolve(__dirname, '../server/server'));

var database    = server.datasources.videoDS;


let getUsers         = require(path.resolve(__dirname, 'sample-users-data'));

let getVideos        = require(path.resolve(__dirname, 'sample-videos-data'));

// let getExamples  = require(path.resolve(__dirname, 'sample-examples-cases-data'));

let getExampleVideos = require(path.resolve(__dirname, 'sample-examples-video-data'));

let casesList        = require(path.resolve(__dirname, 'sample-examples-list'));

var User        = server.models.UserModel;

var Video       = server.models.VideoModel;

var Examples    = server.models.ExampleModel;
// module.exports = function(){

	async.parallel({
		users    : async.apply(createUsers),
		videos   : async.apply(createVideos),
		
		examples1: async.apply(createExampleVideos1),
		examples2: async.apply(createExampleVideos2),
		examples3: async.apply(createExampleVideos3),
		examples4: async.apply(createExampleVideos4),

		cases    : async.apply(createCases)

	}, function(err, results){
		if( err ) throw err;

		// console.log(results);
		// console.log(results.users);
		// console.log(results.videos);
		// console.log(results.cases);
		// console.log(results.examples);

		attachVideosToUsers(results.users, results.videos, function(err){
			console.log('>models create sucessfully');
		});


		attachExampleVideosToAdmin(results.users, results.examples1, function(err){
			console.log('>examples1 attached to admin');
		});

		attachExampleVideosToAdmin(results.users, results.examples2, function(err){
			console.log('>examples2 attached to admin');
		});

		attachExampleVideosToAdmin(results.users, results.examples3, function(err){
			console.log('>examples3 attached to admin');
		});

		attachExampleVideosToAdmin(results.users, results.examples4, function(err){
			console.log('>examples4 attached to admin');
		});



	});

// };

function createUsers(cb){
	// console.log(users);
	database.automigrate('UserModel', function(err){
		if (err) return cb(err);

		User.create(getUsers(), cb);
	});
};

function createVideos(cb){
	database.automigrate('VideoModel', function(err){
		if (err) return cb(err);

		Video.create(getVideos(), cb);
	});
};

function createCases(cb){
	database.automigrate('ExampleModel', function(err){
		if (err) return cb(err);

		var examples = getExampleVideos();
		Examples.create(getVideos(), cb);
	});
};


function createExampleVideos1(cb){
	database.autoupdate('VideoModel', function(err){
		if (err) return cb(err);

		var examples = getExampleVideos();
		// Video.create(getExampleVideos(), cb);
		Video.create(examples[0], cb);
		// Video.create(examples[1], cb);
		// Video.create(examples[2], cb);
		// Video.create(examples[3], cb);
	});
};

function createExampleVideos2(cb){
	database.autoupdate('VideoModel', function(err){
		if (err) return cb(err);

		var examples = getExampleVideos();
		// Video.create(getExampleVideos(), cb);
		// Video.create(examples[0], cb);
		Video.create(examples[1], cb);
		// Video.create(examples[2], cb);
		// Video.create(examples[3], cb);
	});
};

function createExampleVideos3(cb){
	database.autoupdate('VideoModel', function(err){
		if (err) return cb(err);

		var examples = getExampleVideos();
		// Video.create(getExampleVideos(), cb);
		// Video.create(examples[0], cb);
		// Video.create(examples[1], cb);
		Video.create(examples[2], cb);
		// Video.create(examples[3], cb);
	});
};

function createExampleVideos4(cb){
	database.autoupdate('VideoModel', function(err){
		if (err) return cb(err);

		var examples = getExampleVideos();
		// Video.create(getExampleVideos(), cb);
		// Video.create(examples[0], cb);
		// Video.create(examples[1], cb);
		// Video.create(examples[2], cb);
		Video.create(examples[3], cb);
	});
};


// function createCases(cb){
// 	database.automigrate('ExampleModel', function(err){
// 		if (err) return cb(err);

// 		var examples = getExampleVideos();
// 		// Video.create(getExampleVideos(), cb);
// 		// Video.create(examples[0], cb);
// 		// Video.create(examples[1], cb);
// 		// Video.create(examples[2], cb);
// 		Video.create(examples[3], cb);
// 	});
// };


//attaching videos to admin user
function attachVideosToUsers(users, videos, cb){

	videos.forEach(function(video){
		video.updateAttribute('userId', users[2].id);
		console.log(video.userId);
	});

	// Video.updateAttribute('userId', users[0].id);
};

//attaching videos to admin user
function attachExampleVideosToAdmin(users, exampleVideos, cb){

	exampleVideos.forEach(function(video){
		video.updateAttribute('userId', users[2].id);
		// console.log(video.userId);
	});

};



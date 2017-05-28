'use strict';

var path     = require('path');

var app      = require(path.resolve(__dirname, '../server/server'));
var database = app.datasources.recipeDS;

// server.automigrate('user', function(err) {
//   if (err) throw err;

//   var accounts = [
//     {
//       name: 'john',	
//       email: 'john.doe@ibm.com',
//       password: '$2a$10$1lmPRI0Xjd5fU8HGdPmDoOkZpIPJj2axcdJYIfc/3RUnBDDqQe31K',
//       created_at: new Date(),
//       updated_at: new Date(),
//     },
//     {
// 	  name: 'jane',
//       email: 'jane.doe@ibm.com',
//       password: '$2a$10$1lmPRI0Xjd5fU8HGdPmDoOkZpIPJj2axcdJYIfc/3RUnBDDqQe31K',
//       created_at: new Date(),
//       updated_at: new Date(),
//     },
//     {
// 	  name: 'andy',
//       email: 'admin@ibm.com',
//       password: '$2a$10$1lmPRI0Xjd5fU8HGdPmDoOkZpIPJj2axcdJYIfc/3RUnBDDqQe31K', //andy
//       created_at: new Date(),
//       updated_at: new Date(),

//     },


//   ];

//   var count = accounts.length;
//   accounts.forEach(function(account) {
//     app.models.User.create(account, function(err, model) {
//       if (err) throw err;

//       console.log('Created:', model);

//       count--;
//       if (count === 0)
//         server.disconnect();
//     });
//   });
// });



// server.automigrate('RoleMapping', function(err) {
// 	if (err) throw err;

// 	var roleMapping = {
// 		principalType: "USER",
// 		principalId: "59278006448ae509a00261c4",
// 		roleId: '59278362b64ed01098857a4f',
// 		// id: 1
// 	};

// 	app.models.RoleMapping.create(roleMapping, function(err, model) {
// 		if (err) throw err;

// 		console.log('Created:', model);

// 		server.disconnect();
// 	});

// });

 
// server.automigrate('Role', function(err) {
// 	if (err) throw err;

// 	var role = {
// 		name: "admin",
// 		created_at:"2017-02-21T06:07:25.571Z",
// 		updated_at:"2017-02-21T06:07:25.571Z",
// 		// id:1
// 	};	

// 	app.models.Role.create(role, function(err, model) {
// 		if (err) throw err;

// 		console.log('Created:', model);

// 		server.disconnect();
// 	});

// });

// server.automigrate('AccessToken', function(err) {
// 	if (err) throw err;

// 	var token = {
// 		"id":"eZRy1Qv7YVx9xEcpLQMl9eruyEIEZd5UECmQOGWYCenAVysIUOCwWQOqLlkY9Gno",
// 		"ttl":1209600,
// 		"created":"2017-05-21T22:58:46.468Z",
// 		"userId": '592642c1e675f021a033ebac'
// 	};

// });


//creating loopback necessary tables if no exists
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
// database.automigrate(lbTables, function(err) {
database.autoupdate(lbTables, function(err) {
  if (err) throw err;

  console.log( 'Loopback tables [' + lbTables.toString() + '] created in ' + database.adapter.name );
  database.disconnect();
});
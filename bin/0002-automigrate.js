'use strict';

const path     = require('path');

let app      = require(path.resolve(__dirname, '../server/server'));
var database = app.datasources.groceryDS;

console.log(database);
//
//
// var lbTables = [
// 	'User', 'AccessToken', 'ACL', 'RoleMapping',
// 	'Role',
//
// 	// custom tables
// 	'user', 'Menu',
//
// 	'Recipe'
//
//
// ];
//
// //creating loopback necessary tables if no exists
// database.automigrate(lbTables, function(err) {
//   if (err) throw err;
//
//   console.log( 'Loopback tables [' + lbTables.toString() + '] created in ' + database.adapter.name );
//   database.disconnect();
// });

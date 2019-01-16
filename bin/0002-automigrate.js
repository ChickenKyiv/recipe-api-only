// this will be our next version of automigrate script for loopback.

const path     = require('path');

let app      = require(path.resolve(__dirname, '../server/server'));

// const { db_name, lbTables } = require ('./0005-config.js');

// console.log(server);
// die();


// process.exit(22);
// var database = server.datasources[db_name];

var database = app.datasources.recipeDS;

console.log(database);

// var database = app.datasources.searchDS;
// var lbTables = [
//   'Attribute',
//   'Department',
// 	'Ingredient',
//
//   'Recipe'
// ];

//creating loopback necessary tables if no exists
// database.automigrate(lbTables, function(err) {
//   if (err) throw err;
//
//   console.log( 'Loopback tables [' + lbTables.toString() + '] created in ' + database.adapter.name );
//   database.disconnect();
//
//   // @TODO we can add something here - if we need this additional message...
//   // process.on('exit', function(code) {
//   // 	return console.log(`Automigrate is competed`);
//   // });
//   // process.exit(22);
// });

'use strict';

var path     = require('path');

let app      = require(path.resolve(__dirname, '../../server/server'));
var database = app.datasources.recipeDS;


var lbTables = [
	'Allergy', 'Course', "Cuisine",
	 "Diet", "Holiday", "Nutritions"

	 ,"Recipe"
];

//creating loopback necessary tables if no exists
database.automigrate(lbTables, function(err) {
  if (err) throw err;

  console.log( 'Loopback tables [' + lbTables.toString() + '] created in ' + database.adapter.name );
  database.disconnect();
});

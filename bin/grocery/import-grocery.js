'use strict';


var path            = require('path');
var async           = require('async');

let server          = require(path.resolve(__dirname, '../server/server'));

var database        = server.datasources.recipeDS;


let getIngredients  = require(path.resolve(__dirname, 'ingredients'));

let getGroceries    = require(path.resolve(__dirname, 'grocery'));

let getDepartments  = require(path.resolve(__dirname, 'departments'));


var Ingredients = server.models.IngredientModel2;
var Grocery     = server.models.GroceryModel2;

var Department  = server.models.DepartmentModel2;


async.parallel({
	
		
		ingredients : async.apply(createIngredients),
		departments : async.apply(createDepartments),

		groceries   : async.apply(createGroceries),
		

	
	}, function(err, results){
		if( err ) throw err; 

		console.log(results.ingredients);
		console.log(results.departments);
		console.log(results.groceries);

		// attachDepartmentsToIngredients(results.departments, results.ingredients, function(err){
		// 	console.log('>departments attached to ingredients ');
		// });

		// //:todo remove this function, when departments will work 
		// attachDepartmentsToGroceries(results.departments, results.groceries, function(err){
		// 	console.log('>departments create sucessfully');
		// });

	}
);

function createIngredients(cb){
	database.automigrate('IngredientModel', function(err){
		if (err) return cb(err);

		Ingredient.create(getIngredients(), cb);
	});
};

function createDepartments(cb){
	database.autoupdate('DepartmentModel', function(err){
		if (err) return cb(err);

		Department.create(getDepartments(), cb);
	
	});
};

function createGroceries(cb){
	database.autoupdate('GroceryModel', function(err){
		if (err) return cb(err);

		Grocery.create(getGroceries(), cb);
	
	});
};


// function attachDepartmentsToIngredients(departments, ingredients, cb){

// 	var first  = ingredients.splice(0, 15);
// 	var second = ingredients.splice(16, 31);
// 	var third  = ingredients.splice(32, 100); 

// 	var arrayWithIds = idsOnly(departments);

// 	console.log(arrayWithIds[0]);
// 	console.log(arrayWithIds[1]);
// 	console.log(arrayWithIds[2]);
	
// 	first.forEach(function(ingredient){
// 		ingredient.updateAttribute('departmentId', arrayWithIds[0]);
// 	});

// 	second.forEach(function(ingredient){
// 		ingredient.updateAttribute('departmentId', arrayWithIds[1]);
// 	});

// 	third.forEach(function(ingredient){
// 		ingredient.updateAttribute('departmentId', arrayWithIds[2]);
// 	});

// };

// function attachDepartmentsToGroceries(departments, groceries, cb){
// 	var arrayWithIds = idsOnly(departments);
// 	groceries.forEach(function(grocery){
// 		grocery.updateAttribute('departments', arrayWithIds);
		
// 	});
// };
'use strict';


var path            = require('path');
var async           = require('async');

let server          = require(path.resolve(__dirname, '../server/server'));

var database        = server.datasources.recipeDS;


let getIngredients  = require(path.resolve(__dirname, 'sample-ingredients2'));
// let getIngredients  = require(path.resolve(__dirname, 'sample-ingredients-data'));

let getGroceries    = require(path.resolve(__dirname, 'sample-grocery-data'));

let getDepartments  = require(path.resolve(__dirname, 'sample-departments-data'));


var ingredients = server.models.IngredientModel2;
var Grocery     = server.models.GroceryModel2;

var Department  = server.models.DepartmentModel2;

async.parallel({
	
		
		ingredients : async.apply(createIngredients),
		departments : async.apply(createDepartments),
		groceries   : async.apply(createGroceries),
		

	
	}, function(err, results){
		if( err ) throw err; 

		results.ingredients
		results.departments
		results.groceries

	}
);
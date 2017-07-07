'use strict';


var path            = require('path');
var async           = require('async');

let server          = require(path.resolve(__dirname, '../../server/server'));

var database        = server.datasources.recipeDS;


let getIngredients  = require(path.resolve(__dirname, 'ingredients'));

let getGroceries    = require(path.resolve(__dirname, 'grocery'));

let getDepartments  = require(path.resolve(__dirname, 'departments'));


var Ingredient  = server.models.IngredientModel2;
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

		attachDepartmentsToIngredients(results.departments, results.ingredients, function(err){
			console.log('>departments attached to ingredients ');
		});

		//:todo remove this function, when departments will work 
		attachDepartmentsToGroceries(results.departments, results.groceries, function(err){
			console.log('>departments create sucessfully');
		});

	}
);

function createIngredients(cb){
	database.automigrate('IngredientModel2', function(err){
		if (err) return cb(err);

		Ingredient.create(getIngredients(), cb);
	});
};

function createDepartments(cb){
	database.autoupdate('DepartmentModel2', function(err){
		if (err) return cb(err);

		Department.create(getDepartments(), cb);
	
	});
};

function createGroceries(cb){
	database.autoupdate('GroceryModel2', function(err){
		if (err) return cb(err);

		Grocery.create(getGroceries(), cb);
	
	});
};


function attachDepartmentsToIngredients(departments, ingredients, cb){

	var first  = ingredients.splice(0, 2);
	var second = ingredients.splice(2, 4);
	console.log(ingredients.splice(2, 4));
	console.log(ingredients.splice(2, 2));


	var arrayWithIds = idsOnly(departments);

	// console.log(arrayWithIds[0]);
	// console.log(arrayWithIds[1]);
	// console.log(arrayWithIds[2]);
	
	first.forEach(function(ingredient){
		ingredient.updateAttribute('depId', arrayWithIds[0]);
	});

	second.forEach(function(ingredient){
		ingredient.updateAttribute('depId', arrayWithIds[1]);
	});



	console.log(first);
	console.log(second);

};

function attachDepartmentsToGroceries(departments, groceries, cb){
	var arrayWithIds = idsOnly(departments);

	groceries.forEach(function(grocery){
		grocery.updateAttribute('departmentIds', arrayWithIds);
		
	});
	console.log(groceries);
};

function idsOnly(array){

	var result = Object.keys(array).map(function(e) {
		return array[e].id;
    });

	return result;    

};

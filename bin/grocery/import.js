'use strict';


var path            = require('path');
var async           = require('async');

let server          = require(path.resolve(__dirname, '../../server/server'));

var database        = server.datasources.recipeDS;


let getIngredients  = require(path.resolve(__dirname, 'ingredients'));

let getGroceries    = require(path.resolve(__dirname, 'grocery'));

let getDepartments  = require(path.resolve(__dirname, 'departments'));

let getRecipes      = require(path.resolve(__dirname, 'recipes'));

var Ingredient  = server.models.IngredientModel2;
var Grocery     = server.models.GroceryModel2;

var Department  = server.models.DepartmentModel2;

var Recipe      = server.models.RecipeModel2;

async.parallel({
	
		
		ingredients : async.apply(createIngredients),
		departments : async.apply(createDepartments),

		groceries   : async.apply(createGroceries),

		recipes     : async.apply(createRecipes),
		

	
	}, function(err, results){
		if( err ) throw err; 

		console.log(results.ingredients);
		console.log(results.departments);
		console.log(results.groceries);

		attachDepartmentsToIngredients(results.departments, results.ingredients);

		//:todo remove this function, when departments will work 
		attachDepartmentsToGroceries(results.departments, results.groceries);


		attachIngredientsToRecipes(results.ingredients, results.recipes);

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


function createRecipes(cb){
	database.automigrate('RecipeModel2', function(err){
		if (err) return cb(err);

		Recipe.create(getRecipes(), cb);
	});
};

function attachDepartmentsToIngredients(departments, ingredients){

	var first  = ingredients.splice(0, 2);
	var second = ingredients.splice(2, 2);
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

function attachDepartmentsToGroceries(departments, groceries){
	var arrayWithIds = idsOnly(departments);

	groceries.forEach(function(grocery){
		grocery.updateAttribute('departmentIds', arrayWithIds);
		
	});
	console.log(groceries);
};

function attachIngredientsToRecipes(ingredients, recipes){

	var first  = ingredients.splice(0, 2);
	var second = ingredients.splice(2, 2);
	

	var one = idsOnly(first);
	var two = idsOnly(second);

	recipes[0].updateAttribute('ingArr', one);

	recipes[1].updateAttribute('ingArr', two);

	console.log(recipes);


	// // only first 10 elements attach
	// var first10  = arrayWithIds.slice(0, 10);
	// var second10 = arrayWithIds.slice(11, 21);

	// recipes.forEach(function(recipe, index){

	// 	if (index % 2 === 0){
	// 		recipe.updateAttribute('ingredients', first10);
	// 	} else {
	// 		recipe.updateAttribute('ingredients', second10);
	// 	}

	// 	// recipe.updateAttribute('ingredients', arrayWithIds);
		
	// });
};

function idsOnly(array){

	var result = Object.keys(array).map(function(e) {
		return array[e].id;
    });

	return result;    

};

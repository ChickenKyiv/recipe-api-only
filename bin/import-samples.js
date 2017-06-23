'use strict';

var path        = require('path');

let app         = require(path.resolve(__dirname, '../server/server'));

let accounts    = require(path.resolve(__dirname, 'sample-users-data'));

let recipes     = require(path.resolve(__dirname, 'sample-recipes-data'));

let menus       = require(path.resolve(__dirname, 'sample-menus-data'));

let ingredients = require(path.resolve(__dirname, 'sample-ingredients-data'));

let groceries   = require(path.resolve(__dirname, 'sample-grocery-data'));

let departments = require(path.resolve(__dirname, 'sample-departments-data'));


var User        = app.models.UserModel;
// var Role        = app.models.Role;
// var RoleMapping = app.models.RoleMapping;


var Recipe      = app.models.RecipeModel; 
var Ingredient  = app.models.IngredientModel;

var Menu        = app.models.MenuModel;
var Grocery     = app.models.GroceryModel;

var Department  = app.models.DepartmentModel;


accounts(function(array){

	User.create(array)
		.then(function(users){
			
			User.assign();

		})
		.catch(function(err){
			throw err;
		})

});





recipes(function(array){

	Recipe.create(array)
		 .then(function(recipes){

		 }).catch(function(err){throw err;});
});


ingredients(function(array){

	Ingredient.create(array)
	.then(function(ingredients){

		Recipe.addIngredients(ingredients);
	
		console.log(ingredients);

	})
	.catch(function(err){
		throw err;
	})

});


menus(function(array) {
	
	Menu.create(array)
		.then(function(menus){

			Recipe.attachToMenu();

		});

});

departments(function(array){

	Department.create(array)
	.then(function(departments){
		console.log(departments);
	})
	.catch(function(err){
		throw err;
	});

});

	
groceries(function(array){

	Grocery.create(array)
	.then(function(groceries){
		
		Department.addGrocery(groceries);

	});

});

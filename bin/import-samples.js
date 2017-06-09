'use strict';

var path        = require('path');

let app         = require(path.resolve(__dirname, '../server/server'));

let accounts    = require(path.resolve(__dirname, 'sample-users-data'));

let recipes     = require(path.resolve(__dirname, 'sample-recipes-data'));

let menus       = require(path.resolve(__dirname, 'sample-menus-data'));

// let ingredients = require(path.resolve(__dirname, 'sample-ingredients-data'));

// let groceries   = require(path.resolve(__dirname, 'sample-grocery-data'));

// let departments = require(path.resolve(__dirname, 'sample-departments-data'));


var User        = app.models.UserModel;
// var Role        = app.models.Role;
// var RoleMapping = app.models.RoleMapping;


var Recipe      = app.models.RecipeModel; 
// var Ingredient  = app.models.IngredientModel;

var Menu        = app.models.MenuModel;
// var Grocery     = app.models.GroceryModel;

// var Department  = app.models.DepartmentModel;

// accounts(function(array){



// 	User.create(array)
// 		.then(function(users){
// 			// console.log(users);

// 			// User.findOne({fields:'id', where: { name:'admin' }})
// 			// 	.then(function(result){
					
// 			// 		Role.create({ name:'admin' })
// 			// 			.then(function(role){

// 			// 				role.principals.create({
// 			// 			        principalType: RoleMapping.USER,
// 			// 			        principalId: result.id
// 			// 			    }, function(err, principal){
// 			// 			    	console.log('Principal', principal);
// 			// 			    });
// 			// 			})
// 			// 			.catch(function(err){
// 			// 				throw err;
// 			// 			})
// 			// 	});		
// 			User.assign();

// 		})
// 		.catch(function(err){
// 			throw err;
// 		})


// });


	
// groceries(function(array){

// 	Grocery.create(array)
// 	.then(function(groceries){

// 		// Department.find({})
// 		// .then(function(departments){

// 		// 	groceries.forEach(function(grocery){
// 		// 	 	grocery.updateAttribute('department', departments);
// 		// 	})
// 		// })
// 		// .catch(function(err){
// 		// 	throw err;
// 		// });
// 		Department.addGrocery(groceries);

// 	});

// });

// ingredients(function(array){

// 	Ingredient.create(array)
// 	.then(function(ingredients){
// 		// just first recipe
// 		Recipe.findOne({
// 			fields:'id',
// 			where: { title:'Crock Pot Roast1' }
// 		})
// 		.then(function(result){

// 			ingredients.forEach(function(ingredients){
// 			 	ingredients.updateAttribute('userId', result.id);
// 			})


// 		});

// 		Recipe.addIngredients(ingredients);
	
// 		console.log(ingredients);

// 	})
// 	.catch(function(err){
// 		throw err;
// 	})

// });


// recipes(function(array){

// 	// console.log(Recipe);


// 	Recipe.create(array)
// 		 .then(function(recipes){

		 	

// 			// User.addVideos(videos);	
		 		
// 		 		// console.log(recipes);

// 		 }).catch(function(err){throw err;});
// });

menus(function(array) {
	
	Menu.create(array)
		.then(function(menus){

			Recipe.attachToMenu();

		});

});

// departments(function(array){

// 	Department.create(array)
// 	.then(function(departments){
// 		console.log(departments);
// 	})
// 	.catch(function(err){
// 		throw err;
// 	});

// });
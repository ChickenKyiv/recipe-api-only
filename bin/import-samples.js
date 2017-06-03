'use strict';

var path        = require('path');

let app         = require(path.resolve(__dirname, '../server/server'));

let accounts    = require(path.resolve(__dirname, 'sample-users-data'));

let recipes     = require(path.resolve(__dirname, 'sample-recipes-data'));

let menus       = require(path.resolve(__dirname, 'sample-menus-data'));

let ingredients = require(path.resolve(__dirname, 'sample-ingredients-data'));

let groceries   = require(path.resolve(__dirname, 'sample-grocery-data'));

var User        = app.models.UserModel;
var Role        = app.models.Role;
var RoleMapping = app.models.RoleMapping;


var Recipe      = app.models.RecipeModel; 
var Ingredient  = app.models.IngredientModel;

var Menu        = app.models.MenuModel;
var Grocery     = app.models.GroceryModel;

accounts(function(array){



	User.create(array)
		.then(function(users){
			// console.log(users);

			User.findOne({fields:'id', where: { name:'admin' }})
				.then(function(result){
					
					Role.create({ name:'admin' })
						.then(function(role){

							role.principals.create({
						        principalType: RoleMapping.USER,
						        principalId: result.id
						    }, function(err, principal){
						    	console.log('Principal', principal);
						    });
						})
						.catch(function(err){
							throw err;
						})
				})		

		})
		.catch(function(err){
			throw err;
		})


});


videos(function(array){

	Video.create(array)
		 .then(function(videos){

		 	User.findOne({fields:'id', where: { name:'admin' }})
				.then(function(result){

					videos.forEach(function(video){
				 		video.updateAttribute('userId', result.id);
				 	})


				});

		 		
		 		console.log(videos);

		 })

});


groceries(function(array){

	Grocery.create(array)
	.then()

});

ingredients(function(array){

	Ingredient.create(array)
	.then(function(ingredients){
		// just first recipe
		Recipe.findOne({
			fields:'id',
			where: { title:'Crock Pot Roast1' }
		})
		.then(function(result){

			ingredients.forEach(function(ingredients){
			 	ingredients.updateAttribute('userId', result.id);
			})


		});
	
		console.log(ingredients);

	})
	.catch(function(err){
		throw err;
	})

});

menus(function(array) {
	
	Menu.create(array)
		.then(function(menus){

			Recipe.find({
				fields: 'id'
			})
			.then(function(recipeIds){
				console.log(recipeIds);

				menus.forEach(function(menu){
					menu.updateAttribute('rec', recipeIds);
				});
				console.log(menus);

			});



		});

});
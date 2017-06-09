'use strict';

module.exports = function(MenuModel) {
	//@TODO update this, 'cause we've updated relations
	MenuModel.validatesPresenceOf('title', 'date', 'desc', 'recipes');


	MenuModel.observe("after save", function (ctx, next) {

		// console.log( ctx.instance.rec );

       MenuModel.app.models.Email.send({
	    to: 'arthur.tkachenko.netweight@gmail.com',
	    from: 'noreply@loopback.loop',
	    subject: 'Thank you for adding to menu ',
	    html: '<p>We confirm - menu was saved</p>'
	  }, function (err, mail) {
	    console.log('email sent!');
	  });

		

		//not working, right now. Above we're using similar, but easy way to test notifications
		// MenuModel.app.models.Recipemodel.findById(ctx.instance.rec, function (err, recipe) {

		//   MenuModel.app.models.Email.send({
		//     to: 'arthur.tkachenko.netweight@gmail.com',
		//     from: 'noreply@loopback.loop',
		//     subject: 'Thank you for adding to menu your recipe ' + recipe.name,
		//     html: '<p>We confirm your recipe with name <strong>' + recipe.name + '</strong> was saved</p>'
		//   }, function (err, mail) {
		//     console.log('email sent!');
		//   });

		// });

		next();
	});

	MenuModel.observe("before save", function updateTimestamp(ctx, next) {

		if( ctx.isNewInstance ){
			ctx.instance.created_at = new Date();
			ctx.instance.updated_at = new Date();
		} 



		next();
	});

	MenuModel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});

	// menu, fully equiped??


	// method list attached menus with recipes, short version

	MenuModel.listRecipesShort = function(menuId, cb){
		var RecipeModel = VideoModel.app.models.RecipeModel;

		MenuModel.findById(menuId)
		.then(function(menu){
			console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			return RecipeModel.find({
				where:{
					id: menu.recipes
				},
				fields: [
					'img', 'url', 'title', 

		    	]       
			})
			.then(function(recipes){
			// 	menu.recipes = recipes;
			// console.log(menu);
			// return menu;
			// or cb(recipes);
			});




		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};

	MenuModel.orderByDate = function(order){

		if(order){ // DESC
			var query = {
			  order: 'date DESC',
			  limit: 3
			};

		} else { //ASC
			var query = {
			  order: 'date ASC',
			  limit: 3
			};
		}

		console.log(query);

		return MenuModel.find(query).then(function(menus){
			console.log(menus);
		})

	};


	MenuModel.MenuRecipesIngredients = function(menuId, cb){
		var RecipeModel = VideoModel.app.models.RecipeModel;

		MenuModel.findById(menuId)
		.then(function(menu){
			console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			return RecipeModel.find({
				where:{
					id: menu.recipes
				},
				fields: [
					'img', 'url', 'title', 

		    	]       
			})
			.then(function(recipes){
			// 	menu.recipes = recipes;
			// console.log(menu);
			// return menu;
			// or cb(recipes);

				// console.log(recipes.ingredients);
				 IngredientModel.find({
	                where:{
	                    id: recipe.ingredients
	                }       
	            })
	            .then(function(ingredients){
	            //  recipe.ingredients = ingredients;
	            // console.log(recipe);
	            // return recipe;
	            // or cb(ingredients);
	            });


			});




		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};


	MenuModel.remoteMethod('listRecipesShort', {
		accepts: {
		  arg: 'menuId',
		  type: 'string'
		},
		returns: {
		  arg: 'menus',
		  type: 'array'
		},
		http: {
		  path: '/list/recipes/short',
		  verb: 'get'
		}
	});

	
  // method list attached menus with recipes
	MenuModel.listRecipes = function(menuId, cb){
		var RecipeModel = VideoModel.app.models.RecipeModel;

		MenuModel.findById(menuId)
		.then(function(menu){
			console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			return RecipeModel.find({
				where:{
					id: menu.recipes
				}       
			})
			.then(function(recipes){
			// 	menu.recipes = recipes;
			// console.log(menu);
			// return menu;
			// or cb(recipes);
			});




		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};

	MenuModel.remoteMethod('listRecipes', {
		accepts: {
		  arg: 'menuId',
		  type: 'string'
		},
		returns: {
		  arg: 'menus',
		  type: 'array'
		},
		http: {
		  path: '/list/recipes',
		  verb: 'get'
		}
	});


  // method list attached menus with groceries
	MenuModel.listGroceries = function(menuId, cb){
		var GroceryModel = VideoModel.app.models.GroceryModel;

		MenuModel.findById(menuId)
		.then(function(menu){
			console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			return GroceryModel.find({
				where:{
					// id: menu.recipes
				},
				// fields: [
				// 	'img', 'url', 'title', 

		  //   	]       
			})
			.then(function(groceries){
			// 	menu.recipes = recipes;
			// console.log(menu);
			// return menu;
			// or cb(recipes);
			});




		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};

	MenuModel.remoteMethod('listGroceries', {
		accepts: {
		  arg: 'menuId',
		  type: 'string'
		},
		returns: {
		  arg: 'menus',
		  type: 'array'
		},
		http: {
		  path: '/list/grocery',
		  verb: 'get'
		}
	});

};

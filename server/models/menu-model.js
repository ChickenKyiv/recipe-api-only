'use strict';

module.exports = function(MenuModel) {
	//@TODO update this, 'cause we've updated relations
	MenuModel.validatesPresenceOf(
		'title', 'date', 'description' 
		// 'recipes'
		);


	MenuModel.observe("after save", function (ctx, next) {

		// console.log( ctx.instance.rec );

		
	  	// console.log( ctx.instance );
	  	// understand what we get at inctance object
		//not working, right now. Above we're using similar, but easy way to test notifications
		
		//   MenuModel.app.models.EmailModel.send({
		//     to: 'arthur.tkachenko.netweight@gmail.com',
		//     from: 'noreply@loopback.loop',
		//     subject: 'Thank you for adding to menu your recipe ' + recipe.name,
		//     html: '<p>We confirm your recipe with name <strong>' + recipe.name + '</strong> was saved</p>'
		//   }, function (err, mail) {
		//     console.log('email sent!');
		//   });

		


		// MenuModel.app.models.Recipemodel.findById(ctx.instance.rec, function (err, recipe) {

		//   MenuModel.app.models.EmailModel.send({
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
		var RecipeModel = MenuModel.app.models.RecipeModel;

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


	MenuModel.orderByDate = function(order, cb){

		if(order == 'desc' || order == 'DESC' ){ // DESC
			var query = {
			  order: 'date DESC',
			  fields:['title', 'date','description', 'recipes']
			  // limit: 3
			};

		}

		if(order == 'asc' || order == 'ASC' ) { //ASC
			var query = {
			  order: 'date ASC',
			  fields:['title', 'date','description', 'recipes']
			  // limit: 3
			};
		}

		// console.log(query);

		MenuModel.find(query, cb);
		

	};

	MenuModel.remoteMethod('orderByDate', {
		accepts: {
		  arg : 'order',
		  type: 'string',
		  description: 'For params use \'asc\' or \'desc\' for filtration',
		  required: true
		},
		returns: {
		  arg : 'menus',
		  type: 'array'
		},
		http: {
		  path: '/filter/date',
		  verb: 'get'
		},
		
	});

	MenuModel.lastMenu = function(menuId = false, cb){

		var query = {};	

		if ( menuId ) {

			MenuModel.findById(menuId, {fields:['id','date']}, function(err, menu){

				// console.log(menu);

				query = { 
					where: {
						date: { lt: menu.date },
						id:   { lt: menu.id },
					},
					// limit: 1
				};

			});


			console.log( query );

			

		} else {

			query = {
			  order: 'date DESC',
			  fields:['title', 'date','description', 'recipes']
			  // limit: 1
			};
			console.log(query);
		}

			

		// }

		// console.log(query);

		MenuModel.findOne(query, cb);
		
	};

	MenuModel.remoteMethod('lastMenu', {
		accepts: {
		  arg: 'menuId',
		  type: 'string',
		  description: 'Pass current opened MenuId, to get previous published Menu (like menuId-1)',
		  required:false
		},
		returns: {
		  arg: 'menu',
		  type: 'object'
		},
		http: {
		  path: '/last',
		  verb: 'get'
		},
		
	});


	// @TODO I want to return whole collection, when we have a menu object with all elements, inside
	// but I'm return only recipes for now
	MenuModel.MenuRecipesIngredients = function(menuId, cb){
		var RecipeModel = MenuModel.app.models.RecipeModel;

		MenuModel.findById(menuId)
		.then(function(menu){

			// console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			//  
			RecipeModel.find({
				where:{
					id: { inq:menu.recipes }
				},
				fields: [
					'img', 'url', 'title', 'ingredients'

		    	]       
			},cb);
			



		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};



	MenuModel.remoteMethod('MenuRecipesIngredients', {
		accepts: {
		  arg: 'menuId',
		  type: 'string',
		  required: true
		},
		returns: {
		  arg: 'recipes',
		  type: 'array'
		},
		http: {
		  path: '/:id/full',
		  verb: 'get'
		}
	});


	
  // method list attached menus with recipes only
	MenuModel.listRecipes = function(menuId, cb){
		var RecipeModel = MenuModel.app.models.RecipeModel;

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
		var GroceryModel = MenuModel.app.models.GroceryModel;

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

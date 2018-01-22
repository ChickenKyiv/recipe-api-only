'use strict';

module.exports = function(Menu) {
	//@TODO update this, 'cause we've updated relations
	// Menu.validatesPresenceOf(
	// 	'title', 'date', 'description'
	// 	// 'recipes'
	// 	);


	Menu.observe("after save", function (ctx, next) {

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

	Menu.observe("before save", function updateTimestamp(ctx, next) {

		if( ctx.isNewInstance ){
			ctx.instance.created_at = new Date();
			ctx.instance.updated_at = new Date();
		}
		next();
	});

	Menu.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});

	// menu, fully equiped??


	// method list attached menus with recipes, short version

	Menu.listRecipesShort = function(menuId, cb){
		var Recipe = Menu.app.models.Recipe;

		Menu.findById(menuId)
		.then(function(menu){
			console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			Recipe.find({
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
				cb(null, recipes);
			});




		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};

	Menu.remoteMethod('listRecipesShort', {
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


	Menu.orderByDate = function(order, cb){

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

		Menu.find(query, cb);


	};

	Menu.remoteMethod('orderByDate', {
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

	Menu.lastMenu = function(menuId = false, cb){

		var query = {};

		if ( menuId ) {

			Menu.findById(menuId, {
				fields:['id','date']
			}, function(err, menu){

				// console.log(menu);

				query = {
					where: {
						date: { lt: menu.date },
						id:   { lt: menu.id },
					},
					// limit: 1
				};


console.log( query );
Menu.findOne(query, cb);

			});






		} else {

			query = {
			  order: 'date DESC',
			  // fields: ['title', 'date','description', 'recipes', 'id']
			  fields:['id','date']
			  // limit: 1
			};
			console.log(query);
			Menu.findOne(query, cb);
		}



		// }

		// console.log(query);



	};

	Menu.remoteMethod('lastMenu', {
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
	Menu.MenuRecipesIngredients = function(menuId, cb){
		var Recipe = Menu.app.models.Recipe;

		Menu.findById(menuId)
		.then(function(menu){

			// console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			//
			Recipe.find({
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



	Menu.remoteMethod('MenuRecipesIngredients', {
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
	Menu.listRecipes = function(menuId, cb){
		var Recipe = Menu.app.models.Recipe;

		Menu.findById(menuId)
		.then(function(menu){
			console.log( menu.recipes );
			// @TODO change to custom method on recipe model
			Recipe.find({
				where:{
					id: menu.recipes
				}
			})
			.then(function(recipes){

				cb(null, recipes);
			});




		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};

	Menu.remoteMethod('listRecipes', {
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

	Menu.listGroceries = function(menuId, cb){
		var Grocery    = Menu.app.models.Grocery;
		var Department = Menu.app.models.Department;

		Menu.findById(menuId)
		.then(function(menu){

			//what we'll want to get in the end
			// var array = {
			// 	departments: {
			// 		'department-name' : [
			// 			{
			// 				'ingredient-name',
			// 				'recipeId'
			// 			}
			// 		]
			// 	}
			// };



			var recipeIds = menu.recipes;
			console.log( recipeIds );


			recipeIds.forEach(function(recipeId){

				Recipe.listIngredientsExtended(recipeId, function(ingredients){
					console.log(ingredients);
					console.log('---------');
				})

			});



			var ingredientIds = [];


			Department.find({
				where : {
					ingredientIds: {
						inq : ingredientIds
					}
				}
			}).then(function(departments){

			});

			// RecipeModel.listIngredientsExtended()

			// @TODO change to custom method on recipe model
			// return GroceryModel.find({
			// 	where:{
			// 		// id: menu.recipes
			// 	},
				// fields: [
				// 	'img', 'url', 'title',

		  //   	]
			// })
			// .then(function(groceries){
			// // 	menu.recipes = recipes;
			// // console.log(menu);
			// // return menu;
			// // or cb(recipes);
			// });




		})
		.catch(function(err){
			if(err){ cb(err); }
		});



	};

	Menu.remoteMethod('listGroceries', {
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

	// Recipe order
	// This is a first, simple version of this method.
	// We're assuming that we have 1 recipe per day.
	// So if we have [ 'monday': RecipeOne, 'tuesday': RecipeTwo ]
	// when we change an order, other recipes change their order by bubble sorting
	Menu.recipeOrder = function(menuId, cb){
		var Recipe = Menu.app.models.Recipe;

		// MenuModel.findById(menuId)
		// .then(function(menu){
		// 	console.log( menu.recipes );
		// 	// @TODO change to custom method on recipe model
		// 	RecipeModel.find({
		// 		where:{
		// 			id: menu.recipes
		// 		}
		// 	})
		// 	.then(function(recipes){

		// 		cb(null, recipes);
		// 	});




		// })
		// .catch(function(err){
		// 	if(err){ cb(err); }
		// });



	};

	Menu.removeRecipeFromMenu = function(menuId, recipeId, cb){

		var Recipe = Menu.app.models.Recipe;

		Menu.findById(menuId)
		.then(function(menu){
			console.log( menu.recipes );

			var array =  menu.recipes ;
			var index = array.indexOf(recipeId);
			if (index > -1) {
			    array.splice(index, 1);
			}
			console.log(recipeId);
			// @TODO think about this case: I have menu with 2 recipes with equial IDs. For Monday and Friday, for example.
			// we need to cover this case later.

			// @TODO change to custom method on recipe model
			// RecipeModel.find({
			// 	where:{
			// 		id: menu.recipes
			// 	}
			// })
			// .then(function(recipes){

			// 	cb(null, recipes);
			// });
			console.log(menu.recipes);
			menu.updateAttribute('recipes', array);
			console.log(menu.recipes);
			cb(null, menu);

		});
	}

};

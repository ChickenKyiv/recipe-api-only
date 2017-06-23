'use strict';

module.exports = function(GroceryModel) {
	GroceryModel.validatesPresenceOf(
		// 'departments',
		'img', 'desc', 'slug'
	);

	GroceryModel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});

	GroceryModel.observe("before save", function updateTimestamp(ctx, next) {

		if( ctx.isNewInstance ){
			ctx.instance.created_at = new Date();
			ctx.instance.updated_at = new Date();
		} 



		next();
	});

	// @TODO not sure what i mean by this.
	GroceryModel.fetch = function(){
		IngredientModel = GroceryModel.app.models.IngredientModel;

		DepartmentModel = GroceryModel.app.models.DepartmentModel;

		GroceryModel.find({})
		.then(function(groceries){
			console.log(groceries);


			groceries.forEach(function(grocery){
		 		// console.log(grocery.ingredients);
		 		// console.log(grocery.departments);
		 		// DepartmentModel.findByIds(grocery.departments)
		 		// .then(function(departments){


		 		// 	// console.log(departments.ingredients);
		 		// 	IngredientModel.findByIds(grocery.ingredients)
			 	// 	.then(function(ingredients){		 			
			 	// 		// console.log(ingredients);
			 	// 	})
		 		
		 		// })

		 		IngredientModel.findByIds(grocery.ingredients)
		 		.then(function(ingredients){		 			
		 			// console.log(ingredients);
		 		})
			})


			groceries.forEach(function(grocery){
		 		// console.log(grocery.ingredients);
		 		IngredientModel.findByIds(grocery.ingredients)
		 		.then(function(ingredients){		 			
		 			// console.log(ingredients);
		 		})
			})


		})

	};

	// @TODO right now this method will work fine for Free menu branch
	// GroceryModel.groceryListForMenu = function(menuId, cb){
	GroceryModel.groceryListForMenu = function(groceryId, cb){

		var DepartmentModel = GroceryModel.app.models.DepartmentModel;

		// MenuModel.MenuRecipesIngredients(menuId, function(data){
		// 	// @TODO test this "data" attribute
		// 	console.log(data);
		// })

		GroceryModel.findById(groceryId)
		.then(function(grocery){

			DepartmentModel.find({
				where:{
					id: { inq:grocery.departments }
				},
				// fields: []       
			},cb);

		})
		.catch(function(err){
			if(err){ cb(err); }
		});

	};

	GroceryModel.remoteMethod('groceryListForMenu', {
		accepts: {
		  // arg: 'menuId',
		  arg: 'groceryId',
		  type: 'string',
		  required: true
		},
		returns: {
		  arg: 'departments',
		  type: 'array'
		},
		http: {
		  path: '/menu',
  		  // path: '/:id/menu',
		  verb: 'get'
		}
	});

};

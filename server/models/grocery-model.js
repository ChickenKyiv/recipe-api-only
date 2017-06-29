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

	// @TODO if we have empty menuId then we need to get groceries for the latest(read current active menu);

	GroceryModel.groceryListForMenu = function(menuId, cb){


		// var DepartmentModel = GroceryModel.app.models.DepartmentModel;

		MenuModel.MenuRecipesIngredients(menuId, function(data){
			// @TODO test this "data" attribute
			console.log(data);
		});



		// GroceryModel.findById(groceryId)
		// .then(function(grocery){

		// 	DepartmentModel.find({
		// 		where:{
		// 			id: { inq:grocery.departments }
		// 		},
		// 		// fields: []       
		// 	},cb);

		// })
		// .catch(function(err){
		// 	if(err){ cb(err); }
		// });

	};

	GroceryModel.remoteMethod('groceryListForMenu', {
		accepts: {
		  arg: 'menuId',
		  type: 'string',
		  required: true
		},
		returns: {
		  arg: 'groceries',
		  type: 'array'
		},
		http: {
		  path: '/menu/:id',
  		  // path: '/:id/menu',
		  verb: 'get'
		}
	});

};

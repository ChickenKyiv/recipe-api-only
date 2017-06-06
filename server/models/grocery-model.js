'use strict';

module.exports = function(GroceryModel) {
	GroceryModel.validatesPresenceOf(
		'departments', 'img', 'desc', 'slug'
	);

	GroceryModel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});

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

};

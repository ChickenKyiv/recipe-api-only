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
		GroceryModel.find({})
		.then(function(groceries){
			console.log(groceries);

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

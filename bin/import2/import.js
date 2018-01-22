
		Ingredients.createIngredients(
			results.departments, function(err, ingredients){

				// console.log(ingredients);

				Ingredients.attachIngredientsToGroceries(
						ingredients, results.groceries
			 	);
				console.log('import finished');
			});

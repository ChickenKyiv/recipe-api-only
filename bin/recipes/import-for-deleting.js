// recipes for search
//let getRecipes2     = require(path.resolve(__dirname, 'sample-recipes-search-data'));

	}, function(err, results){
		if( err ) throw err;



		assignAdmin(results.users[2]);

		attachRecipeToUsers(results.users, results.recipes, function(err){
			console.log('>models create sucessfully');
		});


		attachMenusToUsers(results.users, results.menus, function(err){
			console.log('>models create sucessfully');
		});

		attachRecipesToMenu(results.recipes, results.menus, function(err){
			console.log('>recipes create sucessfully');
		});

		attachIngredientsToRecipes(results.ingredients, results.recipes, function(err){
			console.log('>ingredients create sucessfully');
		});


		attachDepartmentsToIngredients(results.departments, results.ingredients, function(err){
			console.log('>departments attached to ingredients ');
		});

		//:todo remove this function, when departments will work
		attachDepartmentsToGroceries(results.departments, results.groceries, function(err){
			console.log('>departments create sucessfully');
		});

// //include middleware
let Ingredients  = require(path.resolve(__dirname, 'ingredients'));

let Groceries    = require(path.resolve(__dirname, 'grocery'));

let Departments  = require(path.resolve(__dirname, 'departments'));

let Users        = require(path.resolve(__dirname, 'users'));

async.parallel({
		users       : async.apply(Users.createUsers),
		departments : async.apply(Departments.createDepartments),
		groceries   : async.apply(Groceries.createGroceries),


	}, function(err, results){
		if( err ) throw err;

		Users.assignAdmin(results.users[2]);
		Users.attachGroceryToAdmin(results.users[2], results.groceries[0]);

		Ingredients.createIngredients(
			results.departments, function(err, ingredients){

				// console.log(ingredients);

				Ingredients.attachIngredientsToGroceries(
						ingredients, results.groceries
			 	);
				console.log('import finished');
			});

		// console.log(ingredient);





	}
);

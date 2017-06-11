'use strict';

module.exports = function(DepartmentModel) {
	DepartmentModel.validatesPresenceOf('name', 'items');

	DepartmentModel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});


  DepartmentModel.prototype.addGrocery = function (groceries) {
		var GroceryModel =  DepartmentModel.app.models.GroceryModel;    	

      DepartmentModel.find({})
      .then(function(departments){

		groceries.forEach(function(grocery){
		 	grocery.updateAttribute('department', departments);
		})


      })
		.catch(function(err){
			throw err;
		});


  };


  DepartmentModel.fetch = function(){
  	var GroceryModel = DepartmentModel.app.models.DepartmentModel;
  	var IngredientModel = DepartmentModel.app.models.IngredientModel;

  	DepartmentModel.find({})
  	.then(function(departments){
  		departments.forEach(function(department){
  			console.log(department.ingredients);

  			var ingredientsId = department.ingredients;
  			IngredientModel.find({
                where:{
                    id: recipe.ingredients
                }       
            })
            .then(function(ingredients){

            	console.log( ingredients );

            })
            .catch(function(err){
            	throw err;
            });

  		});
  	})
  	.catch(function(err){
  		throw err;
  	});
  };




};

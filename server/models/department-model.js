'use strict';

module.exports = function(DepartmentModel) {
	DepartmentModel.validatesPresenceOf(
    'name', 'items'
  );

	DepartmentModel.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});

    DepartmentModel.observe("before save", function updateTimestamp(ctx, next) {

    if( ctx.isNewInstance ){
      ctx.instance.created_at = new Date();
      ctx.instance.updated_at = new Date();
    } 



    next();
  });





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

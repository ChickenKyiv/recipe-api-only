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


  DepartmentModel.addGrocery = function (groceries) {

      DepartmentModel.find({

      })
      .then(function(departments){

        // console.log(departments);
        var result = Object.keys(departments).map(function(e) {
              return departments[e].id;
        });
        // console.log(result);
    		groceries.forEach(function(grocery){
    		 	grocery.updateAttribute('departments', result);
    		})
        // console.log(groceries);

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

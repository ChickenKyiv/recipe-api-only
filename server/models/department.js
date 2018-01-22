'use strict';

module.exports = function(Department) {
	// Department.validatesPresenceOf(
  //   'name'
	// 	//, 'items'
  // );

	Department.observe('update', function(ctx, next){
		ctx.instance.updated_at = new Date();
		next();
	});

    Department.observe("before save", function updateTimestamp(ctx, next) {

    if( ctx.isNewInstance ){
      ctx.instance.created_at = new Date();
      ctx.instance.updated_at = new Date();
    }



    next();
  });





  Department.fetch = function(){
  	var Grocery = Department.app.models.Grocery;
  	var Ingredient = Department.app.models.Ingredient;

  	Department.find({})
  	.then(function(departments){
  		departments.forEach(function(department){
  			console.log(department.ingredients);

  			var ingredientsId = department.ingredients;
  			Ingredient.find({
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


  // department/:id/ingredients
  Department.IngredientsByDepartment = function(departmentId, cb){

    // var IngredientModel = DepartmentModel.app.models.IngredientModel;

    // next version
    // IngredientModel.find({
    //     where:{
    //       deaprtmentId: { inq:departmentId } //we assume that we're have departmentId array. maybe we need to have 1-to-1 relation
    //     },
    //     fields: [
    //       // 'img', 'url',

    //       ]
    //   },cb);



    Department.findById(departmentId, {
        fields: 'items'
      },function(err, result){
        cb(null, result.items);

      });





  };



  Department.remoteMethod('IngredientsByDepartment', {
    accepts: {
      arg: 'departmentId',
      type: 'string',
      required: true
    },
    returns: {
      arg: 'ingredients',
      type: 'array'
    },
    http: {
      path: '/:id/ingredients',
      verb: 'get'
    }
  });



};

'use strict';

module.exports = function(Ingredient) {

    //@TODO add to done & delete default false
	// Ingredient.validatesPresenceOf(
	// 	// 'name', 'type',
  //       // 'done', 'delete'
  //
  //       'term',
  //       'description',
  //       'searchValue',
	// );

    // Ingredient.observe("before save", function updateTimestamp(ctx, next) {
    //
    // 	if( ctx.isNewInstance ){
    // 		ctx.instance.created_at = new Date();
    // 		ctx.instance.updated_at = new Date();
    //
    //         ctx.instance.done   = false;
    //         ctx.instance.delete = false;
    // 	}
    //
    //
    // 	next();
    // });

    // Ingredient.observe('update', function(ctx, next){
    //     ctx.instance.updated_at = new Date();
    //     next();
    // });


    // method when Deparments use array of ingredients and move it inside departments array

  // method list attached ingredients by departments
    // Ingredient.listDepartments = function(ingredientId, cb){
    //     var DepartmentModel = Ingredient.app.models.DepartmentModel;
    //
    //     Ingredient.findById(ingredientId)
    //     .then(function(recipe){
    //         console.log( recipe.ingredients );
    //         // @TODO change to custom method on recipe model
    //         Ingredient.find({
    //             where:{
    //                 id: recipe.ingredients
    //             }
    //         })
    //         .then(function(ingredients){
    //         //  recipe.ingredients = ingredients;
    //         // console.log(recipe);
    //         // return recipe;
    //             cb(null, ingredients);
    //         });
    //
    //
    //
    //
    //     })
    //     .catch(function(err){
    //         if(err){ cb(err); }
    //     });
    //
    //
    //
    // };
    // Ingredient.remoteMethod('listIngredients', {
    //     accepts: {
    //       arg: 'recipeId',
    //       type: 'string'
    //     },
    //     returns: {
    //       arg: 'menus',
    //       type: 'array'
    //     },
    //     http: {
    //       path: '/recipe/list/ingredients',
    //       verb: 'get'
    //     }
    // });
    //
    // Ingredient.findByIds = function(ingredientIds, cb){
    //     Ingredient.find({
    //             where:{
    //                 id: ingredientIds
    //             }
    //         }).then(cb);
    // };















  // method list attached ingredients with unit convertion and additions
	// RecipeModel.listIngredients = function(recipeId, cb){
 //        var IngredientModel = RecipeModel.app.models.IngredientModel;

 //        RecipeModel.findById(recipeId)
 //        .then(function(recipe){
 //            console.log( recipe.ingredients );
 //            // @TODO change to custom method on recipe model
 //            return IngredientModel.find({
 //                where:{
 //                    id: recipe.ingredients
 //                }
 //            })
 //            .then(function(ingredients){
 //            //  recipe.ingredients = ingredients;
 //            // console.log(recipe);
 //            // return recipe;
 //            // or cb(ingredients);
 //            });




 //        })
 //        .catch(function(err){
 //            if(err){ cb(err); }
 //        });



 //    };

};

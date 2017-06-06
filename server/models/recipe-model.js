'use strict';

module.exports = function(RecipeModel) {

	RecipeModel.validatesPresenceOf(
		'img', 'url', 'title', 'ingredients', 
		'directions', 'prep_time', 'total_time',
		'recipe_yield'
		);
  
    RecipeModel.observe("before save", function updateTimestamp(ctx, next) {

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 



    	next();
    });

    RecipeModel.observe('update', function(ctx, next){
        ctx.instance.updated_at = new Date();
        next();
    });

    // method list attached recipes with ingredients
    RecipeModel.listIngredients = function(recipeId, cb){
        var IngredientModel = RecipeModel.app.models.IngredientModel;

        RecipeModel.findById(recipeId)
        .then(function(recipe){
            console.log( recipe.ingredients );
            // @TODO change to custom method on recipe model
            return IngredientModel.find({
                where:{
                    id: recipe.ingredients
                }       
            })
            .then(function(ingredients){
            //  recipe.ingredients = ingredients;
            // console.log(recipe);
            // return recipe;
            // or cb(ingredients);
            });




        })
        .catch(function(err){
            if(err){ cb(err); }
        });



    };

    RecipeModel.remoteMethod('listIngredients', {
        accepts: {
          arg: 'recipeId',
          type: 'string'
        },
        returns: {
          arg: 'menus',
          type: 'array'
        },
        http: {
          path: '/recipe/list/ingredients',
          verb: 'get'
        }
    });


    RecipeModel.attachToMenu = function(menus){

        RecipeModel.find({
            fields: 'id'
        })
        .then(function(recipeIds){
            console.log(recipeIds);

            menus.forEach(function(menu){
                menu.updateAttribute('rec', recipeIds);
            });
            console.log(menus);

        });


    };


};
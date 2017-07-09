'use strict';

module.exports = function(Recipe) {

	Recipe.validatesPresenceOf(
		'img', 
        // 'url',
         'title', 
         // 'ingredients', 
		'directions', 'prep_time', 'total_time',
		'recipe_yield'
		);
  
    Recipe.observe("before save", function updateTimestamp(ctx, next) {

    	if( ctx.isNewInstance ){
    		ctx.instance.created_at = new Date();
    		ctx.instance.updated_at = new Date();
    	} 



    	next();
    });

    Recipe.observe('update', function(ctx, next){
        ctx.instance.updated_at = new Date();
        next();
    });

    // method list attached recipes with ingredients
    Recipe.listIngredients = function(recipeId, cb){
        var Ingredient = Recipe.app.models.Ingredient;

        Recipe.findById(recipeId)
        .then(function(recipe){

            console.log( recipe.ingredients );
            // @TODO change to custom method on recipe model

            // if( !includeRecipeId ){



                Ingredient.find({
                    where:{
                        id: { inq:recipe.ingredients }
                    },
                    // fields : ['fieldname']       
                }, cb);

            
            // } else {

            //     IngredientModel.find({
            //         where:{
            //             id: { inq:recipe.ingredients }
            //         },
            //         // fields : ['fieldname']       
            //     }, function(err, ingredients){



            //     });                

            // }



        })
        .catch(function(err){
            if(err){ cb(err); }
        });



    };

    Recipe.remoteMethod('listIngredients', {
        accepts: {
          arg: 'recipeId',
          type: 'string',
          required: true
        },
        returns: {
          arg:  'ingredients',
          type: 'array',
          // arg:  'recipeId',
          // type: 'number'
        },
        http: {
          path: '/:id/list/ingredients',
          verb: 'get'
        }
    });

    // inner method only right now
    Recipe.listIngredientsExtended = function(recipeId, cb){
        var Ingredient = RecipeModel.app.models.Ingredient;

        Recipe.findById(recipeId)
        .then(function(recipe){

            console.log( recipe.ingredients );


                Recipe.find({
                    where:{
                        id: { inq:recipe.ingredients }
                    },
                    // fields : ['fieldname']       
                }, function(err, ingredients){

                    // var data = {
                    //     recipeId: recipeId,
                    //     ingredients: ingredients 
                    // };

                    var data = [];

                    ingredients.forEach(function(ingredient){
                        ingredient.recipeId = recipeId;
                        data.push(ingredient);
                         // = ingredient;
                    });

                    console.log(data);

                    cb(null, data);
                    
                });                




        })
        .catch(function(err){
            if(err){ cb(err); }
        });



    };
   

            


};
'use strict';

module.exports = function(RecipeModel) {

	RecipeModel.validatesPresenceOf(
		'img', 
        // 'url',
         'title', 'ingredients', 
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


    RecipeModel.attachToMenu = function(){
        var MenuModel = RecipeModel.app.models.MenuModel;
    // var RoleMapping = UserModel.app.models.RoleMapping;
        RecipeModel.find({
            fields: 'id'
        })
        .then(function(recipeIds){
            console.log(recipeIds);

            // recipeIds.forEach(function(element){
            //     element.id
            // });


            var result = Object.keys(recipeIds).map(function(e) {
              return recipeIds[e].id;
            });

            console.log(result);
            // console.log('-------');

            MenuModel.find({})
            .then(function(menus){
                console.log(menus);
                console.log('-------');

                menus.forEach(function(menu){
                    menu.updateAttribute('recipes', result);
                });    
                console.log(menus);
                console.log('-------');
            })
            

            
        }).catch(function(err){
            throw err;
        });


    };

    RecipeModel.addIngredients = function(){
        var IngredientsModel = RecipeModel.app.models.IngredientsModelModel;

        IngredientsModel.find({
            fields:'id'         
        })
        .then(function(ingredientIds){
            console.log(ingredientIds);

            var result = Object.keys(ingredientIds).map(function(e) {
              return ingredientIds[e].id;
            });

            console.log(result);
            // console.log('-------');

            RecipeModel.find({})
            .then(function(recipes){
                console.log(recipes);
                console.log('-------');

                recipes.forEach(function(menu){
                    recipes.updateAttribute('ingredients', result);
                });    
                console.log(recipes);
                console.log('-------');
            });


        }); 

    };

            


};
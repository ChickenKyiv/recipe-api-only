'use strict';

module.exports = function(Ingredient2) {
    //@TODO add to done & delete default false


  // method when Deparments use array of ingredients and move it inside departments array
  // method list attached ingredients by departments

  	// by passing recipeId we'll get all Ingredients, related to this recipe 
  	// and Departments, related to Ingredients.
    Ingredient2.listDepartments = function(recipeId, cb){
        var Recipe2 = Ingredient2.app.models.Recipe2; //:todo

        Recipe2.findById(recipeId, {
        	// include: 'ingredientList'
        	// include: {IngredientModel2: 'department'}
        }, function(recipe){
        	console.log(recipe);
        	cb(null, recipe);
        })
     


    };
    Ingredient2.remoteMethod('listIngredients', {
        accepts: {
          arg: 'recipeId',
          type: 'string'
        },
        returns: {
          arg: 'menus', //:todo
          type: 'array'
        },
        http: {
          path: '/recipe/list/departments',
          verb: 'get'
        }
    });

   

};

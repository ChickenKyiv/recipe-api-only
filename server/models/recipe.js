'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

var options = {
          timestamps: { 
               createdAt: 'created_at',
               updatedAt: 'updated_at' 
          }
     };

var RecipeSchema = mongoose.Schema({



name: String,
ingredients: [Ingredients], // @todo add ingredients
directions: [String],

prepTime    : String,
totalTime   : String,
recipeYield : String,

imageURL: String,
originalURL: String,

         
  }, options );


const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;

// const Product = module.exports = mongoose.model('Product', productSchema);

//get recipes
module.exports.getRecipes = function (callback, limit, short = false) {

var select = 'id name imageUrl';
if( short ){     
     Recipe.find(callback).limit(limit).select(select); 
} else {
     Recipe.find(callback).limit(limit);
}

    
}

//get recipe by ID
module.exports.getRecipeById = function (id, callback) {

Recipe.findById(id, callback);
}

//get recipe ingredients by recipe id
module.exports.getRecipeIngredientsById = function (id, callback) {
var select = 'ingredients';
    // Product.findById(id, callback);
}

//get recipe ingredient by recipe id and ingredient id
module.exports.getRecipeIngredientByIds = function (recipe_id, ingredient_id, callback) {

// Product.findById(id, callback);
}

//get recipe directions by recipe id
module.exports.getRecipeDirectionsById = function (id, callback) {
var select = 'directions';
// Product.findById(id, callback);
}














// simple version. getting nothing
function getNutritionFactsById = function (id, callback){

}






POST https://recipal.com/api/v1/recipes/{RECIPE_ID}/scale

### Recipe Meta [GET]
/meta

### Recipe Ingredients Categorized [GET]
/ingredients/categorized



## /recipeIdByWeekday - maybe this is belong more to weekly menu

## /nutrition


### Delete [DELETE]
+ /delete
+ Response 204

upload




favorite
/add
/:id
/delete
/list return array recipe ids only

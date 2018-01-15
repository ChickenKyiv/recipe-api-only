'use strict';

var path        = require('path');
let server      = require(path.resolve(__dirname, '../../server/server'));
var database    = server.datasources.groceryDS;

var Ingredient  = server.models.Ingredient;
var relation    = 'ingredients';
var relation2   = 'ingredientIds';


// function attachIngredientsToRecipes(ingredients, recipes){

//   var first  = ingredients.slice(0, 2);
//   var second = ingredients.slice(1, 3);
//   console.log(first)  ;
//   console.log(second) ;

//   var one = idsOnly(first);
//   var two = idsOnly(second);

//   recipes[0].updateAttribute(relation, one);

//   recipes[1].updateAttribute(relation, two);

//   console.log(recipes);


//   // // only first 10 elements attach
//   // var first10  = arrayWithIds.slice(0, 10);
//   // var second10 = arrayWithIds.slice(11, 21);

//   // recipes.forEach(function(recipe, index){

//   //  if (index % 2 === 0){
//   //    recipe.updateAttribute('ingredients', first10);
//   //  } else {
//   //    recipe.updateAttribute('ingredients', second10);
//   //  }

//   //  // recipe.updateAttribute('ingredients', arrayWithIds);

//   // });
// };


function idsOnly(array){

  var result = Object.keys(array).map(function(e) {
    return array[e].id;
    });

  return result;

};

function createIngredients(departments, cb){
  database.automigrate('Ingredient', function(err){
    if (err) return cb(err);

    Ingredient.create(getIngredients( departments ), cb);
  });
};

function attachIngredientsToGroceries(ingredients, groceries){
 var arrayWithIds = idsOnly(ingredients);

 groceries.forEach(function(grocery){
     grocery.updateAttribute(relation2, arrayWithIds);

 });

};

module.exports.createIngredients = createIngredients;
module.exports.attachIngredientsToGroceries = attachIngredientsToGroceries;

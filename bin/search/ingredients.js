'use strict';

const debug   = require('debug');
// model
let Ingredient
let database
let table_name = 'Ingredient'
let attribute  = 'allergies';
// let relation = 'nutritions';

const init = ( server, raven, cb ) => {

  Ingredient = server.models.Ingredient;
  database   = server.datasources.recipeDS;

  // add data to db
  create(cb, departments, raven);
}

const get = () => {

    var data     = [

	    ///
     ];

  	return data;

};

const create = (cb, departments, raven) => {

  database.autoupdate(table_name, function(err){
    if (err) {
      Raven.captureException(err);
      return cb(err);
    }


    Ingredient.create(get(departments), cb);
  });

};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};

// function attach(array, recipes, cb){
//      var arrayWithIds = idsOnly(array);
//      recipes.forEach(function(recipe){
//           recipe.updateAttribute(attribute, arrayWithIds);
//
//      });
// };


//
module.exports.init   = init;
module.exports.attach = attach;



var Ingredient  = server.models.Ingredient;
var relation    = 'ingredients';
var relation2   = 'ingredientIds';




function attachIngredientsToGroceries(ingredients, groceries){
 var arrayWithIds = idsOnly(ingredients);

 groceries.forEach(function(grocery){
     grocery.updateAttribute(relation2, arrayWithIds);

 });

};

module.exports.createIngredients = createIngredients;
module.exports.attachIngredientsToGroceries = attachIngredientsToGroceries;

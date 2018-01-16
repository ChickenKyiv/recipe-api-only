'use strict';

const debug   = require('debug');
// model
let Recipe
let database
let table_name = 'Recipe'

// let attribute  = 'userId';
// @TODO not clear, how we can know which attribute to use?
let attribute = [
  'nutritions', // #0

];


// let relation = 'nutritions';
const init = ( server, raven, cb ) => {

  // console.log('-----');
  // console.log(server);
  Recipe   = server.models.Recipe;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);

  //custom stuff, related to recipes only
}

const get = () => {

    var data     = [
          {

               "name":"Gluten-Free",

               "type":"allergy",

          }
     ];

  	return data;

};

const create = (cb, raven) => {

  database.autoupdate(table_name, function(err){
    if (err) {
      Raven.captureException(err);
      return cb(err);
    }


    Recipe.create(get(), cb);
  });

};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};

// this method differintiates from other methods
//@TODO find some best way in order to do things like this.
function attach(array, recipes, attribute, cb){
     var arrayWithIds = idsOnly(array);
     recipes.forEach(function(recipe){
          recipe.updateAttribute(attribute, arrayWithIds);

     });
};

// we'll must have a cb for sure
function attachNutritionsToRecipes(nutritions, recipes){
	var first  = recipes[0];
	var second = recipes[1];

  attach(nutritions[0], first, attribute[0]);
  attach(nutritions[1], second, attribute[0]);


};


//
module.exports.init   = init;
module.exports.attach = attach;

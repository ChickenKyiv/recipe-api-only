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
  'cuisines',   // #1
  'diets',      // #2
  'holidays',   // #3
  'courses'     // #4

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


const relate = (results) => {

  attachAllergiesToRecipes
  attachCoursesToRecipes
  attachCuisinesToRecipes
  attachDietsToRecipes
  attachHolidaysToRecipes
  attachNutritionsToRecipes

  attachAllergiesToRecipes(results.allergies, results.recipes, function(err){
    console.log('>allergies create sucessfully');
  });

  attachCoursesToRecipes(results.courses, results.recipes, function(err){
    console.log('>courses create sucessfully');
  });

  attachCuisinesToRecipes(results.cuisines, results.recipes, function(err){
    console.log('>cuisines create sucessfully');
  });

  attachDietsToRecipes(results.diets, results.recipes, function(err){
    console.log('>diets create sucessfully');
  });

  attachHolidaysToRecipes(results.holidays, results.recipes, function(err){
    console.log('>models create sucessfully');
  });

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
const attachNutritionsToRecipes = (nutritions, recipes, cb) => {
	var first  = recipes[0];
	var second = recipes[1];

  // will not work
  attach(nutritions[0], first, attribute[0], cb);
  attach(nutritions[1], second, attribute[0],cb);

};

//@TODO create a method with foreach for each attribute in order to attach data to recipe
const attachAllergiesToRecipes = (allergies, recipes, cb) => {
  attach(allergies, recipes, attribute[1], cb)
};

const attachCuisinesToRecipes = (cuisines, recipes, cb) => {
  attach(cuisines, recipes, attribute[1], cb)
};

const attachDietsToRecipes = (diets, recipes, cb) => {
  attach(diets, recipes, attribute[2], cb
};

const attachHolidaysToRecipes = (holidays, recipes, cb) => {
  attach(holidays, recipes, attribute[3], cb)
};

const attachCoursesToRecipes = (courses, recipes, cb) => {
	attach(courses, recipes, attribute[4], cb)
};


//
module.exports.init   = init;
module.exports.attach = attach;

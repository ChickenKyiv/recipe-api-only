'use strict';

const debug   = require('debug');
// model
let Recipe
let database
let table_name = 'Recipe'

// @TODO not clear, how we can know which attribute to use?
let attribute = [
  'nutritions', // #0
  'cuisines',   // #1
  'diets',      // #2
  'holidays',   // #3
  'courses'     // #4
  'allergies'   // #5
];


const init = ( options ) => {

  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  let cb     = options[3];

  Recipe   = server.models.Recipe;
  database = server.datasources.recipeDS;

  let args = {
    model     : Recipe,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  helper.create(args);

  //custom stuff, related to recipes only
}

const get = () => {

    var data     = [
          // {
          //
          //      "name":"Gluten-Free",
          //
          //      "type":"allergy",
          //
          // }
     ];

  	return data;

};




const relate = (results) => {

  if( !results || !results.allergies || !results.recipes
      || !results.courses || !results.cuisines
      || !results.diets || !results.holidays || !results.nutritions) {
        Raven.captureException("not imported well");
  }

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
  attachNutritionsToRecipes(results.nutritions, results.recipes, function(err){
    console.log('>models create sucessfully');
  });

};


// we'll must have a cb for sure
const attachNutritionsToRecipes = (nutritions, recipes, cb) => {
	var first  = recipes[0];
	var second = recipes[1];

  // will not work
  attach(nutritions[0], first, attribute[0]);
  attach(nutritions[1], second, attribute[0]);

};

//@TODO create a method with foreach for each attribute in order to attach data to recipe
const attachAllergiesToRecipes = (allergies, recipes, cb) => {
  attach(allergies, recipes, attribute[1])
};

const attachCuisinesToRecipes = (cuisines, recipes, cb) => {
  attach(cuisines, recipes, attribute[1])
};

const attachDietsToRecipes = (diets, recipes, cb) => {
  attach(diets, recipes, attribute[2])
};

const attachHolidaysToRecipes = (holidays, recipes, cb) => {
  attach(holidays, recipes, attribute[3])
};

const attachCoursesToRecipes = (courses, recipes, cb) => {
	attach(courses, recipes, attribute[4])
};

//
module.exports.init   = init;

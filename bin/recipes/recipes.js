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
  'courses',    // #4
  'allergies'   // #5
];


const init = ( options, cb ) => {

  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  // let cb     = options[3];

  Recipe   = server.models.Recipe;
  database = server.datasources.recipeDS;

  let args = {
    model     : Recipe,
    table_name: table_name,
    database  : database,
    rows      : get()
  }

  // add data to db
  helper.create(args);

  //custom stuff, related to recipes only
}

const get = () => {

    var data     = [
      {

        title: "Crock Pot Roast12",
        directions: [
         "Place beef roast in crock pot.",
          "Mix the dried mixes together in a bowl and sprinkle over the roast.",
          "Pour the water around the roast.",
          "Cook on low for 7-9 hours."
        ],
        prep_time    :"30min",
        total_time   :"3h",
        recipe_yield :"8",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
        "url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",

      },
      {

        title: "Crock Pot Roast1",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
        url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
        directions: [
          "Place beef roast in crock pot.",
          "Mix the dried mixes together in a bowl and sprinkle over the roast.",
          "Pour the water around the roast.",
          "Cook on low for 7-9 hours."
        ],
        prep_time    :"PT30M",
        total_time   :"PT3H",
        recipe_yield :"8",

      }
     ];

  	return data;

};




const relate = (results) => {

  if( !results || !results.allergies || !results.recipes
      || !results.courses || !results.cuisines
      || !results.diets || !results.holidays
      || !results.nutritions) {
        Raven.captureException("cannot attach additional data to recipes");
  }

  const recipes = results.recipes;
  helper.attach( results.allergies,  recipes, attribute[1]);
  helper.attach( results.courses,    recipes, attribute[4]);
  helper.attach( results.cuisines,   recipes, attribute[1]);
  helper.attach( results.diets,      recipes, attribute[2]);
  helper.attach( results.holidays,   recipes, attribute[3]);
  helper.attach( results.nutritions, recipes, attribute[0]);

  // attachAllergiesToRecipes
  // attachCoursesToRecipes
  // attachCuisinesToRecipes
  // attachDietsToRecipes
  // attachHolidaysToRecipes
  // attachNutritionsToRecipes

  // attachAllergiesToRecipes(results.allergies, results.recipes, function(err){
  //   console.log('>allergies create sucessfully');
  // });
  //
  // attachCoursesToRecipes(results.courses, results.recipes, function(err){
  //   console.log('>courses create sucessfully');
  // });
  //
  // attachCuisinesToRecipes(results.cuisines, results.recipes, function(err){
  //   console.log('>cuisines create sucessfully');
  // });
  //
  // attachDietsToRecipes(results.diets, results.recipes, function(err){
  //   console.log('>diets create sucessfully');
  // });
  //
  // attachHolidaysToRecipes(results.holidays, results.recipes, function(err){
  //   console.log('>models create sucessfully');
  // });
  // attachNutritionsToRecipes(results.nutritions, results.recipes, function(err){
  //   console.log('>models create sucessfully');
  // });

};


// we'll must have a cb for sure
// const attachNutritionsToRecipes = (nutritions, recipes, cb) => {
// 	var first  = recipes[0];
// 	var second = recipes[1];
//
//   // will not work
//   attach(nutritions[0], first, attribute[0]);
//   attach(nutritions[1], second, attribute[0]);
//
// };

//@TODO create a method with foreach for each attribute in order to attach data to recipe
// const attachAllergiesToRecipes = (allergies, recipes, cb) => {
//   attach(allergies, recipes, attribute[1])
// };
//
// const attachCuisinesToRecipes = (cuisines, recipes, cb) => {
//   attach(cuisines, recipes, attribute[1])
// };
//
// const attachDietsToRecipes = (diets, recipes, cb) => {
//   attach(diets, recipes, attribute[2])
// };
//
// const attachHolidaysToRecipes = (holidays, recipes, cb) => {
//   attach(holidays, recipes, attribute[3])
// };
//
// const attachCoursesToRecipes = (courses, recipes, cb) => {
// 	attach(courses, recipes, attribute[4])
// };

//
module.exports.init   = init;

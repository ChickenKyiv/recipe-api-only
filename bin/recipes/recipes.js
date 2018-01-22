'use strict';

const debug = require('debug');
const async = require('async');

let Recipe
let database
let table_name = 'Recipe'
let Raven

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
  Raven  = options[2]; //@TODO apply this changes to all import model files

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




const relate = async (options, results) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method
  let server = options[0];
  let helper = options[1];
  Raven  = options[2]; //@TODO apply this changes to all import model files


  let recipes
  try {

    let Recipe = server.models.Recipe;
    recipes    = await Recipe.find({});


  } catch (e) {
    Raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }
  // end of what i don't like


  if( !results || !results.allergies || !results.recipes
      || !results.courses || !results.cuisines
      || !results.diets || !results.holidays
      || !results.nutritions) {
        Raven.captureException("cannot attach additional data to recipes");
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.allergies,  recipes, attribute[0]);
  helper.attach( results.courses,    recipes, attribute[1]);
  helper.attach( results.cuisines,   recipes, attribute[2]);
  helper.attach( results.diets,      recipes, attribute[3]);
  helper.attach( results.holidays,   recipes, attribute[4]);
  helper.attach( results.nutritions, recipes, attribute[5]);



};

//
module.exports.init   = init;
module.exports.relate = relate;

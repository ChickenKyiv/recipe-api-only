'use strict';

const debug = require('debug');
const async = require('async');

// let Model
// let database
let table_name = 'Recipe'
let raven

// @TODO not clear, how we can know which attribute to use?
let attributes = [
  'nutritions', // #0
  'cuisines',   // #1
  'diets',      // #2
  'holidays',   // #3
  'courses',    // #4
  'allergies'   // #5
];


const get = () => {

    var data     = [
      {
          title   : "Baked Chicken Chimichangas, Borracho Beans",
          directions: [
              "1",
              "2",
              "3",
              "4"
          ],
          prep_time    :"PT30M",
          total_time   :"PT3H",
          recipe_yield :"8",
          img: "http://img.sndimg.com/food/image/upload/h_479,w_639,c_fit/v1/img/recipes/51/78/46/BKN9rVETnqVjW3zddIJ1_0S9A4664.jpg",
          url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
      },
      {
        title: "Perfect Apple Pie",
        directions: [
            "1 Heat oven to 425°F. Place 1 pie crust in ungreased 9-inch glass pie plate. Press firmly against side and bottom.",
            "2 In large bowl, gently mix filling ingredients; spoon into crust-lined pie plate. Top with second crust. Wrap excess top crust under bottom crust edge, pressing edges together to seal; flute. Cut slits or shapes in several places in top crust.",
            "3 Bake 40 to 45 minutes or until apples are tender and crust is golden brown. Cover edge of crust with 2- to 3-inch wide strips of foil after first 15 to 20 minutes of baking to prevent excessive browning. Cool on cooling rack at least 2 hours before serving."
        ],
        prep_time    :"PT30M",
        total_time   :"PT3H",
        recipe_yield :"8",
        img: "http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
        url: "http://google.com",
      },
      {
        title: "Basic Fruit Salad",
        directions: [
            "Cut the apple into cubes",
            "Cut the banana into slices",
            "Peel the orange, and divide into segments",
            "Combine all ingredients in a bowl",
            "Mix to combine",
        ],
        prep_time    :"PT30M",
        total_time   :"PT3H",
        recipe_yield :"8",
        img: "http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
        url: "http://google.com",
      },
      {
        title : "Crock Pot Roast",
        directions: [
          "Place beef roast in crock pot.",
          "Mix the dried mixes together in a bowl and sprinkle over the roast.",
          "Pour the water around the roast.",
          "Cook on low for 7-9 hours."
        ],
        prep_time    :"30min",
        total_time   :"3h",
        recipe_yield :"4",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
        url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
      }
     ];

  	return data;

};




const relate = async (options, results, helper) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  //@TODO apply this changes to all import model files
  let server
  let database
  let raven
  ( {server, database, raven} = options );


  let recipes
  try {

    let Recipe = server.models[table_name];
    recipes    = await Recipe.find({});


  } catch (e) {
    raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }
  // end of what i don't like


  if( !results || !results.allergies || !results.recipes
      || !results.courses || !results.cuisines
      || !results.diets || !results.holidays
      || !results.nutritions) {
        raven.captureException("cannot attach additional data to recipes");
  }

  // //@TODO create a method with foreach for each attribute in order to attach data to recipe
  // helper.attach( results.allergies,  recipes, attributes[0]);
  // helper.attach( results.courses,    recipes, attributes[1]);
  // helper.attach( results.cuisines,   recipes, attributes[2]);
  // helper.attach( results.diets,      recipes, attributes[3]);
  // helper.attach( results.holidays,   recipes, attributes[4]);
  // helper.attach( results.nutritions, recipes, attributes[5]);



};


module.exports.get   = get;
module.exports.table_name   = table_name;
module.exports.relate = relate;

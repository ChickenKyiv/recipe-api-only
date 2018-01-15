'use strict';

const debug   = require('debug');
// model
let Recipe
let database
let table_name = 'Recipe'

// let attribute  = 'userId';
let attribute = [
  ''
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

        title: "Crock Pot Roast12",
        ingredients: [

        ],
        directions: [
         "Place beef roast in crock pot.",
          "Mix the dried mixes together in a bowl and sprinkle over the roast.",
          "Pour the water around the roast.",
          "Cook on low for 7-9 hours."
        ],
        prep_time    :"30min",
        total_time   :"3h",
        recipe_yield :"8",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg","url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",


      },
      {

        title: "Crock Pot Roast1",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
        ingredients: [

        ],
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

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
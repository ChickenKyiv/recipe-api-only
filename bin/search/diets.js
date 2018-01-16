'use strict';

let Diet
let database
let table_name = 'Diet'
let attribute  = 'diets';
// let relation   = 'nutritions';


const init = ( server, raven, cb ) => {

  Diet     = server.models.Diet;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb);
}

// var Course   =  server.models.Diet;
// var relation = 'nutritions';



const get = () => {


     var diet        = [
     {
          // "id":"388",
          "name":"Lacto vegetarian",
          // "longDescription":"Lacto vegetarian",
          // "searchValue":"388^Lacto vegetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"389",
          "name":"Ovo vegetarian",
          // "longDescription":"Ovo vegetarian",
          // "searchValue":"389^Ovo vegetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"390",
          "name":"Pescetarian",
          // "longDescription":"Pescetarian",
          // "searchValue":"390^Pescetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"386",
          "name":"Vegan",
          // "longDescription":"Vegan",
          // "searchValue":"386^Vegan",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"387",
          "name":"Lacto-ovo vegetarian",
          // "longDescription":"Vegetarian",
          // "searchValue":"387^Lacto-ovo vegetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"403",
          "name":"Paleo",
          // "longDescription":"Paleo",
          // "searchValue":"403^Paleo",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     }
     ];

     return diet;

};


const create = (cb) => {
     database.autoupdate(table_name, function(err){
          if (err) return cb(err);

          Diet.create(get(), cb);
     });
};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};



function attach(diets, recipes, cb){
     var arrayWithIds = idsOnly(diets);
     recipes.forEach(function(recipe){
          recipe.updateAttribute(attribute, arrayWithIds);

     });
};


//
module.exports.init   = init;
module.exports.attach = attach;
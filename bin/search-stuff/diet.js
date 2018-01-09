'use strict';

let Diet
let database
let table_name = 'Diet'
let attribute  = 'diets';
// let relation   = 'nutritions';


init => (server, cb) {

  Diet     = server.models.Diet;
  database = server.datasources.groceryDS;

  // add data to db
  create(cb);
}

// var Course   =  server.models.Diet;
// var relation = 'nutritions';



function get (){


     var diet        = [
     {
          // "id":"388",
          "shortDescription":"Lacto vegetarian",
          "longDescription":"Lacto vegetarian",
          // "searchValue":"388^Lacto vegetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"389",
          "shortDescription":"Ovo vegetarian",
          "longDescription":"Ovo vegetarian",
          // "searchValue":"389^Ovo vegetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"390",
          "shortDescription":"Pescetarian",
          "longDescription":"Pescetarian",
          // "searchValue":"390^Pescetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"386",
          "shortDescription":"Vegan",
          "longDescription":"Vegan",
          // "searchValue":"386^Vegan",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"387",
          "shortDescription":"Lacto-ovo vegetarian",
          "longDescription":"Vegetarian",
          // "searchValue":"387^Lacto-ovo vegetarian",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"403",
          "shortDescription":"Paleo",
          "longDescription":"Paleo",
          // "searchValue":"403^Paleo",
         // "type":"diet",
         // "localesAvailableIn":["en-US"]
     }
     ];

     return diet;

};


function create(cb){
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

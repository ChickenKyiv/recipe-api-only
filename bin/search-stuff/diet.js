'use strict';

let Diet
let database
let attribute
let relation = 'nutritions';


// var Course   =  server.models.Cousine;

init => (server, cb) {

  Diet     = server.models.Diet;
  database = server.datasources.groceryDS;

  // add data to db
  createDiets(cb);
}

// var Course   =  server.models.Diet;
// var relation = 'nutritions';



function getData (){


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


function createDiets(cb){
     database.autoupdate('Diet', function(err){
          if (err) return cb(err);

          Diet.create(getData(), cb);
     });
};


// function idsOnly(array){
//
//      var result = Object.keys(array).map(function(e) {
//           return array[e].id;
//     });
//
//      return result;
//
// };

//
module.exports.init = init;
// module.exports.attachCoursesToRecipes = attachCuisinesToRecipes;

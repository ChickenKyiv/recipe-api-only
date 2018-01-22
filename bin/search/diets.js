'use strict';

let Diet
let database
let table_name = 'Diet'
let attribute  = 'diets';
// let relation   = 'nutritions';


const init = ( options, cb ) => {

  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  // let cb     = options[3];
  Diet     = server.models.Diet;
  database = server.datasources.recipeDS;

  // add data to db
  // create(cb);
  let args = {
    model     : Diet,
    table_name: table_name,
    database  : database,
    rows      : get()
  }

  // add data to db
  helper.create(args);
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

//
module.exports.init   = init;

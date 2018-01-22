'use strict';

const debug   = require('debug');
// model
let Allergy
let database
let table_name = 'Allergy'
let attribute  = 'allergies';
// let relation = 'nutritions';
const init = ( options, cb ) => {
  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  // let cb     = options[3];

  Allergy  = server.models.Allergy;
  database = server.datasources.recipeDS;

  // add data to db
  // create(cb, raven);
  let args = {
    model     : Allergy,
    table_name: table_name,
    database  : database,
    rows      : get()
  }

  // add data to db
  helper.create(args, cb);
}

const get = () => {

    var data     = [
          {
               // "id":"393",
               "name":"Gluten-Free",
               // "longDescription":"Gluten-Free",
               // "searchValue":"393^Gluten-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"394",
               "name":"Peanut-Free",
               // "longDescription":"Peanut-Free",
               // "searchValue":"394^Peanut-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"398",
               "name":"Seafood-Free",
               // "longDescription":"Seafood-Free",
               // "searchValue":"398^Seafood-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"399",
               "name":"Sesame-Free",
               // "longDescription":"Sesame-Free",
               // "searchValue":"399^Sesame-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"400",
               "name":"Soy-Free",
               // "longDescription":"Soy-Free",
               // "searchValue":"400^Soy-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"396",
               "name":"Dairy-Free",
               // "longDescription":"Dairy-Free",
               // "searchValue":"396^Dairy-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"397",
               "name":"Egg-Free",
               // "longDescription":"Egg-Free",
               // "searchValue":"397^Egg-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"401",
               "name":"Sulfite-Free",
               // "longDescription":"Sulfite-Free",
               // "searchValue":"401^Sulfite-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"395",
               "name":"Tree Nut-Free",
               // "longDescription":"Tree Nut-Free",
               // "searchValue":"395^Tree Nut-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"392",
               "name":"Wheat-Free",
               // "longDescription":"Wheat-Free",
               // "searchValue":"392^Wheat-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          }
     ];

  	return data;

};







//
module.exports.init   = init;

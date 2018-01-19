'use strict';

const debug   = require('debug');
// model
let Allergy
let database
let table_name = 'Allergy'
let attribute  = 'allergies';
// let relation = 'nutritions';
const init = ( server, raven, cb ) => {
// function init(server, cb){
// console.log('-----');
// console.log(server);
  Allergy  = server.models.Allergy;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);
  let args = {
    model     : Department,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  helper.create(args);
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

const create = (cb, raven) => {

  database.autoupdate(table_name, function(err){
    if (err) {
      Raven.captureException(err);
      return cb(err);
    }

    // Allergy.create(get(), (err,re) => console.log(re));
    Allergy.create(get(), cb);
  });

};



function attach(allergies, recipes, cb){

};


//
module.exports.init   = init;

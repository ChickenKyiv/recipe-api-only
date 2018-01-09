'use strict';

// model
let Allergy
let database
let table_name = 'Allergy'
let attribute  = 'allergies';
// let relation = 'nutritions';
init = (server, cb) => {
// function init(server, cb){

  Allergy  = server.models.Allergy;
  database = server.datasources.recipeDS;

  // add data to db
    create(cb);
}

get = () => {

    var data     = [
          {
               // "id":"393",
               "shortDescription":"Gluten-Free",
               // "longDescription":"Gluten-Free",
               // "searchValue":"393^Gluten-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"394",
               "shortDescription":"Peanut-Free",
               // "longDescription":"Peanut-Free",
               // "searchValue":"394^Peanut-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"398",
               "shortDescription":"Seafood-Free",
               // "longDescription":"Seafood-Free",
               // "searchValue":"398^Seafood-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"399",
               "shortDescription":"Sesame-Free",
               // "longDescription":"Sesame-Free",
               // "searchValue":"399^Sesame-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"400",
               "shortDescription":"Soy-Free",
               // "longDescription":"Soy-Free",
               // "searchValue":"400^Soy-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"396",
               "shortDescription":"Dairy-Free",
               // "longDescription":"Dairy-Free",
               // "searchValue":"396^Dairy-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"397",
               "shortDescription":"Egg-Free",
               // "longDescription":"Egg-Free",
               // "searchValue":"397^Egg-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"401",
               "shortDescription":"Sulfite-Free",
               // "longDescription":"Sulfite-Free",
               // "searchValue":"401^Sulfite-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"395",
               "shortDescription":"Tree Nut-Free",
               // "longDescription":"Tree Nut-Free",
               // "searchValue":"395^Tree Nut-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          },
          {
               // "id":"392",
               "shortDescription":"Wheat-Free",
               // "longDescription":"Wheat-Free",
               // "searchValue":"392^Wheat-Free",
               "type":"allergy",
               // "localesAvailableIn":["en-US"]
          }
     ];

  	return data;

};

create = (cb) => {

  database.autoupdate(table_name, function(err){
      if (err) return cb(err);

      Allergy.create(get(), cb);
  });

};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};

function attach(allergies, recipes, cb){
     var arrayWithIds = idsOnly(allergies);
     recipes.forEach(function(recipe){
          recipe.updateAttribute(attribute, arrayWithIds);

     });
};


//
module.exports.init   = init;
module.exports.attach = attach;

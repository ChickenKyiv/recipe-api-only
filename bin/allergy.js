'use strict';

var Allergy =  server.models.AllergyModel;
var relation    = 'nutritions';

function getAllergy (){

     var allergy     = [
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

  	return allergy;

};

function createAllergies(cb){
     database.autoupdate('AllergyModel', function(err){
          if (err) return cb(err);

          Allergy.create(getAllergy(), cb);
     });
};

function attachAllergiesToRecipes(allergies, recipes, cb){
     var arrayWithIds = idsOnly(allergies);
     recipes.forEach(function(recipe){
          recipe.updateAttribute('allergies', arrayWithIds);

     });
};

function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};
module.exports.createAllergies = createAllergies;
module.exports.attachAllergiesToRecipes = attachAllergiesToRecipes;

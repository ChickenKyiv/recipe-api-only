'use strict';

let Nutritions
let database
let table_name = 'Nutritions'
let attribute  = 'nutritions';
// let relation   = 'nutritions';



const init = (server, cb) => {

  Nutritions  = server.models.Nutritions;
  database    = server.datasources.recipeDS;

  // add data to db
  create(cb);
}


const get = () => {

     var data     = [{
         type: "Vitamins",
         items: [
           "Vitamin A (retinol)"
           "Vitamin B1 (thiamin)"
           "Vitamin B2 (riboflavin)"
           "Vitamin B3 (niacin)"
           "Vitamin B5 (panthotenic acid)"
           "Vitamin B6 (pyridoxin)"
           "Vitamin B7 (biotin)"
           "Vitamin B9 (folic acid, folate)"
           "Vitamin B12 (cobalamin)"
           "Vitamin C (ascorbic acid)"
           "Vitamin E (tocopherol)"
           "Vitamin K (naphthoquinones)"
           "Choline (vitamin Bp) [1,2,3]"
         ]
       },
       {
         type: "Minerals",
         items: [
           "Calcium"
           "Chloride"
           "Chromium"
           "Copper"
           "Iodine"
           "Iron"
           "Magnesium"
           "Manganese"
           "Molybdenum"
           "Phosphorus"
           "Potassium"
           "Selenium"
           "Sodium"
           "Zinc"
         ]
       },
       {
         type: "Amino acids",
         items: [
           "Isoleucine"
           "Histidine"
           "Leucine"
           "Lysine"
           "Methionine"
           "Phenylalanine"
           "Tryptophan"
           "Threonine"
           "Valine"
         ]
       },
       {
         type:"Fatty acids"	,
         items: [
           "Alpha-linolenic acid (ALA)"
           "Linoleic acid"
         ]
       }
     ];

     return data;


};


const create = (cb) => {

  database.autoupdate(table_name, function(err){
      if (err) return cb(err);

      Nutritions.create(get(), cb);
  });

};



function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};


function attach(nutritions, recipes, cb){
     var arrayWithIds = idsOnly(nutritions);
     recipes.forEach(function(recipe){
          recipe.updateAttribute(attribute, arrayWithIds);

     });
};


//
module.exports.init   = init;
module.exports.attach = attach;

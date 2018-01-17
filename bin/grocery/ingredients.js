'use strict';

const debug   = require('debug');
// model
let Ingredient
let database
let table_name = 'Ingredient'

let attribute  = 'departmentId';
//let attribute  = 'ingredients';
// let relation = 'nutritions';
const init = ( server, raven, cb ) => {

  // console.log('-----');
  // console.log(server);
  Ingredient  = server.models.Ingredient;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);
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

    Ingredient.create(get(), cb);
  });

};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};

function attach(array, recipes, cb){
     var arrayWithIds = idsOnly(array);
     recipes.forEach(function(recipe){
          recipe.updateAttribute(attribute, arrayWithIds);

     });
};

// nt used cause GS updated their structure
function attachDepartmentsToIngredients(departments, ingredients){

	var first  = ingredients.slice(0, 2);
	var second = ingredients.slice(1, 3);
	// console.log(ingredients.splice(2, 4));
	// console.log(ingredients.splice(2, 2));


	var arrayWithIds = idsOnly(departments);

	// console.log(arrayWithIds[0]);
	// console.log(arrayWithIds[1]);
	// console.log(arrayWithIds[2]);
	
	first.forEach(function(ingredient){
		ingredient.updateAttribute(relation1, arrayWithIds[0]);
	});

	second.forEach(function(ingredient){
		ingredient.updateAttribute(relation1, arrayWithIds[1]);
	});



	// console.log(first);
	// console.log(second);

};
//@TODO replace with the latst veersion
//const attachDepartmentsToIngredients = (departments, ingredients, cb) => {
//  attach(departments, ingredients, cb);
//};

//const attachDepartmentsToIngredients = (departments, ingredients, cb) => {
//  attach(departments, ingredients, cb);
//};

//
module.exports.init   = init;
module.exports.attach = attach;

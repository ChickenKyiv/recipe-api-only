'use strict';

const debug   = require('debug');
const async   = require('async');
// model
let Grocery
let database
let table_name = 'Grocery'

let attributes  = [
  'departmentIds', // #0
  'groceryId',     // #1
  'ingredientIds', // #2
];

const init = ( options, cb ) => {

  // console.log('-----');
  // console.log(server);
  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  // let cb     = options[3];

  Grocery  = server.models.Grocery;
  database = server.datasources.recipeDS;

  // add data to db

  // let groceriest = await create(cb, raven);
  // // or
  // create((err,data) => {
  //   console.log(data);
  //   // cb()
  // }, raven);
  // let grocery
  // let response
  // try {
  //   var Grocery   = app.models.Grocery;
  //   // grocery = await Grocery.fetchById(groceryId);
  //   grocery  = await Grocery.findById(groceryId, Grocery.query1());
  //   response = Grocery.convertCollectionData(grocery);
  //    // console.log(response);
  //
  // } catch (e) {
  //   Raven.captureException(e);
  //   //this will eventually be handled by your error handling middleware
  //   next(e)
  // }

  let args = {
    model     : Grocery,
    table_name: table_name,
    database  : database,
    rows      : get(),
    data      : false
  }

  // add data to db
  helper.create(args, cb);


  // custom stuff, related only to grocery
  // will not work at this moment @TODO change that
  // attachDepartmentsToGrocery(options.departments, groceries, cb);
  // attachIngredientsToGrocery(options.ingredients, groceries, cb);

}

const get = () => {

    var data     = [
    	{
				name : "Ultimate Grocery List",
				img  : false,
				desc : false,
				slug : false //:todo do we need this fields?
			}
     ];

  	return data;

};



const relate = (results) => {

  attachDepartmentsToGrocery
attachIngredientsToGrocery

  // attachAllergiesToRecipes(results.allergies, results.recipes, function(err){
  //   console.log('>allergies create sucessfully');
  // });
  //
  // attachCoursesToRecipes(results.courses, results.recipes, function(err){
  //   console.log('>courses create sucessfully');
  // });
  //
  // attachCuisinesToRecipes(results.cuisines, results.recipes, function(err){
  //   console.log('>cuisines create sucessfully');
  // });
  //
  // attachDietsToRecipes(results.diets, results.recipes, function(err){
  //   console.log('>diets create sucessfully');
  // });
  //
  // attachHolidaysToRecipes(results.holidays, results.recipes, function(err){
  //   console.log('>models create sucessfully');
  // });


  //@TODO replace stuff like cb to a simple console or debug log that relation was successfully created

  const attachDepartmentsToGrocery = (departments, groceries, cb) => {
    attach(departments, groceries, attributes[0], cb);
  };

  const attachIngredientsToGrocery = (ingredients, groceries, cb) => {
    attach(ingredients, groceries, attributes[2], cb);
  };


};


//
module.exports.init   = init;

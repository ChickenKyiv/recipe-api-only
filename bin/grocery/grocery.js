'use strict';

const debug   = require('debug');
const async   = require('async');

let table_name = 'Grocery'

let attributes  = [
  'departmentIds', // #0
  'groceryId',     // #1
  'ingredientIds', // #2
];



  // custom stuff, related only to grocery
  // will not work at this moment @TODO change that
  // attachDepartmentsToGrocery(options.departments, groceries, cb);
  // attachIngredientsToGrocery(options.ingredients, groceries, cb);



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


const attachGroceryToUser = ()

const relate = async (options, results, helper) => {
// const relate = (results) => {

  // attachDepartmentsToGrocery(dep, gro)
  // attachIngredientsToGrocery(ing, gro)
  // attachGroceryToUser(gro, u)




  //@TODO replace stuff like cb to a simple console or debug log that relation was successfully created

  // const attachDepartmentsToGrocery = (departments, groceries) => {
  //   attach(departments, groceries, attributes[0]);
  // };
  //
  // const attachIngredientsToGrocery = (ingredients, groceries) => {
  //   attach(ingredients, groceries, attributes[2]);
  // };


};


//
module.exports.get   = get;
module.exports.table_name   = table_name;
module.exports.relate = relate;

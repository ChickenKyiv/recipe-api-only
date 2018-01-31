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




const relate = async (options, results, helper) => {

  let server
  let database
  let raven
  ( {server, database, raven} = options );



  if( !results || !results.groceries || !results.users ) {
    raven.captureException("cannot attach additional data to recipes");
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.groceries, results.users, attributes[1]);

};

module.exports.get        = get;
module.exports.table_name = table_name;
module.exports.relate     = relate;

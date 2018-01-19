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

// let relation = 'nutritions';
const init = ( options ) => {

  // console.log('-----');
  // console.log(server);
  server = options.server;
  cb     = options.cb;
  raven  = options.raven;

  Grocery  = server.models.Grocery;
  database = server.datasources.recipeDS;

  // add data to db
  let groceriest = await create(cb, raven);
  // or
  create((err,data) => {
    console.log(data);
    // cb()
  }, raven);


  // custom stuff, related only to grocery
  // will not work at this moment @TODO change that
  attachDepartmentsToGrocery(options.departments, groceries, cb);
  attachIngredientsToGrocery(options.ingredients, groceries, cb);

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

// const create = (cb, raven) => {
//
//   database.autoupdate(table_name, function(err){
//     if (err) {
//       Raven.captureException(err);
//       return cb(err);
//     }
//
//     Grocery.create(get(), cb);
//   });
//
// };



//@TODO use this version, it's very many huge fresh
function attach(array_ids, collection, attribute, cb){
     var arrayWithIds = idsOnly(array_ids);

     // if attribute is string then use it. if attribute is array with count 1 - use it
     // if attribute have more elements - we need to pick stuff.
     collection.forEach(function(item){
          item.updateAttribute(attribute, arrayWithIds);

     });
};

//@TODO replace stuff like cb to a simple console or debug log that relation was successfully created
const attachDepartmentsToGrocery = (departments, groceries, cb) => {
  attach(departments, groceries, attributes[0], cb);
};

const attachIngredientsToGrocery = (ingredients, groceries, cb) => {
  attach(ingredients, groceries, attributes[2], cb);
};

//
module.exports.init   = init;
module.exports.attach = attach;

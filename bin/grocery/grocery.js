'use strict';

const debug   = require('debug');
// model
let Grocery
let database
let table_name = 'Grocery'

let attributes  = [
  'departmentIds',
  'groceryId'
];

// let relation = 'nutritions';
const init = ( server, raven, cb ) => {

  // console.log('-----');
  // console.log(server);
  Grocery  = server.models.Grocery;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);
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

const create = (cb, raven) => {

  database.autoupdate(table_name, function(err){
    if (err) {
      Raven.captureException(err);
      return cb(err);
    }

    Grocery.create(get(), cb);
  });

};


function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};

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

//
module.exports.init   = init;
module.exports.attach = attach;

'use strict';

const debug   = require('debug');
// model
let Allergy
let database
let table_name = 'Allergy'
let attribute  = 'allergies';
// let relation = 'nutritions';
const init = ( options, cb ) => {
  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  // let cb     = options[3];

  Allergy  = server.models.Allergy;
  database = server.datasources.recipeDS;


  let args = {
    model     : Allergy,
    table_name: table_name,
    database  : database,
    rows      : get()
  }

  // add data to db
  helper.create(args, cb);
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

//
module.exports.init   = init;

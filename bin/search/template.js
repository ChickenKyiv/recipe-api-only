'use strict';

const debug   = require('debug');
// model
let Allergy
let database
let table_name = 'Allergy'
let attribute  = 'allergies';
// let relation = 'nutritions';
const init = ( options ) => {
  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  let cb     = options[3];
  
  Allergy  = server.models.Allergy;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);
  let args = {
    model     : Department,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  helper.create(args);
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

    // Allergy.create(get(), (err,re) => console.log(re));
    Allergy.create(get(), cb);
  });

};





//
module.exports.init   = init;

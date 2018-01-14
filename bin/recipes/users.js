'use strict';

const debug   = require('debug');
// model
let User
let Role
let RoleMapping
let database
let table_name = 'User'

// let attribute  = 'allergies';
// let relation = 'nutritions';
const init = ( server, raven, cb ) => {

  // console.log('-----');
  // console.log(server);
  User        = server.models.User;
  Role        = server.models.Role;
  RoleMapping = server.models.RoleMapping;
  database    = server.datasources.recipeDS;

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

    User.create(get(), cb);
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


//
module.exports.init   = init;
module.exports.attach = attach;

'use strict';

const debug   = require('debug');
// model
let Menu
let database
let table_name = 'Menu'
let attribute  = 'allergies';
// let relation = 'nutritions';

var x = new Date();
x.setDate(1);

var prev_month  = x.getMonth()-1;
var prev_month2 = x.getMonth()-2;
var prev_month3 = x.getMonth()-3;

const init = ( server, raven, cb ) => {

  // console.log('-----');
  // console.log(server);
  Menu  = server.models.Menu;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb, raven);

  // stuff related to menus only

}

const get = () => {

    var data     = [
      {
        title: "string",
        date: prev_month,
        description: "string",
        notes: "This is notes6",

      },
      {
        title: "string1",
        date: prev_month2,
        description: "string1",
        notes: "This is notes5",

      },
        {
        title:"string2",

        date: prev_month2,
        description:"string2",

        notes: "This is notes4",


      },
        {
        title:"string3",

        date: new Date(),
        description:"string3",

        notes: "This is notes3",


      },
        {
        title:"string4",

        date: prev_month3,
        description:"string4",

        notes: "This is notes2",


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


    Menu.create(get(), cb);
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

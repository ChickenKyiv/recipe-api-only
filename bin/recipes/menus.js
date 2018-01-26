'use strict';

const debug   = require('debug');

// let Menu
// let database
let table_name = 'Menu'

let attributes  = [
  'recipes'
];

// const init = ( options, cb ) => {
//
//   let server = options[0];
//   let helper = options[1];
//   let Raven  = options[2];
//
//   Menu     = server.models.Menu;
//   database = server.datasources.recipeDS;
//
//   // add data to db
//   let args = {
//     model     : Menu,
//     table_name: table_name,
//     database  : database,
//     rows      : get()
//   }
//   // add data to db
//   helper.create(args, cb);
//
// }

const get = () => {
  // var x = new Date();
  // x.setDate(1);
  //
  // var prev_month  = x.getMonth()-1;
  // var prev_month2 = x.getMonth()-2;
  // var prev_month3 = x.getMonth()-3;

    var data     = [
      {
        title: "Weekly menu #9",
        date: new Date(),
        description: "string",
        notes: "This is notes6",
      },
      {
        title: "Weekly menu #6",
        date: new Date(),
        description: "string1",
        notes: "This is notes5",
      },
        {
        title:"Weekly menu with extra cheese",
        date: new Date(),
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
        date: new Date(),
        description:"string4",
        notes: "This is notes2",
      }
     ];

  	return data;

};

//@TODO same function at other place are async and more advanced.
const relate = async (options, results, helper) => {

  let server
  let database
  let raven
  ( {server, database, raven} = options );



  if( !results || !results.recipes || !results.menus ) {
    raven.captureException("cannot attach additional data to recipes");
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.recipes,  results.menus, attributes[0]);




};

module.exports.get   = get;
module.exports.table_name   = table_name;
module.exports.relate = relate;

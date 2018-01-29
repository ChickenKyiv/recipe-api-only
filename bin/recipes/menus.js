'use strict';

const debug   = require('debug');

let table_name = 'Menu'

let attributes  = [
  'recipes', // #0
  'menuIds'    // #1
];



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
  // helper.attach( results.recipes,  results.menus, attributes[0]);

  // console.log(results.menus)
  // console.log(results.users)

  helper.attach( results.menus, results.users, attributes[1]);


};

module.exports.get   = get;
module.exports.table_name   = table_name;
module.exports.relate = relate;

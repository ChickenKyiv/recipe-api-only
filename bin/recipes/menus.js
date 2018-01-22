'use strict';

const debug   = require('debug');
// model
let Menu
let database
let table_name = 'Menu'

let attribute  = 'recipes';
// let relation = 'nutritions';

var x = new Date();
x.setDate(1);

var prev_month  = x.getMonth()-1;
var prev_month2 = x.getMonth()-2;
var prev_month3 = x.getMonth()-3;


const init = ( options, cb ) => {

  let server = options[0];
  let helper = options[1];
  let Raven  = options[2];
  // let cb     = options[3];

  Menu     = server.models.Menu;
  database = server.datasources.recipeDS;

  // add data to db
  let args = {
    model     : Menu,
    table_name: table_name,
    database  : database,
    data      : false
  }

  // add data to db
  helper.create(args);

  // stuff related to menus only
  // attachRecipesToMenu(recipes, menu);
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

const attachRecipesToMenu = (recipes, menu) => {
  helper.attach(recipes, menu, attribute);
}

//
module.exports.init   = init;

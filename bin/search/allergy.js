'use strict';

const debug   = require('debug');

let table_name = 'Allergy'


const get = () => {

    var data     = [
          {

               "name":"Gluten-Free",

               "type":"allergy",

          },
          {

               "name":"Peanut-Free",

               "type":"allergy",

          },
          {

               "name":"Seafood-Free",

               "type":"allergy",

          },
          {

               "name":"Sesame-Free",

               "type":"allergy",

          },
          {

               "name":"Soy-Free",

               "type":"allergy",

          },
          {

               "name":"Dairy-Free",

               "type":"allergy",

          },
          {

               "name":"Egg-Free",

               "type":"allergy",

          },
          {

               "name":"Sulfite-Free",

               "type":"allergy",

          },
          {

               "name":"Tree Nut-Free",

               "type":"allergy",

          },
          {

               "name":"Wheat-Free",

               "type":"allergy",

          }
     ];

  	return data;

};

module.exports.get   = get;
module.exports.table_name   = table_name;

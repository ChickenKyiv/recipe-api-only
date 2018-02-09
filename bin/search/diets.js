'use strict';

let table_name = 'Diet'

const get = () => {


     var diet        = [
     {
          "name": "Lacto vegetarian",
     },
     {
          "name": "Ovo vegetarian",
     },
     {
          "name": "Pescetarian",
     },
     {
          "name": "Vegan",
     },
     {
          "name": "Lacto-ovo vegetarian",
     },
     {
          "name": "Paleo",
     }
     ];

     return diet;

};

module.exports.get   = get;
module.exports.table_name   = table_name;

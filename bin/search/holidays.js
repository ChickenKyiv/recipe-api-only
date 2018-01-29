'use strict';


let table_name = 'Holiday'





const get = () => {

     var holidays    = [
     {

          "name":"Christmas",
          "type":"holiday",

     },
     {

          "name":"Thanksgiving",
          "type":"holiday",

     },
     {

          "name":"Summer",
          "type":"holiday",

     },
     {

          "name":"Fall",
          "type":"holiday",

     },
     {

          "name":"New Year",
          "type":"holiday",

     },
     {

          "name":"Game Day",
          "type":"holiday",

     },
     {

          "name":"Winter",
          "type":"holiday",

     },
     {

          "name":"Spring",
          "type":"holiday",

     },
     {

          "name":"Halloween",
          "type":"holiday",

     },
     {

          "name":"Valentine's Day",
          "type":"holiday",

     },
     {

          "name":"Hanukkah",
          "type":"holiday",

     },
     {

          "name":"Passover",
          "type":"holiday",

     },
     {

          "name":"Easter",
          "type":"holiday",

     },
     {

          "name":"St. Patrick's Day",
          "type":"holiday",

     },
     {

          "name":"Chinese New Year",
          "type":"holiday",

     },
     {

          "name":"4th of July",
          "type":"holiday",
        
     }
     ];


     return holidays;

};

module.exports.get   = get;
module.exports.table_name   = table_name;

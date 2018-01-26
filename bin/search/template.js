'use strict';

const debug   = require('debug');

let table_name = 'Allergy'


const get = () => {

    var data     = [
          {

               "name":"Gluten-Free",

               "type":"allergy",

          }
     ];

  	return data;

};

module.exports.get   = get;
module.exports.table_name   = table_name;

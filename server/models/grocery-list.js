'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

var options = {
          timestamps: { 
               createdAt: 'created_at',
               updatedAt: 'updated_at' 
          }

     };

var GrocerySchema = mongoose.Schema({

     title : String,
     img   : String,
     desc  : String,
     slug  : String,
         
  }, options );



var Grocerylist = mongoose.model('Grocerylist', GrocerySchema);

module.exports = Grocerylist;
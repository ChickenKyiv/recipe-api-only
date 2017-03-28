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

     categories : [category], // rename to propriate name of food categories
     img   : String,
     desc  : String,
     slug  : String,
         
  }, options );

{
     category_id: Number,
     name: String,
     items: []     
}

{
     id       : Number,
     name     : String,
     recipeId : [String],
     type     : String,
     units    : Number,
     done     : Bool,
     delete   : Bool    
}


var Grocerylist = mongoose.model('Grocerylist', GrocerySchema);

module.exports = Grocerylist;
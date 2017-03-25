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

var RecipeSchema = mongoose.Schema({

     title : String,
     img   : String,
     desc  : String,
     slug  : String,
         
  }, options );


var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
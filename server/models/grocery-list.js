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

Full grocery list
Grocery list category
Grocery list item


## Directives
## All
## Add
## Edit
## Purchased
## Purchase
## Price
## How much spend now
## Previous purchased items  + edit prev



POST [/grocerylist/department]    Departmentalize a list of strings -- used for ad-hoc grocery list item addition
DELETE [/grocerylist]             Delete all the items on a grocery list; faster operation than a sync with deleted items.
GET [/grocerylist]                Get the user's grocery list. User is determined by Basic Authentication.
POST [/grocerylist/recipe]        Add a Recipe to the grocery list. In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.
POST [/grocerylist/sync]          Synchronize the grocery list. Call this with a POST to /grocerylist/sync
POST [/grocerylist/item]          Add a single line item to the grocery list
DELETE [/grocerylist/item/{guid}] [/grocerylist/item/{guid}] DELETE will delete this item assuming you own it.
PUT [/grocerylist/item/{guid}]    Update a grocery item by GUID
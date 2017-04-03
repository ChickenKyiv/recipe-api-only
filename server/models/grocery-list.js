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

     departments : [Department], // rename to propriate name of food categories
     img   : String,
     desc  : String,
     slug  : String,
         
  }, options );

var Department = mongoose.Schema({

     id   : Number,
     name : String,
     items: [Ingredient] 
         
  }, options );


var Ingredient = mongoose.Schema({

     id       : Number,
     name     : String,
     recipeId : [String],
     type     : String,
     units    : Number,

     done     : Bool, //don't used in free-recipes
     delete   : Bool  //don't used in free-recipes
         
  }, options );




var Grocerylist = mongoose.model('Grocerylist', GrocerySchema);

module.exports = Grocerylist;

// get list of ingredients
// by department id or uncategorized
// params {recipe id, name, qty, ingredient id, weekday}
function list (){

}

// get list of departments
// not filtered or ordered - get it as is
// params { id, dep_name} 
function list (){

}




// get list of grocery list items
// long list with all ingredients
// v1 not combined by ingredient id.
// Ex. Monday - 1 cup of milk
//     Friday - 3 l of milk
// params {recipe id, name, qty, dep_id, ingredient id, weekday}
function list (){

}

// short version of grocery list
// when we got only departments ids
// params { id, dep_name} 
function short (){

}



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
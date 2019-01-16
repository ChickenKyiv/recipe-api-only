'use strict';


const path  = require('path');
const app   = require(path.resolve(__dirname, '../server/server'));
const User  = app.models.user;
const async = require('async');
const Raven = require('raven');
Raven.config('https://6c8ba2737aae4d81908677e4dba9be3f:26c83aa1a38a42cdbf0beea41a82cacf@sentry.io/231031').install();
// :todo this is a partly copied functionality from other midleware funciton.
// this is a duplicated code, and we need to change that.
// in order to not renaming a few functions we did this.

// :todo loopback provide an ability to incapsulate
module.exports = async function(id, next){

  var response   = {};

  let grocery
  try {      
     var Grocery   = app.models.Grocery;
     
     // :todo this is not an awesome method. we're getting to much data by this query
     grocery  = await Grocery.findById(id, Grocery.query1());
     // console.log(grocery);
     // :todo this is not a best way to catch only departments name(main goal)
     // we can create another method, where we wouldn't have arraysfor ingredients and other stuff
     response = Grocery.convertCollectionData(grocery);
     // console.log(response);

  } catch (e) {
     Raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e) 
  }

  return response;

};
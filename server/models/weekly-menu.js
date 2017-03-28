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

var MenuSchema = mongoose.Schema({

     title   : String,
     date    : Date,
     desc    : String,
     recipes : [Recipe], // wouldn't work 'cause we don't finish it
         
  }, options );



var Weeklymenu = mongoose.model('Weeklymenu', MenuSchema);

module.exports = Weeklymenu;


//get recipes
module.exports.getMenus = function (callback, limit) {


Weeklymenu.find(callback).limit(limit);
  

    
}

//get recipe by ID
module.exports.getMenuById = function (id, callback) {

Weeklymenu.findById(id, callback);
}

enable/disable recipe from weekly menu - вначале пойдет и простос сабмит формы с 


allowedIngredient
excludedIngredient
allowedAllergy
allowedDiet
allowedCuisine
excludedCuisine
allowedCourse
excludedCourse
allowedHoliday
excludedHoliday




/mealdone/:id
/add
/delete
/list возвращает айдишники рецептов


favorite
/add
/:id
/delete
/list возвращает айдишники рецептов

weekly menu
 /recipe/edit
 /recipe/delete
 /recipe/add
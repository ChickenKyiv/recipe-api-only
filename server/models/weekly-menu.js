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

//disable recipe from clients menu
//not working, not tested
module.exports.removeRecipeFromMenu = function (id, recipe_id, callback) {



Weeklymenu.findById(id);
// Weeklymenu.findById(id, callback);
//note: we can grab short version of weeklymenu collection. and short version of recipes data inside at menu.
// we need weeklymenu id, maybe publish date and array with 

//note2: add ability to have one recipe into different weekdays. Ex. Monday - Pork with fresh salad(#400), Friday - Prok with fresh salad(#400)
// so maybe we'll need to pass not only recipe_id but also weekday date or key.

var list = Weeklymenu.getRecipesList();
Weeklymenu.removeRecipeById(recipe_id); //don't have this method
Weeklymenu.save(callback);
}

//not working not tested
module.exports.addRecipeToMenu = function (){
//similar to removeRecipeFromMenu but in reverse.

Weeklymenu.findById(id);
// Weeklymenu.findById(id, callback);
//note: we can grab short version of weeklymenu collection. and short version of recipes data inside at menu.
// we need weeklymenu id, maybe publish date and array with 

//note2: add ability to have one recipe into different weekdays. Ex. Monday - Pork with fresh salad(#400), Friday - Prok with fresh salad(#400)
// so maybe we'll need to pass not only recipe_id but also weekday date or key.

var list = Weeklymenu.getRecipesList();
Weeklymenu.addRecipeById(recipe_id); //don't have this method
Weeklymenu.save(callback);
}

// enable/disable recipe from weekly menu - вначале пойдет и простос сабмит формы с 
// on this method we can filter recipes by different options.
// main goal - prevent showing recipe with not allowed data
// later we can make it more friendly to end user. but right now it can be just hard delete so sometimes user will see weekdays without any recipe inside it.
module.exports.filter = function(){
// allowedIngredient
// excludedIngredient
// allowedAllergy
// allowedDiet
// allowedCuisine
// excludedCuisine
// allowedCourse
// excludedCourse
// allowedHoliday
// excludedHoliday

}

module.exports.done = function(id, recipe_id, callback){
Weeklymenu.findById(id);
weeklymenu.mealDoneRecipeById(recipe_id);
}



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


 add methods, similar to getMenus getMenuById but for outside recipe database.

 we must enable tokens, so firstly user(chief) pass their token, we approve it and then app user can grab menus and recipes too from outside database. 

i think for this kind of functionality we'll need to use soket.io connections
how it will work? app connects via socket after getting token we understand from what place we need to get recipes.
when app make a request - we send similar request to outside database.
When we get a response(data) - in appropriate way - we send it to customer app.


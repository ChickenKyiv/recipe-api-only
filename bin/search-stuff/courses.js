'use strict';

// model
let Course
let database
let table_name = 'Course'
let attribute  = 'courses';
// let relation = 'nutritions';



const init = (server, cb) => {

  Course  = server.models.Course;
  database = server.datasources.recipeDS;

  // add data to db
  create(cb);
}

const get = () => {

     var courses     = [
     {
          // "id":"course-Main Dishes",
          "name":"Main Dishes",
          "type":"course",
          // "description":"Main Dishes",
          // "searchValue":"course^course-Main Dishes",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Desserts",
          "name":"Desserts",
          "type":"course",
          // "description":"Desserts",
          // "searchValue":"course^course-Desserts",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Side Dishes",
          "name":"Side Dishes",
          "type":"course",
          // "description":"Side Dishes",
          // "searchValue":"course^course-Side Dishes",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Appetizers",
          "name":"Appetizers",
          "type":"course",
          // "description":"Appetizers",
          // "searchValue":"course^course-Appetizers",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Salads",
          "name":"Salads",
          "type":"course",
          // "description":"Salads",
          // "searchValue":"course^course-Salads",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Breakfast and Brunch",
          "name":"Breakfast and Brunch",
          "type":"course",
          // "description":"Breakfast and Brunch",
          // "searchValue":"course^course-Breakfast and Brunch",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Breads",
          "name":"Breads",
          "type":"course",
          // "description":"Breads",
          // "searchValue":"course^course-Breads",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Soups",
          "name":"Soups",
          "type":"course",
          // "description":"Soups",
          // "searchValue":"course^course-Soups",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Beverages",
          "name":"Beverages",
          "type":"course",
          // "description":"Beverages",
          // "searchValue":"course^course-Beverages",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Condiments and Sauces",
          "name":"Condiments and Sauces",
          "type":"course",
          // "description":"Condiments and Sauces",
          // "searchValue":"course^course-Condiments and Sauces",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Cocktails",
          "name":"Cocktails",
          "type":"course",
          // "description":"Cocktails",
          // "searchValue":"course^course-Cocktails",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Snacks",
          "name":"Snacks",
          "type":"course",
          // "description":"Snacks",
          // "searchValue":"course^course-Snacks",
          // "localesAvailableIn":["en-US"]
     },
     {
          // "id":"course-Lunch",
          "name":"Lunch",
          "type":"course",
          // "description":"Lunch",
          // "searchValue":"course^course-Lunch",
          // "localesAvailableIn":["en-US"]
     }
     ];

     return courses;


};

const create = (cb) => {
     database.autoupdate(table_name, function(err){
          if (err) return cb(err);

          Course.create(get(), cb);
     });
};


function attach(courses, recipes, cb){
     var arrayWithIds = idsOnly(courses);
     recipes.forEach(function(recipe){
          recipe.updateAttribute(attribute, arrayWithIds);

     });
};

function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};

//
module.exports.init   = init;
module.exports.attach = attach;

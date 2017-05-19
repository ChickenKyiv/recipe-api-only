'use strict';

// middleware
var express = require('express');
var router  = express.Router();

// controllers
var controller = require('../controllers/recipe-controller');

//@TODO remove app from attributes
module.exports = function (app) {
  
};

/*  "/api/recipe"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
  router.get('/recipe/:id', function(req, res){   
    res.send('This is not implemented now');
  });



  //Not sure why it have.json. maybe we need to remove it. @TODO remove json

  var controller = require('recipe-controller');
  // var recipe = require('router-recipe');

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
  server.get('/api/recipe.json', recipe.list);

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
  server.post('/api/recipe.json', recipe.create);

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
  server.get('/api/recipe/:id.json', recipe.show);

/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
  server.put('/api/recipe/:id.json', recipe.update);

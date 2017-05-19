'use strict';

// middleware
var express = require('express');
var router  = express.Router();

// controllers
var controller = require('../controllers/ingredients-controller');





  //Ingredients controller
  var controller = require('ingredients-controller');

  server.get('/api/ingredients/', controller.list);  
  server.get('/api/ingredients/:id', controller.show); 

  server.get('/api/recipe/:recipe_id/ingredients/', controller.list_recipe); 
  server.get('/api/recipe/:recipe_id/ingredients/:ingredient_id', controller.show_from_recipe);  



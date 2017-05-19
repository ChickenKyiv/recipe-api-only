'use strict';

// middleware
var express = require('express');
var router  = express.Router();

// controllers
var controller = require('../controllers/ingredients-controller');


router.get('/test/', function(req, res){
	res.send('This is not implemented now');
});


/*  "/api/menu"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
router.get('/api/ingredients/', controller.list);  
router.get('/api/ingredients/:id', controller.show); 

router.get('/api/recipe/:recipe_id/ingredients/', controller.list_recipe); 
router.get('/api/recipe/:recipe_id/ingredients/:ingredient_id', controller.show_from_recipe);  



module.exports = router;
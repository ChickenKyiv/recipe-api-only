'use strict';

// middleware
var express = require('express');
var router  = express.Router();

// controllers
var controller = require('../controllers/grocery-controller');

//@TODO remove app from attributes
module.exports = function (app) {
  
};
/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
router.get('/grocery/:id', function(req, res){
	res.send('This is not implemented now');
});
	


module.exports = router;
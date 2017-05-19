'use strict';

// middleware
var express = require('express');
var router  = express.Router();

// controllers
var controller = require('../controllers/menu-controller');


/*  "/api/menu"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
router.get('/menu/:id', function(req, res){
	res.send('This is not implemented now');
});




module.exports = router;

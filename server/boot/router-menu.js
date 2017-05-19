var express = require('express');
var router  = express.Router();

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

// define the home page route
// router.get('/', function(req, res) {
//   res.send('Birds home page');
// });

// define the about route
// router.get('/about', function(req, res) {
//   res.send('About birds');
// });


/*  "/api/menu"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
router.get('/menu/:id', function(req, res){
	res.send('This is not implemented now');
});




module.exports = router;

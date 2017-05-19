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


/*  "/api/grocery"
 *    GET: finds all recipe
 *    POST: creates a new recipe @todo finish this
 */
router.get('/grocery/:id', function(req, res){
	res.send('This is not implemented now');
});
	


module.exports = router;
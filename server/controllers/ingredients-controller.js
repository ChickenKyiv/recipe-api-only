// var models     = require('../models');
var Ingredient = require('../models/ingredient') //models.Ingredient;
var Recipe     = models.Recipe;



/*
 * GET Ingredient listing.
 */
exports.list = function(req, res) {

  Ingredient.find({}, function(err, recipes) {

    res.json(200, recipes);
  });

};

/*
 * GET a particular Ingredient.
 */ 
exports.show = function(req, res) {

  const id = req.params._id;
  Ingredient.find({_id: id}, function(err, recipes) {

    if(err) res.json(404, { status: 404, message: "Ingredient not found." });

    res.json(200, recipes[0]);
  });

};


/*
 * GET Ingredients listing.
 */
exports.list_recipe = function(req, res) {

  const id = req.params._id;
  Recipe.ingredientsList( id, function(err, ingredients){
//@todo add this method
  	if (err) { throw err; }
    res.json(200, ingredients);
  });

};

/*
 * GET a particular Ingredient from recipe.
 */ 
exports.show_from_recipe = function(req, res) {

  const id = req.params._id;
  Recipe.ingredientOne( id, function(err, ingredient){
//@todo add this method
  	if(err) res.json(404, { status: 404, message: "Ingredient not found." });
  	res.json(200, ingredient);
  });

};
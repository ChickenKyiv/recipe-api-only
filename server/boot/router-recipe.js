var models     = require('../models');
var Recipe     = models.Recipe;

// Maybe this is controller? @todo finish this

/*
 * GET recipe listing.
 */
exports.list = function(req, res) {

  Recipe.find({}, function(err, recipes) {

    res.json(200, recipes);
  });

};

/*
 * GET a particular recipe.
 */ 
exports.show = function(req, res) {
	
 const id = req.params._id;
  Recipe.find({_id: id}, function(err, recipes) {

    if(err) res.json(404, { status: 404, message: "Recipe not found." });

    res.json(200, recipes[0]);
  });

};

/*
 * Create a new recipe.
 */
exports.create = function(req, res) {

  var json   = JSON.parse(req.body.recipe),
      recipe = new Recipe(json);

  recipe.save(function(err) {

    if(err) req.json(500, { status: 500, message: "Could not save recipe." });

    res.json(200, { status: 200, message: "Recipe successfully saved.", recipe: recipe });
  });

};

/*
 * Updates an existing meal.
 */
exports.update = function(req, res) {

  var json = req.body;
  delete json._id;
  const id = req.params._id;

  Recipe.update({_id: id}, json, { multi: true }, function(err, numAffected) {

    if(err || numAffected === 0) res.json(500, { status: 500, message: "Could not update recipe. No recipe with that ID exists." });

    res.json(200, { status: 200, message: "Recipe successfully updated." });
  });

};
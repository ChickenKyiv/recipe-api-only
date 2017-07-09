'use strict';

var Ingredient  = server.models.Ingredient;
var relation    = 'ingredients';

function getIngredients(){

	var ingredients = [
	{ 
		name: "black pepper",

		type: "simple",
		units: "1 teaspoon",
		done: "0",
		delete: "0", 


	},
	{ 
      name: "extra-virgin olive oil",

      type: "complex",
      units: "17 tablespoons + 0.25 cup",
      done: "0",
      delete: "0", 
    
  	},
  	{ 
      
      name: "kosher salt",

      type: "simple",
      units: "1 teaspoon",
      done: "0",
      delete: "0", 
	},
	{ 
      
      name: "kosher salt and freshly ground black",

      type: "simple",
      units: "5 teaspoons",
      done: "0",
      delete: "0", 

	}
	];


	return ingredients;
};


function attachIngredientsToRecipes(ingredients, recipes){

  var first  = ingredients.slice(0, 2);
  var second = ingredients.slice(1, 3);
  console.log(first)  ;
  console.log(second) ;

  var one = idsOnly(first);
  var two = idsOnly(second);

  recipes[0].updateAttribute(relation, one);

  recipes[1].updateAttribute(relation, two);

  console.log(recipes);


  // // only first 10 elements attach
  // var first10  = arrayWithIds.slice(0, 10);
  // var second10 = arrayWithIds.slice(11, 21);

  // recipes.forEach(function(recipe, index){

  //  if (index % 2 === 0){
  //    recipe.updateAttribute('ingredients', first10);
  //  } else {
  //    recipe.updateAttribute('ingredients', second10);
  //  }

  //  // recipe.updateAttribute('ingredients', arrayWithIds);
    
  // });
};


function idsOnly(array){

  var result = Object.keys(array).map(function(e) {
    return array[e].id;
    });

  return result;    

};

function createIngredients(cb){
  database.automigrate('Ingredient', function(err){
    if (err) return cb(err);

    Ingredient.create(getIngredients(), cb);
  });
};

module.exports.attachIngredientsToRecipes = attachIngredientsToRecipes;
module.exports.createIngredients = createIngredients;


var Ingredient  = server.models.Ingredient;
var relation    = 'ingredients';
var relation2   = 'ingredientIds';



//   //  // recipe.updateAttribute('ingredients', arrayWithIds);



    Ingredient.create(getIngredients( departments ), cb);


function attachIngredientsToGroceries(ingredients, groceries){
 var arrayWithIds = idsOnly(ingredients);

 groceries.forEach(function(grocery){
     grocery.updateAttribute(relation2, arrayWithIds);

 });

};

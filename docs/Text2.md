Weekly menus - recipes - remove recipe - change servings - changes at GL

Main Weekly Menu(created and stored by chief)
Cloned to user section if user want to add some changes
When user remove recipe, change servings, rearrange recipes order, replace recipe to another - Menu copied to user collection and weekly menu id updated from Main WM to Cloned WM



recipe
/edit
/delete
/add
/is complex
/recipeIdByWeekday
/nutrition
/change image

/:id
/directions

/directions/complex

/ingredients
/ingredients/categorized


/meta
prep
cook
serving


/mealdone/:id
/add
/delete
/list возвращает айдишники рецептов


favorite
/add
/:id
/delete
/list возвращает айдишники рецептов

weekly menu
 /recipe/edit
 /recipe/delete
 /recipe/add



getRecipe - просто массив с одним рецептом
getDirections
getIngredients
getCategorizedIngredients

Meta:
prep
cook
serving
mealDone
favorites
getMeta


isComplexRecipe - это
getRecipeId by weekday



MealDone:
/add
/remove
/all - возвращает айдишники рецептов

/current week - возвращает айдишники

/previous week - возвращает айдишники

all weeks - возвращает айдишники


get recipes per week


menu/ingredients/categories/yes
menu/ingredients/categories/no - or menu/ingredients/

menu/ingredients/category/all - get all ingredients from weeklymenu, separated by categories
menu/ingredients/category/id - get list of ingredients from one category (Note: without callculation

menu/ingredients/category/id/compress - get list of ingredients from one category calculated

GL / ing / cat / id / - get list of ingredients from one category with statuses 'purchased', 'to buy'

menu/ingredients/category/all/raw


--------------------------


--------------
free menu

weekly menu wtih simple recipes

complex recipe

search

recipe management

----------------

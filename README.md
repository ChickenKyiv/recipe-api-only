# README #




## Table of Contents

* [Updating to New Releases](#updating-to-new-releases)
* [Release 2 -  Authentication](#)

## Updating to New Releases


## Release 2 -  Authentication


[![Join the chat at https://gitter.im/recipe-api-questions/Lobby](https://badges.gitter.im/recipe-api-questions/Lobby.svg)](https://gitter.im/recipe-api-questions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Note: Upload images are not supported right now. If you want to display images, you must upload them to storage, copy public url and save it on database.
Use this reference for adding such a functionality: https://github.com/optis/loopback-rest-api#storage


### What is this repository for? ###

* Quick summary
Note: **This repository is going through heavy development currently and should not be used in production unless you know what you are doing**

Note: **Working only with unstable node version - 9.4.0 - be careful**

* Version 1.0.3-beta



Great Loopback REST API tutorial: https://github.com/optis/loopback-rest-api

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact


### How do I get set up? ###
Check GettingStarted.md file
[Check GettingStarted.md file](https://github.com/atherdon/recipe-api-only/blob/master/GETTINGSTARTED.md)



## Getting Started

[Live Recipe API server](https://recipe-api-loopback.herokuapp.com/)

See [GETTINGSTARTED.md](GETTINGSTARTED.md) to get started.

## Endpoints for Free Menu Release

See [Free Menu Release Routes with Samples](FreeMenu.md) to get started.

## Endpoints for Search Release

See [Search filters.md](SEARCH.md) to get started.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.



@TODO change recipe title field to name field and test it at whole project
@TODO this is not finished. Just steal from other place
## API endpoints
--------------------------------------------------------------



### Meals
#### Create a Meal
Method: POST
Path: /api/meal/
Input: JSON with properties userId and recipeId


#### Delete a Meal
Method: DELETE
Path: /api/meal/"mealId"
Input: mealId through the url


#### Eat a Meal / change it to past Meals
Method: PUT
Path: /api/meal/"mealId"
Input: mealId through the url

#### Update haveIngridients of Meal
Method: PUT
Path: /api/meal/
Input: JSON with property haveIngridient
Response: 200 and updated meal object

--------------------------------------------------------------

### User
#### Get User data with data of Meals
Method: GET
Path: /api/user/"userId"
Input: userId through the url
Response: 200 and user Object

#### Register User
Method: POST
Path: /api/user/
Input: JSON with property username and password
Response: 200 and Object with token, username and userId

#### Login User
Method: POST
Path: /api/user/authenticate
Input: JSON with property username and password
Response: 200 and Object with properties token, username and userId

--------------------------------------------------------------

### Recipes
#### Get all recipes
Method: GET
Path: /api/recipe/
Input: nothing
Response: 200 and array of all recipes in our database

#### Get recipes that match a certain query (search)
Method: GET
Path: /api/recipe/"query"
Input: query string for a certain dish
Response: 200 and array of all recipes for the query

#### Add a recipe
Method: POST
Path: /api/recipe/
Input: nothing
Response: 200 and the created recipe object



Sections
* Calendar
* Weekly​ ​menu
* Auth
* Recipe
* Grocery​ list
* Expenses
* Nutrition
* Food​ ​tracking​ ​or ​Food​​ logging
* Search
* Recipe
* Tips

##Calendar
##Weekly​​ menu
##Auth
##Recipe
##Grocery​ ​list
##Expenses
##Nutrition
##Food​ ​ tracking​ ​ or​ ​ Food​ ​ logging
##Search
##Recipe
##Tips

Other​ ​ api​ ​ connection
## FB​ login
## Push​​ or​​ other​​ Notifications
## Emails

---
FLOW.md
Weekly menus - recipes - remove recipe - change servings - changes at GL

Main Weekly Menu(created and stored by chief)
Cloned to user section if user want to add some changes
When user remove recipe, change servings, rearrange recipes order, replace recipe to another - Menu copied to user collection and weekly menu id updated from Main WM to Cloned WM

GL
* add
* created from Main Menu(nothing was changed)
* created from User Menu (GL not saved to db in this case)
* if user want to add some products to GL - we create GL related to User Menu for this week
* when user check ingredient(we assume he buy it) - this ingredient moved to Purchased. Purchased must have this information: qty / Date / notes/ place where it was buyed.


create functionality when user uncheck ingredient from GL - so we need to remove it from Purchased list too.

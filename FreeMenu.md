
# Free Menu Release #

### Basic structure
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/img.jpg)


## API endpoints ( Free Menu Release )
--------------------------------------------------------------

### Menu
#### List of all created menus(with recipe Ids)
Method: GET
Path: /api/menu/
Input: JSON with properties ... @TODO finish it
GET http://localhost:3000/api/menu?access_token=%token%

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer1.png)
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer2.png)
---

#### Get menu by menu id
Method: GET
Path: /api/menu/{menu_id}
Input: JSON with properties ...
GET http://localhost:3000/api/menu/593ac56c2c941720bc3091b1?access_token=%token%

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer3.png)
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer4.png)
---

#### Get latest published menu(only one)
Method: GET
Path: /api/menu/last
Input: JSON with properties ...
GET http://localhost:3000/api/menu/last?access_token=%token%

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer9.png)
---

#### Filter By Published Date: ASC/DESC
Method: GET
Path: /menu/filter/date
Input: JSON with properties ...
---

#### Get Menu with all data inside
Method: GET
Path: /menu/full
Input: JSON with properties ...
---

### Recipes
#### List with all created recipes
Method: GET
Path: /api/recipe/
Input: JSON with properties ...
GET http://localhost:3000/api/recipe?access_token=%token%

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer5.png)
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer6.png)
---

#### Get recipe by recipe id
Method: GET
Path: /api/recipe/{id}
Input: JSON with properties ...
GET http://localhost:3000/api/recipe/593abe383199170e50a5272d?access_token=%token%


![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer7.png)
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer8.png)
---

#### Get recipe with all necessary data like ingredients. @TODO Later add stuff like allergies, etc.
Method: GET
Path: /api/recipe/{id}/full
Input: JSON with properties ...
GET recipe/:id/full
---
#### Get Ingredients By Recipe id
Method: GET
Path: recipe/{id}/list/ingredients
Input: JSON with properties ...

http://localhost:3000/api/recipe/{id}/list/ingredients?recipeId=594d3b97fef8430a3c5eff8d&access_token=y2GcakK5pffy5LSueSdEQ8i40bkoSQixgZKMwImlyEsMLCrbk4ktjoV0OuxmnWNF
---

#### Recipes_Find not sure if i test this URL before
Method: GET
Path: /api/recipes/recipes_find
Input: JSON with properties ...
http://localhost:3000/explorer/#!/recipes/recipes_find
---


#### Get ingredients and display them in list view with directions and link to recipy by recipeId
Method: GET
Path: /api/grocery/menu?groceryId={groceryId}
Input: JSON with properties ...
GET http://localhost:3000/api/grocery/menu?groceryId=594d45227741a0312874c465&access_token=%token%
---


#### Get Grocery List by Menu id
Method: GET
Path: grocery/menu/{id}
Input: JSON with properties ...
---

## User
#### Generate Login token
Method: POST
Path: /api/customer/customer_login
Input: JSON with properties ...
http://localhost:3000/explorer/#!/customer/customer_login will return a token

---

Worked URLs

GET https://recipe-api-loopback.herokuapp.com/api/menu?access_token=%token%
Get list with all created menus(with recipe Ids)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer1.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer2.png)

GET https://recipe-api-loopback.herokuapp.com/api/menu/593ac56c2c941720bc3091b1?access_token=%token%
Get one menu by Id

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer3.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer4.png)


GET https://recipe-api-loopback.herokuapp.com/api/menu/last?access_token=%token%
Get only one latest published menu
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer9.png)

GET https://recipe-api-loopback.herokuapp.com/api/recipe?access_token=%token%
Get list with all created recipes

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer5.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer6.png)

GET https://recipe-api-loopback.herokuapp.com/api/recipe/593abe383199170e50a5272d?access_token=%token%
Get one recipe by Id

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer7.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer8.png)

GET https://recipe-api-loopback.herokuapp.com/api/recipe/:id/full
Get recipe with all necessary data like ingredients.
GET https://recipe-api-loopback.herokuapp.com/api/grocery/menu?groceryId=594d45227741a0312874c465&access_token=%token%
Get ingredients and display them in list view with directions and link to recipy by recipeId

GET https://recipe-api-loopback.herokuapp.com/api/menu/filter/date
Filter By Published Date: ASC/DESC



GET https://recipe-api-loopback.herokuapp.com/api/menu/full


grocery/menu/:id
recipe/:id/list/ingredients
https://recipe-api-loopback.herokuapp.com/api/recipe/{id}/list/ingredients?recipeId=594d3b97fef8430a3c5eff8d&access_token=y2GcakK5pffy5LSueSdEQ8i40bkoSQixgZKMwImlyEsMLCrbk4ktjoV0OuxmnWNF


https://recipe-api-loopback.herokuapp.com/explorer/#!/recipes/recipes_find

https://recipe-api-loopback.herokuapp.com/api/recipe

https://recipe-api-loopback.herokuapp.com/api/menu

https://recipe-api-loopback.herokuapp.com/explorer/#!/customer/customer_login will return a token



# Free Menu Release #

### Basic structure
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/img.jpg)

GET http://localhost:3000/api/menu?access_token=%token%
Get list with all created menus(with recipe Ids)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer1.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer2.png)

GET http://localhost:3000/api/menu/593ac56c2c941720bc3091b1?access_token=%token%
Get one menu by Id

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer3.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer4.png)


GET http://localhost:3000/api/menu/last?access_token=%token%
Get only one latest published menu
![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer9.png)

GET http://localhost:3000/api/recipe?access_token=%token%
Get list with all created recipes

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer5.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer6.png)

GET http://localhost:3000/api/recipe/593abe383199170e50a5272d?access_token=%token%
Get one recipe by Id

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer7.png)

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/docs/LoopBack%20API%20Explorer8.png)

GET recipe/:id/full
Get recipe with all necessary data like ingredients. @TODO Later add stuff like allergies, etc.

GET http://localhost:3000/api/grocery/menu?groceryId=594d45227741a0312874c465&access_token=%token%
Get ingredients and display them in list view with directions and link to recipy by recipeId

GET /menu/filter/date
Filter By Published Date: ASC/DESC



GET /menu/full


grocery/menu/:id
recipe/:id/list/ingredients
http://localhost:3000/api/recipe/{id}/list/ingredients?recipeId=594d3b97fef8430a3c5eff8d&access_token=y2GcakK5pffy5LSueSdEQ8i40bkoSQixgZKMwImlyEsMLCrbk4ktjoV0OuxmnWNF

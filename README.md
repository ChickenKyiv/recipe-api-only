README.md

Great Loopback REST API tutorial: https://github.com/optis/loopback-rest-api

Note: **This repository is going through heavy development currently and should not be used in production unless you know what you are doing**

Links, that's important for me:

http://localhost:3000/explorer/#!/recipes/recipes_find

http://localhost:3000/api/recipe
http://localhost:3000/api/menu

http://localhost:3000/explorer/#!/customer/customer_login will return a token

For sending email notifications - we'll use MailGun

Our free key : key-4e236ace7f85293ec5eb2b37d6d9fa39
Free domain : sandbox31d3370622eb42a597ccb3fa1fd0adbf.mailgun.org

http://localhost:3000/api/ingredient?filter[where][name][like]=kosher

@TODO fill Readme with other urls, that what we'll need for Free and Menu Milestone

Note: Upload images are not supported right now. If you want to display images, you must upload them to storage, copy public url and save it on database.
Use this reference for adding such a functionality: https://github.com/optis/loopback-rest-api#storage


https://recipe-api-loopback.herokuapp.com/


Free Menu
GET ONLY right now
recipe/id/ingredients
grocery/id/departments
menu/id/grocery
departments/id/ingredients
users/id/menu/id

Menu filter by date ASC/DESC

@TODO Search 

![alt text](https://github.com/atherdon/recipe-api-only/blob/master/img.jpg)


Free Menu Release:

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





[![Join the chat at https://gitter.im/recipe-api-questions/Lobby](https://badges.gitter.im/recipe-api-questions/Lobby.svg)](https://gitter.im/recipe-api-questions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
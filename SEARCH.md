# API endpoints Search Form Release
not finished. for more data check https://github.com/atherdon/recipe-search-api


###### Ingredients search

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |

> Method: GET
> Path: /api/ingredient?filter[where][name]
> Input: JSON with properties ...
http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  **working**  
http://localhost:3000/api/ingredient?filter[where][name][inq]=chicken&filter[where][name][inq]=pasta&&access_token=%token
%  **working**  
http://localhost:3000/api/ingredient?filter[where][name][nin]=chicken&filter[where][name][nin]=pasta&filter[limit]=10&access_token=%token%  **working**  



#### Cousine search by id

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/cousine?filter[where][id]=cousineId
Input: JSON with properties ...
http://localhost:3000/api/cousine?filter[where][id]=cousineId  **not working**  
http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][inq]=cousineId  **not working**  
http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][nin]=cousineId  **not working**  



#### Courses search

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/course?filter[where][id]=courseId
Input: JSON with properties ...
http://localhost:3000/api/course?filter[where][id]=courseId  **working**
http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][inq]=courseId  **working**  
http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][nin]=courseId  **working**

http://localhost:3000/api/course?filter[where][name]=Appetizers&access_token=%token% **working**  


#### Holidays search

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/holiday?filter[where][id]=holidayId
Input: JSON with properties ...
http://localhost:3000/api/holiday?filter[where][id]=holidayId  **working**  
http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][inq]=holidayId  **working**  
http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][nin]=holidayId  


#### Allergies search

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/allergy?filter[where][id]=allergyId
Input: JSON with properties ...
http://localhost:3000/api/allergy?filter[where][id]=allergyId  
http://localhost:3000/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][inq]=allergyId  
http://localhost:3000/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][nin]=allergyId  


#### Diets search
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/diet?filter[where][id]=dietId
Input: JSON with properties ...
http://localhost:3000/api/diet?filter[where][id]=dietId  **working**  
http://localhost:3000/api/diet?filter[where][id][inq]=dietId&filter[where][id][inq]=dietId    **working**  
http://localhost:3000/api/diet?filter[where][id][inq]=dietId&filter[where][id][nin]=dietId  



#### Cooking Time (lt XX:XX) Less than
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/recipe?filter[where][cook_time][lt]={time}  
Input: JSON with properties ...
http://localhost:3000/api/recipe?filter[where][cook_time][lt]=5m  


**not finished**
#### Date(related to weekly menus)
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/menu/
Input: JSON with properties ...
date:{ gt: Date.Now() - ONE_WEEK }
http://localhost:3000/api/  


## Recipe

#### Recipe Name (Like or iLike) Included or Excluded
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/recipe?filter[like][title]
Input: JSON with properties ...
http://localhost:3000/api/recipe?filter[like][title]=%Pork%  **not working**    
http://localhost:3000/api/recipe?filter[ilike][title]=%Pork%  **not working**    

i propose to add example at REST link on https://loopback.io/doc/en/lb3/Where-filter.html#ilike-and-nilike  


### Long query
#### Create a Meal
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/recipe?filter[where]
Input: JSON with properties ...
http://localhost:3000/api/recipe?filter[where][and][0][title]=Pork  
&filter[where][and][1][ingredients][name]=chicken  
&filter[where][and][2][cousine][cousineId]=cousineId  
&filter[where][and][3][course][courseId]=courseId  
&filter[where][and][4][holiday][holidayId]=holidayId  
&filter[where][and][5][allergy][allergyId]=allergyId  
&filter[where][and][6][diet][dietId]=dietId  


#### Parts of long query
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
Method: GET
Path: /api/recipe?filter[where]
Input: JSON with properties ...
http://localhost:3000/api/recipe?filter[where][allergies][inq]=allergyId&filter[where][allergies][inq]=allergyId **working**  
http://localhost:3000/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId **working**  
http://localhost:3000/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId&filter[where][and][2][courses][inq]=courseId&filter[where][and][2][courses][inq]=courseId **working**  

http://localhost:3000/api/recipe?filter[where][and][0][holidays][inq]=holidayId&filter[where][and][1][holidays][inq]=holidayId&filter[where][and][2][diets][inq]=dietId&filter[where][and][2][diets][inq]=dietId **working**  


**Note** Works on current state of database(without working well relations)

@TODO add more samples where we search recipes by attributes


links to our testing environment
**Ingredients search **


http://recipe-api-loopback.herokuapp.com/api/ingredient?filter[where][name][like]=kosher

| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
**not working **
https://recipe-api-loopback.herokuapp.com/api/ingredients?filter[where][name]=chicken
**not working **   
https://recipe-api-loopback.herokuapp.com/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][inq]=pasta  
**not working **    
https://recipe-api-loopback.herokuapp.com/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][nin]=pasta  


**Cousines search**
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/cousine?filter[where][id]=cousineId  **not working **  
https://recipe-api-loopback.herokuapp.com/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][inq]=cousineId  **not working **  
https://recipe-api-loopback.herokuapp.com/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][nin]=cousineId  **not working **  

**Courses search**
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/course?filter[where][id]=courseId  **working **
https://recipe-api-loopback.herokuapp.com/api/course?filter[where][id][inq]=courseId&filter[where][id][inq]=courseId  **working **  
https://recipe-api-loopback.herokuapp.com/api/course?filter[where][id][inq]=courseId&filter[where][id][nin]=courseId  **working **

https://recipe-api-loopback.herokuapp.com/api/course?filter[where][name]=Appetizers&access_token=%token% **working **  

**Holidays search **
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/holiday?filter[where][id]=holidayId  **working **  
https://recipe-api-loopback.herokuapp.com/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][inq]=holidayId  **working **  
https://recipe-api-loopback.herokuapp.com/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][nin]=holidayId  

**Allergies search **
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/allergy?filter[where][id]=allergyId  
https://recipe-api-loopback.herokuapp.com/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][inq]=allergyId  
https://recipe-api-loopback.herokuapp.com/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][nin]=allergyId  

**Diets search **
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/diet?filter[where][id]=dietId  **working **  
https://recipe-api-loopback.herokuapp.com/api/diet?filter[where][id][inq]=dietId&filter[where][id][inq]=dietId    **working **  
https://recipe-api-loopback.herokuapp.com/api/diet?filter[where][id][inq]=dietId&filter[where][id][nin]=dietId  

**Cooking Time ** lt XX:XX
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][cook_time][lt]=5m  

**Date(related to weekly menus) **
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
date:{ gt: Date.Now() - ONE_WEEK }
https://recipe-api-loopback.herokuapp.com/api/  

### Recipe Name
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[like][name]=%Pork%  **not working **    
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[ilike][name]=%Pork%  **not working **    

propose to add example at REST link on https://loopback.io/doc/en/lb3/Where-filter.html#ilike-and-nilike  

### Long query
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][name]=Pork  
&filter[where][and][1][ingredients][name]=chicken  
&filter[where][and][2][cousine][cousineId]=cousineId  
&filter[where][and][3][course][courseId]=courseId  
&filter[where][and][4][holiday][holidayId]=holidayId  
&filter[where][and][5][allergy][allergyId]=allergyId  
&filter[where][and][6][diet][dietId]=dietId  


### Parts of long query
| First Header  | Second Header | Status |
| ------------- | ------------- |------------- |
| Method  | GET  |
| Pathl  | l  |
| Pathl  | l  |
| Pathl  | http://localhost:3000/api/ingredient?filter[where][name]=chicken&access_token=%token%  |
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][allergies][inq]=allergyId&filter[where][allergies][inq]=allergyId **working **  
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId **working **  
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId&filter[where][and][2][courses][inq]=courseId&filter[where][and][2][courses][inq]=courseId **working **  

https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][holidays][inq]=holidayId&filter[where][and][1][holidays][inq]=holidayId&filter[where][and][2][diets][inq]=dietId&filter[where][and][2][diets][inq]=dietId **working**  


What data can be used for search from imported script
We have x recipes
We have x allergies
We have x courses
We have x cuisines
We have x diets
We have x holidays
We have x nutritions
We have x menus
We have x nutritions  
We have x ingredients attached to recipes
We have x ingredients attached to departments and grocery

How to test
Simple queries
ingredients by name
this ingredients was not attached to recipes. But still have data stored.
```
Asparagus
Carrots
Celery
```

this ingredients attached to different recipes
```
scallions
apple
banana
beef roast
black pepper
```

```
attributes by name
Gluten-Free
Peanut-Free
Soy-Free
```

```
Main Dishes
Desserts
```
```
American
Asian
Mexican
```
```
Lacto vegetarian
Pescetarian
Vegan
```
```
Christmas
Thanksgiving
Fall
```

recipes by name
```
Baked Chicken ...
Perfect Apple Pie
... Fruit Salad
Crock Pot Roast
```

ingredients by id
ingredients by id included & excluded

attributes by id
attributes by id included & excluded


Complex queries

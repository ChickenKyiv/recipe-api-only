**Ingredients search - add relations with Recipes**

http://localhost:3000/api/ingredients?filter[where][name]=chicken  **not working**  
http://localhost:3000/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][inq]=pasta  **not working**  
http://localhost:3000/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][nin]=pasta  **not working**  

**As we updated Model fields - worked urls below**  
http://localhost:3000/api/ingredient?filter[where][term]=chicken&access_token=%token%  **working**  
http://localhost:3000/api/ingredient?filter[where][term][inq]=chicken&filter[where][term][inq]=pasta&&access_token=%token
%  **working**  
http://localhost:3000/api/ingredient?filter[where][term][nin]=chicken&filter[where][term][nin]=pasta&filter[limit]=10&access_token=%token%  **working**  

**Cousines search - Add relations with Recipes**
http://localhost:3000/api/cousine?filter[where][id]=cousineId  **not working**  
http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][inq]=cousineId  **not working**  
http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][nin]=cousineId  **not working**  

**Courses search - Add relations with Recipes**
http://localhost:3000/api/course?filter[where][id]=courseId  **working**
http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][inq]=courseId  **working**  
http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][nin]=courseId  **working**

http://localhost:3000/api/course?filter[where][name]=Appetizers&access_token=%token% **working**  

**Holidays search - Add relations with Recipes**
http://localhost:3000/api/holiday?filter[where][id]=holidayId  **working**  
http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][inq]=holidayId  **working**  
http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][nin]=holidayId  

**Allergies search - Add relations with Recipes**
http://localhost:3000/api/allergy?filter[where][id]=allergyId  
http://localhost:3000/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][inq]=allergyId  
http://localhost:3000/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][nin]=allergyId  

**Diets search - Add relations with Recipes**
http://localhost:3000/api/diet?filter[where][id]=dietId  **working**  
http://localhost:3000/api/diet?filter[where][id][inq]=dietId&filter[where][id][inq]=dietId    **working**  
http://localhost:3000/api/diet?filter[where][id][inq]=dietId&filter[where][id][nin]=dietId  

**Cooking Time** lt XX:XX
http://localhost:3000/api/recipe?filter[where][cook_time][lt]=5m  

**Date(related to weekly menus)**
date:{ gt: Date.Now() - ONE_WEEK }
http://localhost:3000/api/  

### Recipe Name
http://localhost:3000/api/recipe?filter[like][name]=%Pork%  **not working**    
http://localhost:3000/api/recipe?filter[ilike][name]=%Pork%  **not working**    

propose to add example at REST link on https://loopback.io/doc/en/lb3/Where-filter.html#ilike-and-nilike  

### Long query
http://localhost:3000/api/recipe?filter[where][and][0][name]=Pork  
&filter[where][and][1][ingredients][name]=chicken  
&filter[where][and][2][cousine][cousineId]=cousineId  
&filter[where][and][3][course][courseId]=courseId  
&filter[where][and][4][holiday][holidayId]=holidayId  
&filter[where][and][5][allergy][allergyId]=allergyId  
&filter[where][and][6][diet][dietId]=dietId  


### Parts of long query
http://localhost:3000/api/recipe?filter[where][allergies][inq]=allergyId&filter[where][allergies][inq]=allergyId **working**  
http://localhost:3000/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId **working**  
http://localhost:3000/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId&filter[where][and][2][courses][inq]=courseId&filter[where][and][2][courses][inq]=courseId **working**  

http://localhost:3000/api/recipe?filter[where][and][0][holidays][inq]=holidayId&filter[where][and][1][holidays][inq]=holidayId&filter[where][and][2][diets][inq]=dietId&filter[where][and][2][diets][inq]=dietId **working**  


**Note** Works on current state of database(without working well relations)


----------

links to our testing environment
**Ingredients search - add relations with Recipes**

https://recipe-api-loopback.herokuapp.com/api/ingredients?filter[where][name]=chicken  **not working**  
https://recipe-api-loopback.herokuapp.com/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][inq]=pasta  **not working**  
https://recipe-api-loopback.herokuapp.com/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][nin]=pasta  **not working**  

**As we updated Model fields - worked urls below**  
https://recipe-api-loopback.herokuapp.com/api/ingredient?filter[where][term]=chicken&access_token=%token%  **working**  
https://recipe-api-loopback.herokuapp.com/api/ingredient?filter[where][term][inq]=chicken&filter[where][term][inq]=pasta&&access_token=%token
%  **working**  
https://recipe-api-loopback.herokuapp.com/api/ingredient?filter[where][term][nin]=chicken&filter[where][term][nin]=pasta&filter[limit]=10&access_token=%token%  **working**  

**Cousines search - Add relations with Recipes**
https://recipe-api-loopback.herokuapp.com/api/cousine?filter[where][id]=cousineId  **not working**  
https://recipe-api-loopback.herokuapp.com/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][inq]=cousineId  **not working**  
https://recipe-api-loopback.herokuapp.com/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][nin]=cousineId  **not working**  

**Courses search - Add relations with Recipes**
https://recipe-api-loopback.herokuapp.com/api/course?filter[where][id]=courseId  **working**
https://recipe-api-loopback.herokuapp.com/api/course?filter[where][id][inq]=courseId&filter[where][id][inq]=courseId  **working**  
https://recipe-api-loopback.herokuapp.com/api/course?filter[where][id][inq]=courseId&filter[where][id][nin]=courseId  **working**

https://recipe-api-loopback.herokuapp.com/api/course?filter[where][name]=Appetizers&access_token=%token% **working**  

**Holidays search - Add relations with Recipes**
https://recipe-api-loopback.herokuapp.com/api/holiday?filter[where][id]=holidayId  **working**  
https://recipe-api-loopback.herokuapp.com/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][inq]=holidayId  **working**  
https://recipe-api-loopback.herokuapp.com/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][nin]=holidayId  

**Allergies search - Add relations with Recipes**
https://recipe-api-loopback.herokuapp.com/api/allergy?filter[where][id]=allergyId  
https://recipe-api-loopback.herokuapp.com/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][inq]=allergyId  
https://recipe-api-loopback.herokuapp.com/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][nin]=allergyId  

**Diets search - Add relations with Recipes**
https://recipe-api-loopback.herokuapp.com/api/diet?filter[where][id]=dietId  **working**  
https://recipe-api-loopback.herokuapp.com/api/diet?filter[where][id][inq]=dietId&filter[where][id][inq]=dietId    **working**  
https://recipe-api-loopback.herokuapp.com/api/diet?filter[where][id][inq]=dietId&filter[where][id][nin]=dietId  

**Cooking Time** lt XX:XX
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][cook_time][lt]=5m  

**Date(related to weekly menus)**
date:{ gt: Date.Now() - ONE_WEEK }
https://recipe-api-loopback.herokuapp.com/api/  

### Recipe Name
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[like][name]=%Pork%  **not working**    
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[ilike][name]=%Pork%  **not working**    

propose to add example at REST link on https://loopback.io/doc/en/lb3/Where-filter.html#ilike-and-nilike  

### Long query
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][name]=Pork  
&filter[where][and][1][ingredients][name]=chicken  
&filter[where][and][2][cousine][cousineId]=cousineId  
&filter[where][and][3][course][courseId]=courseId  
&filter[where][and][4][holiday][holidayId]=holidayId  
&filter[where][and][5][allergy][allergyId]=allergyId  
&filter[where][and][6][diet][dietId]=dietId  


### Parts of long query
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][allergies][inq]=allergyId&filter[where][allergies][inq]=allergyId **working**  
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId **working**  
https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][allergies][inq]=allergyId&filter[where][and][1][allergies][inq]=allergyId&filter[where][and][2][courses][inq]=courseId&filter[where][and][2][courses][inq]=courseId **working**  

https://recipe-api-loopback.herokuapp.com/api/recipe?filter[where][and][0][holidays][inq]=holidayId&filter[where][and][1][holidays][inq]=holidayId&filter[where][and][2][diets][inq]=dietId&filter[where][and][2][diets][inq]=dietId **working**  

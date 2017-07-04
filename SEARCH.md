**Ingredients search - add relations with Recipes**

http://localhost:3000/api/ingredients?filter[where][name]=chicken  
http://localhost:3000/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][inq]=pasta  
http://localhost:3000/api/ingredients?filter[where][name][inq]=chicken&filter[where][name][nin]=pasta  

**Cousines search - Add relations with Recipes**
http://localhost:3000/api/cousine?filter[where][id]=cousineId  
http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][inq]=cousineId  
http://localhost:3000/api/cousine?filter[where][id][inq]=cousineId&filter[where][id][nin]=cousineId  

**Courses search - Add relations with Recipes**
http://localhost:3000/api/course?filter[where][id]=courseId  
http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][inq]=courseId  
http://localhost:3000/api/course?filter[where][id][inq]=courseId&filter[where][id][nin]=courseId  

**Holidays search - Add relations with Recipes**
http://localhost:3000/api/holiday?filter[where][id]=holidayId  
http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][inq]=holidayId  
http://localhost:3000/api/holiday?filter[where][id][inq]=holidayId&filter[where][id][nin]=holidayId  

**Allergies search - Add relations with Recipes**
http://localhost:3000/api/allergy?filter[where][id]=allergyId  
http://localhost:3000/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][inq]=allergyId  
http://localhost:3000/api/allergy?filter[where][id][inq]=allergyId&filter[where][id][nin]=allergyId  

**Diets search - Add relations with Recipes**
http://localhost:3000/api/diet?filter[where][id]=dietId  
http://localhost:3000/api/diet?filter[where][id][inq]=dietId&filter[where][id][inq]=dietId  
http://localhost:3000/api/diet?filter[where][id][inq]=dietId&filter[where][id][nin]=dietId  

**Cooking Time** lt XX:XX
http://localhost:3000/api/recipe?filter[where][cook_time][lt]=5m  

**Date(related to weekly menus)**
date:{ gt: Date.Now() - ONE_WEEK }
http://localhost:3000/api/  

**Recipe Name**
http://localhost:3000/api/recipe?filter[like][name]=%Pork%  
http://localhost:3000/api/recipe?filter[ilike][name]=%Pork%  

propose to add example at REST link on https://loopback.io/doc/en/lb3/Where-filter.html#ilike-and-nilike  

**Long query**
http://localhost:3000/api/recipe?filter[where][and][0][name]=Pork  
&filter[where][and][1][ingredients][name]=chicken  
&filter[where][and][2][cousine][cousineId]=cousineId  
&filter[where][and][3][course][courseId]=courseId  
&filter[where][and][4][holiday][holidayId]=holidayId  
&filter[where][and][5][allergy][allergyId]=allergyId  
&filter[where][and][6][diet][dietId]=dietId  

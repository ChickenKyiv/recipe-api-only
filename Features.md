

- [ ] Add JSLint checking at pull requests checks

- [ ] Add Image upload for recipes

# Description/Steps to reproduce

 Image upload move to GS + recipe API
https://github.com/ChickenKyiv/api-extended-database/blob/master/server/model-config.json#L51
https://github.com/ChickenKyiv/api-extended-database/blob/master/server/datasources.json#L19
https://github.com/ChickenKyiv/api-extended-database/tree/master/server/files

#204


#### Transition from Loopback to GraphQL environment
- https://github.com/graphcool/prisma
- https://www.npmjs.com/package/loopback-graphql-server
- https://github.com/yahoohung/loopback-graphql-server
- https://www.prismagraphql.com/docs/reference/service-configuration/data-modelling-(sdl)-eiroozae8u#prisma-database-schema-vs-data-model

- https://github.com/yahoohung/loopback-graphql-server/issues/2

- https://medium.com/graphql-mastery/json-as-an-argument-for-graphql-mutations-and-queries-3cd06d252a04

# @TODOs
- add image upload
- finish email notifications
- convert swagger to API blueprint


#### Receipt, checque recognition
Checque image recognition
Check OK structure
Check Stack overflow for structure
https://admin.tabscanner.com/login
https://github.com/mre/receipt-parser
https://stackoverflow.com/questions/31633403/tesseract-receipt-scanning-advice-needed
https://dzone.com/articles/using-ocr-for-receipt-recognition
https://ryubidragonfire.github.io/blogs/2017/06/06/Automating-Receipt-Processing.html
https://www.azoft.com/blog/ocr-receipt-recognition/
https://www.npmjs.com/package/receipt-scanner


#### improvements
Search image for recipe, from API
Voice create ingredient
Voice fill recipe data
#128


### Recipe + bot

- [ ] Провести подготовительную работу
- [ ] Детально описать, что именно я хочу парсить и каким образом
- [ ] Могу юзать бота как конвентер данных



Bot "command"
Bot convert thing to json
https://github.com/atherdon/botkit-my-slack/issues/90


---
Put 5k ingredients into RecastAI

---
#### Cloudinary image uploads
https://scotch.io/bar-talk/build-a-content-moderation-service-with-node-and-cloudinary

---

#### recipe import
Make it work using nodejs
firstly we don't importing all content, only title, img, url, ingredients - and tell where we get this information
OR we can use a logic from gatsby.

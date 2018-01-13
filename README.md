# README #

This README would normally document whatever steps are necessary to get your application up and running.

Note: **This repository is going through heavy development currently and should not be used in production unless you know what you are doing**


[![Join the chat at https://gitter.im/recipe-api-questions/Lobby](https://badges.gitter.im/recipe-api-questions/Lobby.svg)](https://gitter.im/recipe-api-questions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Note: Upload images are not supported right now. If you want to display images, you must upload them to storage, copy public url and save it on database.
Use this reference for adding such a functionality: https://github.com/optis/loopback-rest-api#storage


### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

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


- Open the command line(bash, shell)

- run "npm run migrate", using ctrl+c to terminate once table is created
`Migrate will create an empty datatables and drop all previous data if require`

- run "npm run import", using ctrl+c to terminate
`Import will move sample data from json arrays to mongo documents`

- run "npm run grocery", using ctrl+c to terminate **Not finished**
`Import will move sample data from json arrays to mongo documents`


- run "npm run search", using ctrl+c to terminate
`Import will move sample data from json arrays to mongo documents`


  ```	
  $ node .
  ```
  		  
 or 
 
 ```
 $ npm run watch
 ```
 
 
 
### Deployment on heroku
 
 - heroku login
 - heroku create %your-app-name%
 
 Will create an empty tables in database
 ```
 $ heroku run npm run migrate
 ```
 
 Will import data like admin user, ultimate grocery template
 ```
 $ heroku run npm run import
 ```
 
 ---
 
 

## Links, that's important for me:

http://localhost:3000/explorer/#!/recipes/recipes_find

http://localhost:3000/api/recipe

http://localhost:3000/api/menu

http://localhost:3000/explorer/#!/customer/customer_login will return a token

For sending email notifications - we'll use MailGun

Our free key : key-4e236ace7f85293ec5eb2b37d6d9fa39
Free domain : sandbox31d3370622eb42a597ccb3fa1fd0adbf.mailgun.org



http://localhost:3000/api/ingredient?filter[where][name][like]=kosher

@TODO fill Readme with other urls, that what we'll need for Free*Done* and Menu Milestone


[Live Recipe API server](https://recipe-api-loopback.herokuapp.com/) (down at this moment)



[Search filters](https://github.com/atherdon/recipe-api-only/blob/master/SEARCH.md)

[Free Menu Release Routes with Samles](https://github.com/atherdon/recipe-api-only/blob/master/FreeMenu.md)


@TODO Search 





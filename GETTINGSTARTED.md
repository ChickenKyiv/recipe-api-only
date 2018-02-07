
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


  ```
 heroku run npm run migrate --app recipe-api-loopback

  ```

  ```
 heroku run npm run migrate-search --app recipe-api-loopback

  ```
 // recipes

  ```
 heroku run npm run import-recipes --app recipe-api-loopback

  ```
 // search data

  ```
 heroku run npm run import-search --app recipe-api-loopback

  ```

  or

    ```
 heroku run npm run s --app recipe-api-loopback

  ```
     ```
 heroku run npm run g --app recipe-api-loopback

  ```
   ```
 heroku run npm run r --app recipe-api-loopback

  ```

  for logs put
  ```
  heroku logs -a recipe-api-loopback
```
for install packages it's better to run
```
heroku run npm install -a recipe-api-loopback
```
## Links, that's important for me:

For sending email notifications - we'll use MailGun

Our free key : key-4e236ace7f85293ec5eb2b37d6d9fa39
Free domain : sandbox31d3370622eb42a597ccb3fa1fd0adbf.mailgun.org

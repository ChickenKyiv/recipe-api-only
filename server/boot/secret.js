var dotenv = require('dotenv');
// // There's no need to check if .env exists, dotenv will check this 
// // for you. It will show a small warning which can be disabled when 
// // using this in production.

dotenv.load();




module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 'mongodb://localhost/recipe',

  

 
 
 
};
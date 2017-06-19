'use strict';




     var diet        = [
     {
     	"id":"388","shortDescription":"Lacto vegetarian","longDescription":"Lacto vegetarian",
     	"searchValue":"388^Lacto vegetarian",
     "type":"diet","localesAvailableIn":["en-US"]
 },
     {
     	"id":"389","shortDescription":"Ovo vegetarian","longDescription":"Ovo vegetarian",
     	"searchValue":"389^Ovo vegetarian",
     "type":"diet","localesAvailableIn":["en-US"]
 },
     {
     	"id":"390","shortDescription":"Pescetarian","longDescription":"Pescetarian",
     	"searchValue":"390^Pescetarian",
     "type":"diet","localesAvailableIn":["en-US"]
 },
     {
     	"id":"386","shortDescription":"Vegan","longDescription":"Vegan",
     	"searchValue":"386^Vegan",
     "type":"diet","localesAvailableIn":["en-US"]
 },
     {
     	"id":"387","shortDescription":"Lacto-ovo vegetarian","longDescription":"Vegetarian",
     	"searchValue":"387^Lacto-ovo vegetarian",
     "type":"diet","localesAvailableIn":["en-US"]
 },
     {
     	"id":"403","shortDescription":"Paleo","longDescription":"Paleo",
     	"searchValue":"403^Paleo",
     "type":"diet","localesAvailableIn":["en-US"]
 }
     ];


     

function getSampleData (cb){

	var ingredient = [	
		{
		  username: 'john',	
		  email: 'john.doe@ibm.com',
		  password: 'john1',

		},
		{
		  username: 'jane',
		  email: 'jane.doe@ibm.com',
		  password: 'jane1',
		},
		{
		  username: 'admin',
		  email: 'admin@ibm.com',
		  password: 'admin',

		}
  	];

  	return cb(accounts);

};

module.exports = getSampleData();
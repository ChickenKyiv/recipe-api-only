'use strict';

      
         

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
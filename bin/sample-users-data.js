'use strict';

module.exports = function getSampleData (cb){

	var accounts = [	
		{
		  name: 'john',	
		  email: 'john.doe@ibm.com',
		  password: 'john1',

		},
		{
		  name: 'jane',
		  email: 'jane.doe@ibm.com',
		  password: 'jane1',
		},
		{
		  name: 'admin',
		  email: 'admin@ibm.com',
		  password: 'admin',

		}
  	];

  	return cb(accounts);

}
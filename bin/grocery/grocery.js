'use strict';


var Grocery     = server.models.Grocery;

function getGroceries(){

	var grocery = [
		{

			
			title:"Ultimate Grocery List",
			img  : false,
			desc : false,
			slug : false //:todo do we need this fields?
 

		}
	];

	return grocery;

};

function createGroceries(cb){
	database.autoupdate('Grocery', function(err){
		if (err) return cb(err);

		Grocery.create(getGroceries(), cb);
	
	});
};

function idsOnly(array){

  var result = Object.keys(array).map(function(e) {
    return array[e].id;
    });

  return result;    

};


module.exports.createGroceries = createGroceries;
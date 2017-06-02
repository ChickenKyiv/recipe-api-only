'use strict';

module.exports = function getSampleData (cb){


	var menus = [

{ 
	customerId: "2", 
id: "6", 
rec: ["1989","1990"], 
title: "string", 
date: "December 17, 2003 03:24:00",
 desc: "string", 
 recipes: "{}",
  // created_at:"December 17, 2003 03:24:00",
  // updated_at:"December 17, 2003 03:24:00"
},
      { 
      	customerId: "1", 
      id: "10",
      rec: ["1980", "1990"], 
      title: "string", 
      date: "December 17, 2003 03:24:00", 
      desc: "string", 
      recipes: "{}", 
      // created_at:"December 17, 2003 03:24:00",
      // updated_at:"December 17, 2003 03:24:00"
  },
    {
      	title:"string1",
      date:"2003-12-17T11:24:00.000Z",
      desc:"string1",
      recipes:"{}",
      // created_at:"2003-12-17T11:24:00.000Z",
      // updated_at:"2003-12-17T11:24:00.000Z",
      customerId:2,
      id:3
  },
    {
      	title:"string2",
      date:"2003-12-17T11:24:00.000Z",
      desc:"string2",
      recipes:"{}",
      // created_at:"2003-12-17T11:24:00.000Z",
      // updated_at:"2003-12-17T11:24:00.000Z",
      customerId:1,
      id:4
  },
    {
      	title:"string2",
      date:"2003-12-17T11:24:00.000Z",
      desc:"string2",
      recipes:"{}",
      // created_at:"2003-12-17T11:24:00.000Z",
      // updated_at:"2003-12-17T11:24:00.000Z",
      customerId:1,
      id:5
  }
	];



	return cb(menus);
};
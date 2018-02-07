'use strict';

let table_name = 'Ingredient'

// this indredients haven't nice departments, so i attach them only to department[0]
const get = (department_id) => {
    let data
    data[0]     = [
			{
	  		name: "black pepper",
	      departmentId: department_id
	  	},
	  	{
	        name: "extra-virgin olive oil",
	      departmentId: department_id
	    },
	    {
	     name: "kosher salt",
	      departmentId: department_id
	  	},
	  	{
	       name: "kosher salt and freshly ground black",
	      departmentId: department_id
	  	},



	    {
	      name: "Celery",
	      departmentId: department_id
	    },
	    {
	      name: "Corn",
	      departmentId: department_id
	    },
	    {
	      name: "Cucumbers",
	      departmentId: department_id
	    },
	    {
	      name: "Lettuce / Greens",
	      departmentId: department_id
	    },
	    {
	      name: "Mushrooms",
	      departmentId: department_id
	    },
	    {
	      name: "Onions",
	      departmentId: department_id
	    },
	    {
	      name: "Peppers",
	      departmentId: department_id
	    },
	    {
	      name: "Potatoes",
	      departmentId: department_id
	    },
	    {
	      name: "Spinach",
	      departmentId: department_id
	    },
	    {
	      name: "Squash",
	      departmentId: department_id
	    },
	    {
	      name: "Zucchini",
	      departmentId: department_id
	    },
	    {
	      name: "Tomatoes*",
	      departmentId: department_id
	    }

     ];


     data[1] = [
       { },
       { },
     ];


  	return data;

};


module.exports.get        = get;
module.exports.table_name = table_name;

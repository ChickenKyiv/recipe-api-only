'use strict';

let table_name = 'Ingredient'

// this indredients haven't nice departments, so i attach them only to department[0]
const get = (department_id) => {
    let data

    data[0] = [
      {
        name: "medium russet potatoes, sliced into sticks",
        departmentId: department_id
      },
      {
        name: "tablespoons vegetable oil, divided",
        departmentId: department_id
      },
      {
        name: "salt & freshly ground black pepper, to taste",
        departmentId: department_id
      },
      {
        name: "scallions",
        departmentId: department_id
      },
      {
        name: "ounces cheese curds or 6 ounces fresh mozzarella cheese, diced",
        departmentId: department_id
      }
    ];

    data[1] = [
      {
        name: "1 box Pillsbury™ refrigerated pie crusts, softened as directed on box",
        departmentId: department_id
      },
      {
        name: "6 cups thinly sliced, peeled apples (6 medium)",
        departmentId: department_id
      },
      {
        name: "3/4 cup sugar",
        departmentId: department_id
      },
      {
        name: "2 tablespoons all-purpose flour",
        departmentId: department_id
      },
      {
        name: "3/4 teaspoon ground cinnamon",
        departmentId: department_id
      },
      {
        name: "1/4 teaspoon salt",
        departmentId: department_id
      },
      {
        name: "1/8 teaspoon ground nutmeg",
        departmentId: department_id
      },
      {
        name: "1 tablespoon lemon juice"
        departmentId: department_id
      },
    ];

    data[2] = [
      {
        name : "apple",
        departmentId : department_id
      },
      {
        name : "banana",
        departmentId : department_id
      },
      {
        name : "orange",
        departmentId : department_id
      },
      {
        name : "grapes",
        departmentId : department_id
      }
    ];

    data[3] = [
      {
        name: "beef roast",
        departmentId : department_id
      },
      {
        name: "brown gravy mix",
        departmentId : department_id
      },
      {
        name: "dried Italian salad dressing mix",
        departmentId : department_id
      },
      {
        name "dry ranch dressing mix",
        departmentId : department_id
      },
      {
        name: "water",
        departmentId : department_id
      }
    ];

    data[4] = [
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
	  	}

     ];

  	return data;

};


module.exports.get        = get;
module.exports.table_name = table_name;

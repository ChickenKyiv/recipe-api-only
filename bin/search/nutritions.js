'use strict';


let table_name = 'Nutritions'

const get = () => {

     var data     = [{
         type: "Vitamins",
         items: [
           "Vitamin A (retinol)",
           "Vitamin B1 (thiamin)",
           "Vitamin B2 (riboflavin)",
           "Vitamin B3 (niacin)",
           "Vitamin B5 (panthotenic acid)",
           "Vitamin B6 (pyridoxin)",
           "Vitamin B7 (biotin)",
           "Vitamin B9 (folic acid, folate)",
           "Vitamin B12 (cobalamin)",
           "Vitamin C (ascorbic acid)",
           "Vitamin E (tocopherol)",
           "Vitamin K (naphthoquinones)",
           "Choline (vitamin Bp) [1,2,3]"
         ]
       },
       {
         type: "Minerals",
         items: [
           "Calcium",
           "Chloride",
           "Chromium",
           "Copper",
           "Iodine",
           "Iron",
           "Magnesium",
           "Manganese",
           "Molybdenum",
           "Phosphorus",
           "Potassium",
           "Selenium",
           "Sodium",
           "Zinc"
         ]
       },
       {
         type: "Amino acids",
         items: [
           "Isoleucine",
           "Histidine",
           "Leucine",
           "Lysine",
           "Methionine",
           "Phenylalanine",
           "Tryptophan",
           "Threonine",
           "Valine"
         ]
       },
       {
         type:"Fatty acids"	,
         items: [
           "Alpha-linolenic acid (ALA)",
           "Linoleic acid"
         ]
       }
     ];

     return data;


};

module.exports.get   = get;
module.exports.table_name   = table_name;

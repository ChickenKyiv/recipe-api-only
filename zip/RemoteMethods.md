Ingredients. Remote methods
- [ ] Ingredient.listDepartments
- [ ] Ingredients. combine similar ingredients for next unit convertion

User. Remote methods
- [ ] UserModel.updateSubscription - finish and test
- [ ] Send email notification when new weekly menu was published(by clicking on button send notification will work OK for this moment)

- [ ] users/:id/menu/:id/ #103

https://github.com/GroceriStar/groceristar/issues/67
https://github.com/ChickenKyiv/recipe-api-only/issues/99
https://github.com/ChickenKyiv/loopback-tutor-intern-8/issues/27


Recipe methods
- [ ] Recipe Edit method(main fields like title, notes, etc)
- [ ] Edit ingredients, related to recipe
recipe/:id/ingredient/:id

Recipe methods
- [ ] Display recipes list with recipes, modified by users.
- [ ] Display list of recipes with type favourited
- [ ] Display list of recipes with type Meal done

---

Grocery remote methods
- [ ]  *Departmentalize a list of strings -- used for ad-hoc grocery list item addition*
 router.post('/grocerylist/department'

- [ ]  *Delete all the items on a grocery list; faster operation than a sync with deleted items.*
router.delete('/grocerylist'

- [ ]  *Get the user's grocery list. User is determined by Basic Authentication.*
 router.get('/grocerylist'

- [ ]  *Add a Recipe to the grocery list. In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.*
 router.post('/grocerylist/recipe'

- [ ]  *Synchronize the grocery list. Call this with a POST to /grocerylist/sync*
router.post('/grocerylist/sync'

- [ ]  *Add a single line item to the grocery list*
router.post('/grocerylist/item'

- [ ]  * DELETE will delete this item assuming you own it.*
router.delete('/grocerylist/item/:id'

- [ ]  * Update a grocery item by GUID*
 router.put('/grocerylist/item/:id'

- [ ] groceryListForMenu - finish

- [ ] grocery/menu/:id - complete & test

- [ ] grocery/id/departments

---

Menu. Remote methods
- [ ] Menu. lastMenu - test
- [ ] Menu/:id/Grocery
- [ ] Menu.listGroceries - finish
- [ ] listRecipesShort - finish

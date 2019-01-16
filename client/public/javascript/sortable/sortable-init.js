// (function () {
// 	'use strict';

	// Simple list
	// var list = document.getElementById("foo");
	// Sortable.create(list); // That's all.


	// var el = document.getElementById('foo');
	// var sortable = Sortable.create(el);

	// Sortable.create(list, {
	// 	handle: '.drag-handle',
	// 	animation: 150
	// }); // That's all.


	Sortable.create(byId('todo-list'),{
		// handle: 'li',
		handle: '.drag-handle',
		animation: 150
	}); // That's all.

// });


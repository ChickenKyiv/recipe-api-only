/*global jQuery, Router */
jQuery(function ($) {
	'use strict';

	var ENTER_KEY  = 13;
	var ESCAPE_KEY = 27;

	var App = {
		selector: '',
		isUltimate: function(){
			return $('body').data().flag;
		},
		getDepartmentId: function(){		
			return $('body').data().departmentId;			
		},
		getGroceryId: function(){
			return $('body').data().groceryId;
		},

		init: function() {

			this.selector = '#todoapp li.list__item.list__item--tappable';

			this.todos    = $(this.selector).map(function() {
				
			    return $(this).data().element;
			}).get();

			this.groceryId    = this.getGroceryId();
			this.departmentId = this.getDepartmentId(); 
			this.bindEvents();

			new Router({
				'/:filter': function (filter) {
					this.filter = filter;
					
					// console.log(this.filter);
					// console.log($('#maList').data());
					$('#maList').addClass(this.filter);
					// console.log( )

					$('input[type=radio][data-filter='+this.filter+']').prop('checked', true)

					// $('#maList').prop('data-filter', this.filter)
					this.render();
				}.bind(this)
			}).init('/all');

			
			// :todo make it work inside bind events method
			$('input[type=radio][name=segment-filter]').change(function() {
		        
		        $(this).parent().find('.hide')[0].click()
		        var filter = $(this).data().filter;
		       
		        
		       	 $('#maList').removeClass('all') 
		       	 $('#maList').removeClass('active')
		       	 $('#maList').removeClass('completed')
		        

		        $('#maList').addClass(filter)
		        // console.log($(this).data().filter);

		    });


		},
		bindEvents: function () {

			// works well & tested			
            $('#departmentList')
                .on('change', this.redirectToOtherDepartment.bind(this));

  
            $('#toggle-all')
				.on('change', this.toggleAll.bind(this));    


			// :todo i dont think that keyup its an awesome approach.
			// it can work, but why to use it?
			$('#new-todo')
				.on('keyup', this.create.bind(this));


			$('#footer').on('click', '#clear-completed', 
				this.destroyCompleted.bind(this));

			// #todo-list

			$('#todoapp')
				.on('change',   '.checkbox__input',  this.toggle.bind(this))
				//related to update feature
				.on('dblclick', 'li:not(.completed) label',    this.editingMode.bind(this))
				.on('keyup',    '.edit',    this.editKeyup.bind(this))
				.on('focusout', '.edit',    this.update.bind(this))
				// related to delete feature
				.on('click',    '.toolbar-button.destroy', this.destroy.bind(this));


            

		},
		returnPick: function (data) {

		}, 
		// filterClick: function(event){
		// 	console.log($(event.target));
		// },
		// :todo right now i think it'll be better to just separate things to a few small methods.
		// this way is old-fashione, and i keep it only to follow previous version installation
		render: function (flag=false) {

			// console.log('mi blur?')
			// console.log(flag)

			// :todo maybe we need to cover situation 
			// when we don't have any items inside the department


			// related to changing states

			// related to update/delete/destroy all events

			switch (flag) {

			  case 'destroy':
			    
			    // we add no focus on destroy one event

			    // console.log(this.todos)
				var updated = _.map(this.todos, function(obj) {
					return _.pick(obj, 'id', 'completed'); 
				});
				updated = _.indexBy(updated, 'id');

				// console.log(updated)
				
			   $(this.selector).map(function() {
					// this is related to empty item field
					if( !_.isEmpty($(this).data()) ){
				    	var id = $(this).data().element.id;

				    	if( !updated[id] ) {
				    		// console.log(id)
				    		$(this).remove();
				    	}
				    }

					
				});

			    break;
			  

			  case 'abort':

				$(this.selector).map(function() {
					// this is related to empty item field
					if( !_.isEmpty($(this).data()) ){

				    	// var id = $(this).data().element.id;

				    	// if( !updated[id] ) {
				    	// 	// console.log(id)
				    	// 	$(this).remove();
				    	// }
				    	// console.log($(this).hasClass('editing'))

				    	if( $(this).hasClass('editing') ){
				    		$(this).removeClass('editing')
				    		$(this).find('.text-input.edit').addClass('hide');
				    	}

				    }

					
				});

			    break;
    			case 'upd':
				var updated = _.map(this.todos, function(obj) {
					return _.pick(obj, 'id', 'completed'); 
				});
				updated = _.indexBy(updated, 'id');

				console.log(updated)
				
			   $(this.selector).map(function() {

			   		
					// this is related to empty item field
					if( !_.isEmpty($(this).data()) ){
				    	var id = $(this).data().element.id;

				    	if( !updated[id] ) {
				    		// console.log(id)
				    		$(this).remove();
				    	}



				    }

					
				});


    			break;

    			case 'rename':
    			var updated = _.map(this.todos, function(obj) {
					return _.pick(obj, 'id', 'name'); 
				});
				updated = _.indexBy(updated, 'id');

				console.log(updated);

				$(this.selector).map(function() {

					
					// console.log($(this).data())
					// if(name != updated[id].name){
				 //    	if( $(this).hasClass('editing') ){
				 //    		$(this).removeClass('editing')
				 //    		$(this).find('span').html(name);

				 //    		$(this).find('.text-input.edit')
				 //    			   .addClass('hide')
				 //    			   .val(name);
				 //    	}
					// }

				// 	// this is related to empty item field
					if( !_.isEmpty($(this).data()) ){
						var id   = $(this).data().element.id;
						var name = updated[id].name;
						$(this).removeClass('editing')
			    		$(this).find('span').html(name);

			    		$(this).find('.text-input.edit')
			    			   .addClass('hide')
			    			   .val(name);

				    }

					
				});

    			break;
			  // this is all flag relates
			  default:
			  	
			    break;
			}

			// related to toggles

			switch (flag) {
			  case 'toggle':

			    var todos = this.getFilteredTodos();

				// console.log(todos);	
				
				var results = _.map(todos, function(obj) {
				 return _.pick(obj, 'id', 'completed'); 
				});
				results = _.indexBy(results, 'id');

			  	$(this.selector).map(function() {

					// this is related to empty item field
					if( !_.isEmpty($(this).data()) ){
						var id = $(this).data().element.id;
						$(this).find('.checkbox__input')
						   .prop("checked", results[id].completed)

						// :todo maybe change to flag variable, huh?   
						// + switch to a toggle
						if( results[id].completed )	{
							$(this).find('span').addClass('completka');
						} else {
							$(this).find('span').removeClass('completka');
						}

						// console.log(results[id].completed)	   
					}
					
				});


			    break;
			  

			  // case 'new':
			  // 	$('#new-todo').focus();
			  //   break;
			  // this is all flag relates
			  default:
			  	// alert('So what?');
			    break;
			}

			this.updateFooterCount();


			// if( todos ){





				




				// explore this stuff
				// $('#main').toggle(todos.length > 0);



				// if( flag ) 
				//$('#new-todo').focus();


				
			// }

		},

		updateFooterCount: function(){

			var activeTodoCount = this.getActiveTodos().length;
			var completedTodos  = this.getCompletedTodos().length;

			var html = '<span class="count">' + activeTodoCount + '</span>';

			// bad but work
			if( completedTodos === 1 ) {
				html += ' &nbsp;item left';
			} else {
				html += ' &nbsp;items left';
			}
			$('.count-wrapper').html(html);


			if ( completedTodos ) {			    
				$('#clear-completed').show();
			} else {
				$('#clear-completed').hide();
			}

		},
		getActiveTodos: function () {
			return _.where(this.todos, { completed:false });		
		},
		getCompletedTodos: function () {
			return _.where(this.todos, { completed: true });
		},
		getFilteredTodos: function () {
			// console.log(this.filter);
			if (this.filter === 'active') {
				return this.getActiveTodos();
			}

			if (this.filter === 'completed') {
				return this.getCompletedTodos();
			}

			return this.todos;
		},


		destroyCompleted: async function () {

			var array1       = this.todos;
			this.todos       = this.getActiveTodos();
			var array2       = this.getActiveTodos();
			
			var difference   = _.difference(array1, array2);

			var array_of_ids = _.pluck(difference, 'id');
			// await this._unattach_async(array_of_ids);
			this.filter = 'all';
			this.render('destroy');
		},
		// accepts an element from inside the `.item` div and
		// returns the corresponding index in the `todos` array
		// :todo maybe we can use order value for this type of feature?
		getIndexFromEl: function (e) {
			// can be li
			var $element = this.getElementFromEvent(e);
			var id       = $element.data().element.id;

			// console.log($element.data())

			// console.log(this.getDataField(e, 'id'))

			// :todo to understand why below line not working
			// var id    = this.getDataField(e, 'id');

			var todos = this.todos;
			var i     = todos.length;

			while (i--) {
				if (todos[i].id === id) {
					return i;
				}
			}
		},
		getElementFromEvent: function(element){
			var $ingredient = $(element).closest('li');
			return $ingredient;
		},
		getMaxOrderNumber: function(){
			var ITEM = _.last(this.todos);
			return ITEM.order;
		},
		getItemObject: function(id, name){
			return {
				id  : id,
				name: name,

				completed: false,

				groceryId   : this.groceryId,
				departmentId: this.departmentId,
				order       : this.getMaxOrderNumber() + 1,

				custom: true
			};
		},
		create: async function (e) {

			var $input       = $(e.target);
			var val          = $input.val().trim();

			if (e.which !== ENTER_KEY || !val) { return; }


			// new version
			var response;
			

			var obj = this.getItemObject('new-id', val);
			this.todos.push(obj);

			
			// :todo this can be moved to render, but how you'll get
			
		  	var $clonee = $(this.selector).last().clone();
			// $clonee.data('element', obj);
			$clonee.removeClass('hide').attr('data-element', JSON.stringify(obj));
			$clonee.find('.list__item__center span')
				.html(obj.name).after('<input class="text-input edit hide" type="text" value="' + obj.name + '">');
			

			$(this.selector).last()
				.before($clonee);	
			
			// it's a new todo element
			$input.val('');
				
			this.render();


		},
		toggleAll: function (e) {
			var flag = $(e.target).prop('checked');

			_.each(this.todos, function(value, key, obj) { 
				obj[key].completed = flag; 
			})

			var ingredientIds = _.pluck(this.todos, 'id');
			// this._toggle(ingredientIds, flag)
			this.render('toggle');
		},
		toggle: function (event) {

			// console.log(event.target);

			var index       = this.getIndexFromEl(event.target);
			var $ingredient = this.getElementFromEvent(event.target);
			var id          = $ingredient.data().element.id;

			// var id = this.getDataField(e, 'id');
		
			var flag =  $(event.target).prop('checked');

			this.todos[index].completed = flag;
			// this._toggle( [ id ], flag );
			this.render('toggle');

		},
		editingMode: function (e) {

			// console.log($(e.target).closest('li'));

			// var $li = $(e.target).closest('li');
			// console.log($li.hasClas('completed'));
			// // if (data.custom)
			// :todo maybe, just maybe, we need to remove this hack. so we can edit name of purchased element too.
			// but for this moment it'll require a lot of changes on backend, so i gave up



			var $input = $(e.target)
							.closest('li').addClass('editing')
							.find('.edit').removeClass('hide');

			var val    = $input.val();

			// this is our hidden input
			$input.val('').focus().val(val);

		},
		editKeyup: function (e) {
			if (e.which === ENTER_KEY) {
				e.target.blur();
			}
			if (e.which === ESCAPE_KEY) {
				$(e.target).data('abort', true).blur();
			}
		},
		// This is a Rename function
		update: async function (e) {
			var el  = e.target;
			var $el = $(el);
			var val = $el.val().trim(); // :todo remove to name

			var index       = this.getIndexFromEl(el);
			// var $ingredient = this.getElementFromEvent(e.target);

			var id        = this.getDataField(e, 'id');
			var is_custom = this.getDataField(e, 'custom');

			
			// : suggestion - maybe it'll be better 
			// to just keep previous value, when we delete all from input
			if ( !val ) {
				this.destroy(e);
				return ;
			}

			if ($el.data('abort')) {
				$el.data('abort', false);
				this.render('abort');
				return ;
			} 
			

			if( val == this.todos[index].name ){
				this.render('abort');
				return ;
			}
			
			// this is a brand new ingredient - we'll update the name
			if( is_custom ){

				// this._rename_async( id, val );
				this.todos[index].name = val;
				this.render('rename');
				return ;

			} else {

				
				// 1_ we delete an ultimate ingredient from GL
				// await this._unattach_async( [ id ] );	
				this.todos.splice(index, 1);


				// 2_ we create a new element and attach it to a GL
				var response;
				// try {     
				// 	response = await this._create_async(val);

				// } catch (e) {
				// 	Raven.captureException(e);
				// }

				var obj = this.getItemObject('new-id', val);
				// console.log(obj);
				this.todos.push(obj);
				// console.log(this.todos);
				


				// :todo this can be moved to render, but how you'll get
			
			  	var $clonee = $(this.selector).last().clone();
				// $clonee.data('element', obj);
				$clonee.removeClass('hide').attr('data-element', JSON.stringify(obj));
				$clonee.find('.list__item__center span')
					.html(obj.name).after('<input class="text-input edit hide" type="text" value="' + obj.name + '">');
				

				$(this.selector).last()
					.before($clonee);


				// end duplicate		
				this.render('upd');

			}	

		

			//jsue in case, if something go wrong
			// if ($el.data('abort')) {
			// 	$el.data('abort', false);
			// } else {

				// console.log(this.todos[index]);
				// this.todos[index].name = val;
			// }
			// this.render();
		},
		destroy: async function (e) {
			var id = this.getDataField(e, 'id');

			// await this._unattach_async( [ id ] );
			this.todos.splice(this.getIndexFromEl(e.target), 1);
			this.render('destroy');
		},
		getDataField: function(e, field){
			var $item = this.getElementFromEvent(e.target);
			// console.log(e);
			// maybe later we'll exclude few items, so pick will be helpful
			if( $item.data().element ){
				var value = _.pick($item.data().element, field);
				return value[field];	
			}
			return false;
			
		},
		_create_async: async function(name){
			// var options = {
			// 	name        : name,
			// 	groceryId   : this.groceryId,
			// 	departmentId: this.departmentId,
			// };
			// return new Promise(function(cb){
			// 	$.ajax({
			// 		type: "POST",
			// 		url: '/create/ing/',
			// 		dataType: 'json',
			// 		data: options,				
					
			// 	})
			// 	.done(function(response){
			// 		cb(response);
			// 	});
			// });


		},
		_rename_async: async function(id, name){
			// var options = {			
			// 	id  : id,
			// 	name: name
			// };
			// return new Promise(function(cb){
			// 	$.ajax({
			// 		type: "POST",
			// 		url: '/changename/',
			// 		dataType: 'json',
			// 		data: options			
			// 	})
			// 	.done(cb);
			// });

		},
		_unattach_async: async function( ids ){
			// var options = {			
			// 	secondArray:  ids,
			// 	groceryId: this.groceryId
			// };
			// return new Promise(function(cb){
			// 	$.ajax({
			// 		type: "POST",
			// 		url: '/unattach/',
			// 		dataType: 'json',
			// 		data: options			
			// 	})
			// 	.done(cb);
			// });
		},
		_toggle: async function(ids, flag){
			// var options = {
			// 	ingredients: ids,
			// 	groceryId  : this.groceryId,
			// 	type       : (flag) ? 'add' :'remove'
			// };

			// return new Promise(function(cb){
			// 	$.ajax({
			// 		type: "POST",
			// 		url: '/togglepurchased/',
			// 		dataType: 'json',
			// 		data: options			
			// 	})
			// 	.done(cb);
			// });
			
		},
		// has a huge trobules with non-have data departments
		redirectToOtherDepartment: function(){
			var path = "/shopping/" + this.groceryId + '/' + this.value;
  			window.location.replace(path);
		}
	};

	App.init();
});


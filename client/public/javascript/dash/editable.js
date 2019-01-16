(function(document, window, $) {
  'use strict';

  var Site = window.Site;

  $(document).ready(function($) {
    Site.run();
  });

  // Example editable Table
  // ----------------------
  $('#editableTable').editableTableWidget().numericInputExample().find('td:first').focus();

	$('#editableTable td').on('change', function(event, newValue) {

		// do something with the new cell value 
		console.log(event);
		console.log(newValue);
		// if (....) { 
			// return false; // reject change
		// }

	});

})(document, window, jQuery);

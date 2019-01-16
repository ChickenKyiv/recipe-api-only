/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("masonry", {
  mode: "init",
  defaults: {
    itemSelector: ".masonry-item"
  },
  init: function(context) {
    if (typeof $.fn.masonry === "undefined") return;
    var defaults = $.components.getDefaults('masonry');

    var callback = function() {
      $('[data-plugin="masonry"]', context).each(function() {
        var $this = $(this),
          options = $.extend(true, {}, defaults, $this.data());

        $this.masonry(options);
      });
    }
    if (context !== document) {
      callback();
    } else {
      $(window).on('load', function() {
        callback();
      });
    }
  }
});

/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("toolbar", {
  mode: "init",
  init: function(context) {
    if (!$.fn.toolbar) return;

    var defaults = $.components.getDefaults("toolbar");

    $('[data-plugin="toolbar"]', context).each(function() {
      var $this = $(this);
      var content = $this.data("toolbar");

      var options = $.extend(true, {}, defaults);

      if (content) {
        options.content = content;
      }

      $this.toolbar(options);
    });
  }
});

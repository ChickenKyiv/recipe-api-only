/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("slidePanel", {
  mode: "manual",
  defaults: {
    closeSelector: '.slidePanel-close',
    mouseDragHandler: '.slidePanel-handler',
    loading: {
      template: function(options) {
        return '<div class="' + options.classes.loading + '">' +
          '<div class="loader loader-default"></div>' +
          '</div>';
      },
      showCallback: function(options) {
        this.$el.addClass(options.classes.loading + '-show');
      },
      hideCallback: function(options) {
        this.$el.removeClass(options.classes.loading + '-show');
      }
    }
  }
});

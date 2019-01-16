/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("alertify", {
  mode: "api",
  defaults: {
    type: "alert",
    labels: {
      ok: "OK",
      cancel: "Cancel"
    },
    delay: 5000,
    buttonReverse: false,
    buttonFocus: "ok"
  },
  api: function() {
    if (typeof alertify === "undefined") return;

    var defaults = $.components.getDefaults("alertify");

    $(document).on('click.site.alertify', '[data-plugin="alertify"]', function() {
      var $this = $(this),
        options = $.extend(true, {}, defaults, $this.data());

      if (options.labelOk) {
        options.labels.ok = options.labelOk;
      }

      if (options.labelCancel) {
        options.labels.cancel = options.labelCancel;
      }
      alertify.set(options);

      switch (options.type) {
        case "alert":
          alertify.alert(options.alertMessage);
          break;
        case "confirm":
          alertify.confirm(options.confirmTitle, function(e) {
            if (e) {
              alertify.success(options.successMessage);
            } else {
              alertify.error(options.errorMessage);
            }
          });
          break;
        case "prompt":
          alertify.prompt(options.promptTitle, function(e, str) {
            options.successMessage.replace('%s', str);
            options.errorMessage.replace('%s', str);
            if (e) {
              alertify.success(options.successMessage);
            } else {
              alertify.error(options.errorMessage);
            }
          }, options.defaultMessage);
          break;
        case "log":
          alertify.log(options.logMessage);
          break;
        case "success":
          alertify.success(options.successMessage);
          break;
        case "error":
          alertify.error(options.errorMessage);
          break;
      }
    });
  }
});

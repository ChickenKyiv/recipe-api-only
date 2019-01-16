/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ladda", {
  mode: "init",
  defaults: {
    timeout: 2000
  },
  init: function() {
    if (typeof Ladda === "undefined") return;

    var defaults = $.components.getDefaults("ladda");
    Ladda.bind('[data-plugin="ladda"]', defaults);
  }
});

$.components.register("laddaProgress", {
  mode: "init",
  defaults: {
    init: function(instance) {
      var progress = 0;
      var interval = setInterval(function() {
        progress = Math.min(progress + Math.random() * 0.1, 1);
        instance.setProgress(progress);

        if (progress === 1) {
          instance.stop();
          clearInterval(interval);
        }
      }, 200);
    }
  },
  init: function() {
    if (typeof Ladda === 'undefined') return;

    var defaults = $.components.getDefaults("laddaProgress");
    // Bind progress buttons and simulate loading progress
    Ladda.bind('[data-plugin="laddaProgress"]', defaults);
  }
});

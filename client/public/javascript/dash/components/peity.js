/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("peityBar", {
  mode: "init",
  defaults: {
    delimiter: ",",
    fill: [$.colors("primary", 400)],
    height: 22,
    max: null,
    min: 0,
    padding: 0.1,
    width: 44
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityBar");

    $('[data-plugin="peityBar"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[400]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('bar', options);
    });
  }
});

$.components.register("peityDonut", {
  mode: "init",
  defaults: {
    delimiter: null,
    fill: [$.colors("primary", 700), $.colors("primary", 400), $.colors("primary", 200)],
    height: null,
    innerRadius: null,
    radius: 11,
    width: null
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityDonut");

    $('[data-plugin="peityDonut"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('donut', options);
    });
  }
});

$.components.register("peityLine", {
  mode: "init",
  defaults: {
    delimiter: ",",
    fill: [$.colors("primary", 200)],
    height: 22,
    max: null,
    min: 0,
    stroke: $.colors("primary", 600),
    strokeWidth: 1,
    width: 44
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityLine");

    $('[data-plugin="peityLine"]', context).each(function() {
      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[200]];
          defaults.stroke = skinColors[600];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('line', options);
    });
  }
});

$.components.register("peityPie", {
  mode: "init",
  defaults: {
    delimiter: null,
    fill: [$.colors("primary", 700), $.colors("primary", 400), $.colors("primary", 200)],
    height: null,
    radius: 11,
    width: null
  },
  init: function(context) {
    if (!$.fn.peity) return;

    var defaults = $.components.getDefaults("peityPie");

    $('[data-plugin="peityPie"]', context).each(function() {

      var $this = $(this),
        options = $this.data();

      if (options.skin) {
        if ($.colors(options.skin)) {
          var skinColors = $.colors(options.skin);
          defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
        }
      }

      options = $.extend(true, {}, defaults, options);

      $this.peity('pie', options);
    });
  }
});

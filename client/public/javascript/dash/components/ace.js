/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ace", {
  mode: "init",
  defaults: {},
  init: function(context) {
    if (typeof ace === "undefined") return;

    //ace.config.set("themePath", "../theme");
    ace.config.loadModule("ace/ext/language_tools");

    $('[data-plugin="ace"]', context).each(function() {
      var id = $(this).attr("id"),
        mode = $(this).data("mode"),
        theme = $(this).data("theme"),
        editor = ace.edit(id);

      editor.container.style.opacity = "";
      if (mode) {
        editor.session.setMode("ace/mode/" + mode);
      }
      if (theme) {
        editor.setTheme("ace/theme/" + theme);
      }

      editor.setOption("maxLines", 40);
      editor.setAutoScrollEditorIntoView(true);

      ace.config.loadModule("ace/ext/language_tools", function() {
        editor.setOptions({
          enableSnippets: true,
          enableBasicAutocompletion: true
        });
      });
    });
  }
});

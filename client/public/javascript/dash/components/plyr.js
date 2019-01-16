/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("plyr", {
  mode: "init",
  init: function() {
    if (typeof plyr === "undefined") return;

    (function(d, u) {
      var a = new XMLHttpRequest(),
        b = d.body;

      // Check for CORS support
      if ("withCredentials" in a) {
        a.open("GET", u, true);
        a.send();
        a.onload = function() {
          var c = d.createElement("div");
          c.style.display = "none";
          c.innerHTML = a.responseText;
          b.insertBefore(c, b.childNodes[0]);
        }
      }
    })(document, "https://cdn.plyr.io/1.1.5/sprite.svg");

    plyr.setup();
  }
});

/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
(function(window, document, $) {
  'use strict';

  var $body = $(document.body);

  // configs setup
  // =============
  $.configs.set('site', {
    fontFamily: "Noto Sans, sans-serif",
    primaryColor: "blue"
  });

  window.Site = $.site.extend({
    run: function(next) {
      // polyfill
      this.polyfillIEWidth();

      // Menubar setup
      // =============
      if (typeof $.site.menu !== 'undefined') {
        $.site.menu.init();
      }

      if (typeof $.site.menubar !== 'undefined') {
        $(".site-menubar").on('changing.site.menubar', function() {
          $('[data-toggle="menubar"]').each(function() {
            var $this = $(this);
            var $hamburger = $(this).find('.hamburger');

            function toggle($el) {
              $el.toggleClass('hided', !$.site.menubar.opened);
              $el.toggleClass('unfolded', !$.site.menubar.folded);
            }
            if ($hamburger.length > 0) {
              toggle($hamburger);
            } else {
              toggle($this);
            }
          });

          $.site.menu.refresh();
        });

        $(document).on('click', '[data-toggle="collapse"]', function(e) {
          var $trigger = $(e.target);
          if (!$trigger.is('[data-toggle="collapse"]')) {
            $trigger = $trigger.parents('[data-toggle="collapse"]');
          }
          var href;
          var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
          var $target = $(target);
          if ($target.hasClass('navbar-search-overlap')) {
            $target.find('input').focus();

            e.preventDefault();
          } else if ($target.attr('id') === 'site-navbar-collapse') {
            var isOpen = !$trigger.hasClass('collapsed');
            $body.addClass('site-navbar-collapsing');

            $body.toggleClass('site-navbar-collapse-show', isOpen);

            setTimeout(function() {
              $body.removeClass('site-navbar-collapsing');
            }, 350);

            if (isOpen) {
              $.site.menubar.scrollable.update();
            }
          }
        });

        $(document).on('click', '[data-toggle="menubar"]', function() {
          $.site.menubar.toggle();

          return false;
        });

        $.site.menubar.init();

        Breakpoints.on('change', function() {
          $.site.menubar.change();
        });
      }

      // Gridmenu setup
      // ==============
      if (typeof $.site.gridmenu !== 'undefined') {
        $.site.gridmenu.init();
      }

      // Sidebar setup
      // =============
      if (typeof $.site.sidebar !== 'undefined') {
        $.site.sidebar.init();
      }

      // Tooltip setup
      // =============
      $(document).tooltip({
        selector: '[data-tooltip=true]',
        container: 'body'
      });

      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover();

      // Fullscreen
      // ==========
      if (typeof screenfull !== 'undefined') {
        $(document).on('click', '[data-toggle="fullscreen"]', function() {
          if (screenfull.enabled) {
            screenfull.toggle();
          }

          return false;
        });

        if (screenfull.enabled) {
          document.addEventListener(screenfull.raw.fullscreenchange, function() {
            $('[data-toggle="fullscreen"]').toggleClass('active', screenfull.isFullscreen);
          });
        }
      }

      // Dropdown menu setup
      // ===================
      $body.on('click', '.dropdown-menu-media', function(e) {
        e.stopPropagation();
      });


      // Page Animate setup
      // ==================
      if (typeof $.animsition !== 'undefined') {
        this.loadAnimate(function() {
          $('.animsition').css({
            "animation-duration": '0s'
          });
          next();
        });
      } else {
        next();
      }

      // Mega navbar setup
      // =================
      // $(document).on('click', '.navbar-mega .dropdown-menu', function(e) {
      //   e.stopPropagation();
      // });

      // $(document).on('show.bs.dropdown', function(e) {
      //   var $target = $(e.target);
      //   var $trigger = e.relatedTarget ? $(e.relatedTarget) : $target.children('[data-toggle="dropdown"]');

      //   var animation = $trigger.data('animation');
      //   if (animation) {
      //     var $menu = $target.children('.dropdown-menu');
      //     $menu.addClass('animation-' + animation);

      //     $menu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      //       $menu.removeClass('animation-' + animation);
      //     });
      //   }
      // });

      // $(document).on('shown.bs.dropdown', function(e) {
      //   var $target = $(e.target);
      //   var $menu = $target.find('.dropdown-menu-media > .list-group');

      //   if ($menu.length > 0) {
      //     var api = $menu.data('asScrollable');
      //     if (api) {
      //       api.update();
      //     } else {
      //       var defaults = $.components.getDefaults("scrollable");
      //       $menu.asScrollable(defaults);
      //     }
      //   }
      // });

      // Two column Sidebar setup
      // ========================
      $(document).on('click', '.page-aside-switch', function() {
        var isOpen = $('.page-aside').hasClass('open');

        if (isOpen) {
          $('.page-aside').removeClass('open');
        } else {
          $('.page-aside').addClass('open');
        }
      });

      // Init Loaded Components
      // ======================
      $.components.init();

      this.startTour();
    },

    polyfillIEWidth: function() {
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
          document.createTextNode(
            '@-ms-viewport{width:auto!important}'
          )
        );
        document.querySelector('head').appendChild(msViewportStyle);
      }
    },

    loadAnimate: function(callback) {
      return $.components.call("animsition", document, callback);
    },

    startTour: function(flag) {
      if (typeof this.tour === 'undefined') {
        if (typeof introJs === 'undefined') {
          return;
        }

        var tourOptions = $.configs.get('tour'),
          self = this;
        flag = $('body').css('overflow');
        this.tour = introJs();

        this.tour.onbeforechange(function() {
          $('body').css('overflow', 'hidden');
        });

        this.tour.oncomplete(function() {
          $('body').css('overflow', flag);
        });

        this.tour.onexit(function() {
          $('body').css('overflow', flag);
        });

        this.tour.setOptions(tourOptions);
        $('[data-slug="advanced-tour"]').on('click', function() {
          self.tour.start();
        });
      }
      // if (window.localStorage && window.localStorage.getItem('startTour') && (flag !== true)) {
      //   return;
      // } else {
      //   this.tour.start();
      //   window.localStorage.setItem('startTour', true);
      // }
    }
  });

})(window, document, jQuery);

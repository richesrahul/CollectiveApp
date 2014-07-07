// Generated by CoffeeScript 2.0.0-beta8
void function () {
  var YTMenu;
  angular.module('CollectiveApp', [
    'CollectiveApp.controllers',
    'CollectiveApp.services',
    'CollectiveApp.directives',
    'infinite-scroll'
  ]);
  YTMenu = function () {
    var init;
    init = function () {
      [].slice.call(document.querySelectorAll('.dr-menu')).forEach(function (el, i) {
        var icon, open, trigger;
        trigger = el.querySelector('div.dr-trigger');
        icon = trigger.querySelector('i.fa-bars');
        open = false;
        trigger.addEventListener('click', function (event) {
          if (!open) {
            el.className += ' dr-menu-open';
            open = true;
          }
        }, false);
        icon.addEventListener('click', function (event) {
          if (open) {
            event.stopPropagation();
            open = false;
            el.className = el.className.replace(/\bdr-menu-open\b/, '');
            return false;
          }
        }, false);
      });
    };
    init();
  }();
}.call(this);
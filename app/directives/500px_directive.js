// Generated by CoffeeScript 2.0.0-beta8
angular.module('CollectiveApp.directives', []).directive('ngRepeatEnd', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      if (scope.$last === true)
        $timeout(function () {
          scope.$emit('show');
        });
    }
  };
}).directive('whenScrolled', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      $timeout(function () {
        var raw;
        raw = element[0];
        return $(window).bind('scroll', function () {
          if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
            scope.$apply(attr.whenScrolled);
            return;
          }
        });
      });
    }
  };
});

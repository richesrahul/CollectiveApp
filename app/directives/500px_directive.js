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
});
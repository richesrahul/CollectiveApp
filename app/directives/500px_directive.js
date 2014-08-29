// Generated by CoffeeScript 2.0.0-beta8
ApplicationDirective.directive('ngRepeatEnd', function ($timeout) {
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
ApplicationDirective.directive('infiScroll', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, elm, attr) {
      $timeout(function () {
        var callMore, handler, newHeight, scroll_container;
        scroll_container = $(document);
        callMore = true;
        newHeight = void 0;
        handler = function () {
          var docHeight, elmHeight, scrolledHeight, winHeight;
          docHeight = scroll_container.height();
          winHeight = $(window).height() + 1e3;
          scrolledHeight = scroll_container.scrollTop();
          elmHeight = $(elm).height();
          (function () {
            if (docHeight <= winHeight + scrolledHeight)
              if (!(newHeight === elmHeight)) {
                scope.$eval(attr.infiScroll);
                newHeight = elmHeight;
              }
          }());
        };
        scroll_container.on('scroll', handler);
        scroll_container.on('scroll', function () {
          $('.cd-timeline-block').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * .75 && $(this).find('.cd-timeline-img').hasClass('is-hidden'))
              $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
          });
        });
        scope.$on('$destroy', function () {
          return scroll_container.off('scroll', handler);
        });
      }, 300);
    }
  };
});

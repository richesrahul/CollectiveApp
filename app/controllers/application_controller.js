// Generated by CoffeeScript 2.0.0-beta8
ApplicationController.controller('ApplicationController', function ($scope) {
  var activityIndicatorOff, activityIndicatorOn, captionOff, captionOn, closeButtonOff, closeButtonOn, overlayOff, overlayOn;
  $scope.setActive = function (options) {
    if (null == options)
      options = [];
    $scope.fhpxActive = '';
    $scope.popularActive = '';
    $scope.upcomingActive = '';
    $scope.editorsActive = '';
    $scope.freshActive = '';
    $scope.dribbleActive = '';
    return angular.forEach(options, function (key, value) {
      return $scope[key + 'Active'] = 'btn-active';
    });
  };
  $scope.$on('show', function (event) {
    var currentScope;
    $('.loading').remove();
    new AnimOnScroll(document.getElementById('grids'), {
      minDuration: .4,
      maxDuration: .7,
      viewportFactor: .2
    });
    currentScope = $scope.$$listeners.show[0]['arguments'][0].targetScope;
    if (currentScope.service.photos.length <= 20) {
      console.log('lightbox loading...');
      $('.grid a').imageLightbox({
        onStart: function () {
          overlayOn();
        },
        onLoadStart: function () {
          activityIndicatorOn();
        },
        onLoadEnd: function () {
          activityIndicatorOff();
        },
        onEnd: function () {
          overlayOff();
          activityIndicatorOff();
        }
      });
    }
  });
  activityIndicatorOn = function () {
    $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
  };
  activityIndicatorOff = function () {
    $('#imagelightbox-loading').remove();
  };
  overlayOn = function () {
    $('<div id="imagelightbox-overlay"></div>').appendTo('body');
  };
  overlayOff = function () {
    $('#imagelightbox-overlay').remove();
  };
  closeButtonOn = function (instance) {
    $('<a href="#" id="imagelightbox-close">Close</a>').appendTo('body').on('click', function () {
      $(this).remove();
      instance.quitImageLightbox();
      return false;
    });
  };
  closeButtonOff = function () {
    $('#imagelightbox-close').remove();
  };
  captionOn = function () {
    var description;
    description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
    if (description.length > 0)
      $('<div id="imagelightbox-caption">' + description + '</div>').appendTo('body');
  };
  return captionOff = function () {
    $('#imagelightbox-caption').remove();
  };
});

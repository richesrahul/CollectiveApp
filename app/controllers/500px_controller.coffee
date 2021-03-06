ApplicationController.controller "500pxController", ($scope, $location, fhpxAPI, $routeParams, $timeout) ->
	$scope.setActive(['fhpx', $routeParams.category])
	$scope.service = new fhpxAPI($routeParams)
	$('.hyperlink-nav li > a').data('main', $routeParams.category)
	$scope.categories = ['Abstract', 'Macro', 'Animals', 'Nature', 'Black & White', 'Celebrities', 'People', 'City & Architecture', 'Performing Arts', 'Commercial', 'Sport', 'Concert', 'Still Life', 'Family', 'Street', 'Fashion', 'Transportation', 'Film', 'Travel', 'Fine Art', 'Underwater', 'Food', 'Urban Exploration', 'Journalism', 'Wedding', 'Landscapes', 'Uncategorized']
	$('[data-category="Nude"]', '.categories').css('opacity', '0')
	if $routeParams.category is 'popular'
		if _.isNull(window.localStorage.getItem('ca_photos')) or $routeParams.only
			$scope.service.firstPage()
		else
			$scope.service.photos = JSON.parse(window.localStorage.getItem('ca_photos'))
	else
		$scope.service.nextPage()


	$scope.selectCategory = ($event) =>
		elem = $($event.target)
		category = elem.data('category')
		$('.link-active').removeClass('link-active')
		elem.addClass('link-active')
		$timeout (=>
			$scope.$apply =>
				$location.path("/500px/#{$('.hyperlink-nav li > a').data('main')}/#{category}").replace()
				return
		), 1

	# working on IScroll functionality
	###
		$scope.$parent.myScrollOptions =
			wrapper:
				snap: false
				mouseWheel: true
				bounceEasing: 'bounce'
				on: [
					{
						scrollEnd: (e) ->
							if ($($scope.$parent.myScroll['wrapper'].scroller).offset().top >= -Math.abs($('.grids-wrapper', this.wrapper).height()) + 640)
								#alert "finished scrolling wrapper"
								$scope.service.nextPage()
							return
					}
					{
						scroll: (e) ->
							console.log "finished scrolling wrapper"
							return
					}
				]
	###

	return

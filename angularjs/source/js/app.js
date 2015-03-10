;(function(exports) {

	angular.module('ngAppAssignment', [])

	.controller('assignmentController', [
		
		'$scope',

		function($scope) {

			$scope.user = {
				'firstname': 'Your firstname',
				'lastname': 'Your lastname',
				'city': 'Your city',
				'website': 'www.domain.com',
				'cv': 'www.domain.com/cv.pdf'
			}

			$scope.list = {
				"1": {
					"title": "Vestas A/S",
					"desc": "Frontend developer",
					"year": 2015
				},
				"2": {
					"title": "K&oslash;benhavn Kommune",
					"desc": "Frontend developer",
					"year": 2014
				},
				"3": {
					"title": "K&oslash;benhavn Kommune",
					"desc": "Frontend developer",
					"year": 2013
				}
			}

			$scope.filteredList = $scope.list;

			function options() {

				$scope.yearsList = _.uniq( _.pluck($scope.list, 'year') );
				console.log($scope.yearsList);
			}
			options();

			$scope.updateList = function (year) {

				// simple function for updating the list in the assignment project
				if(year) {
					$scope.filteredList = _.where($scope.list, {'year' : year});
				} else {
					$scope.filteredList = $scope.list;
				}

			}
		}
	]);

})(window);
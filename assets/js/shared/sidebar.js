var ipisis = angular.module('ipisis');

ipisis.directive('sidebar', function () {
	return {
		restric: 'E',
		templateUrl: 'templates/public/sidebar.html',
		scope: {
			toggled: "="
		},
		controller: 'sidebarCtrl'
	};
});

ipisis.controller('sidebarCtrl', ['$scope', 'AuthService', function($scope, AuthService){
	$scope.rol = AuthService.getRol();

	$scope.$on('renovarRol', function (evt) {
		$scope.rol = AuthService.getRol();
	});

	$scope.isProfesor = function () {
		return $scope.rol === "503";
	};

	$scope.isEstudiante = function () {
		return $scope.rol === "1005";
	};

	$scope.isJefe = function () {
		return $scope.rol === "505";
	};

	$scope.isComite = function () {
		return $scope.rol === "504";
	}
}]);

angular.module('ipisis')
.factory('JefeService', ['$http', function($http) {
	return {

		// Servicio para obtener una lista de los profesores registrados en el sistema.
		getProfesores: function() {
			var profesores = $http({
				url: '/profesor/getAll',
				method: 'GET',
			});
			return profesores;
		}
	};
}]);

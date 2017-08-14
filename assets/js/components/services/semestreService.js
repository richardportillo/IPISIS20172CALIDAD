angular.module('ipisis')
.factory('semestreService', ["$http", function($http) {
  return {
    obtenerSemestres: function() {
      var semestre = $http({
        url: '/semestre/getAll',
        method: 'GET',
      });
      return semestre;
    }
  }
}]);

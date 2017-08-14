angular.module('ipisis')
.controller('CrearEquipoController', ['$scope', '$log', '$ngConfirm', 'EquipoService', 'EstudianteService',
function ($scope, $log, $ngConfirm, EquipoService, EstudianteService) {
  $scope.estudiantes = []

  EstudianteService.getEstudianteSession()
  .then(function (res) {
    $scope.estudiantes.push(res.data)
  })
  .catch(function (err) {
    $log.log(err);
  });

  $scope.addEstudiante = function () {
    for (var i in $scope.estudiantes) {
      if ($scope.estudiantes[i].nombreUsuario == $scope.usuarioMares) {
        return;
      }
    }

    EstudianteService.getEstudiante({usuario: $scope.usuarioMares})
    .then(function (res) {
      $scope.estudiantes.push(res.data);
    })
    .catch(function (err) {
      $log.log(err);
    });
  }

  $scope.crearEquipo = function () {
    var equipo = null;
    var estudiantesId = [];
    angular.forEach($scope.estudiantes, function (estudiante, i) {
      estudiantesId.push(estudiante.id);
    });

    equipo = {
      nombre: $scope.nombreEquipo,
      estudiantesId: estudiantesId
    }

    EquipoService.crear(equipo)
    .then(function (res) {
      $log.log(res);
    })
    .catch(function (err) {
      $log.log(err);
    });
  }
}]);

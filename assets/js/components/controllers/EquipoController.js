angular.module('ipisis')
.controller('EquipoController', ['$scope', '$log', '$state', '$stateParams', '$ngConfirm', 'EquipoService', 'EstudianteService',
function ($scope, $log, $state, $stateParams, $ngConfirm, EquipoService, EstudianteService) {

  if (!$stateParams.equipo) {
    $state.go('equipos.lista');
  } else {
    $scope.equipo = $stateParams.equipo;
  }

  $scope.cargarInformacion = function () {
    EquipoService.getEquipoInformacion({equipoCodigo: $scope.equipo.codigo})
    .then(function (res) {
      $scope.equipo = res.data;
    })
    .catch(function (err) {
      $log.log(err);
    });
  }
  $scope.cargarInformacion();

}]);

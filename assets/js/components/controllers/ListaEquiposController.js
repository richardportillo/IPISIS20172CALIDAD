angular.module('ipisis')
.controller('ListaEquiposController', ['$scope', '$log', '$state', '$stateParams', '$ngConfirm', 'EquipoService', 'EstudianteService',
function ($scope, $log, $state, $stateParams, $ngConfirm, EquipoService, EstudianteService) {

  EquipoService.getEquiposSession()
  .then(function (res) {
    $scope.equipos = res.data.equipos;
  })
  .catch(function (err) {
    $log.log(err);
  });

  $scope.seleccionarEquipo = function (equipo) {
    $state.go('equipo', {equipo: equipo})
  }
}]);

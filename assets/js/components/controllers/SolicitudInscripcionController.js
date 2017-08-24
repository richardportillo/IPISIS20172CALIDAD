angular.module('ipisis')
.controller('SolicitudInscripcionController', ['$scope','$ngConfirm', 'OfertaService', 'InscripcionService', 'SemestreService',
function ($scope, $ngConfirm, OfertaService, InscripcionService, SemestreService) {
  var semestreActual = null;
  cargarInformacion();

  $scope.seleccionar = function (inscripcion) {
    $scope.inscripcionActual = inscripcion;
    $ngConfirm({
      title: '',
      contentUrl: 'templates/private/jefe/detalle-inscripcion.html',
      backgroundDismiss: true,
      columnClass: 'l',
      scope: $scope,
      buttons: {
        Salir: {
          btnClass: 'btn-default',
          action: function (scope, button) {
            $scope.error = false;
            return true;
          }
        },
        Rechazar: {
          btnClass: 'btn-danger',
          action: function (scope, button) {
            if (!$scope.observacion) {
              $scope.error = true;
              $scope.mensajeError = 'Debe ingresar la observación.';
              return false;
            }

            parametros = {
              accion: 2,
              inscripcionId: $scope.inscripcionActual.id,
              observacion: $scope.observacion
            };

            InscripcionService.gestionarInscripcion(parametros)
            .success(function (resultado) {
              $scope.error = false;
              $scope.observacion = '';
              cargarInformacion();
            })
            .error(function (err) {
              $scope.error = false;
            });
          }
        },
        Aceptar: {
          btnClass: 'btn-success',
          action: function (scope, button) {
            if (!$scope.observacion) {
              $scope.error = true;
              $scope.mensajeError = 'Debe ingresar la observación.';
              return false;
            }

            parametros = {
              accion: 1,
              inscripcionId: $scope.inscripcionActual.id,
              observacion: $scope.observacion
            };

            InscripcionService.gestionarInscripcion(parametros)
            .success(function (resultado) {
              $scope.error = false;
              $scope.observacion = '';
              cargarInformacion();
            })
            .error(function (err) {
              $scope.error = false;
            });
          }
        },
      }
    });
  }

  function cargarInformacion() {
    SemestreService.getSemestreActual()
    .then(function (res) {
      semestreActual = res.data;
      return InscripcionService.getAllBySemestre({semestreCodigo: semestreActual.codigo});
    })
    .then(function (res) {
        $scope.inscripciones = res.data;
    })
    .catch(function (err) {
      $log.log(err);
    })
  }
}]);

angular.module('ipisis')
.controller('InscripcionController', ['$scope','$ngConfirm', 'OfertaService', 'InscripcionService',
function ($scope, $ngConfirm, OfertaService, InscripcionService ) {
    $scope.inscripcion = {
      asignatura: 0
    };

		OfertaService.getAllBySemestre({semestreCodigo: '2017-2'})
		.success(function(resultado) {
			$scope.ofertas = resultado;
		}).
		error(function (err) {
			console.log(err);
		});

		$scope.seleccionar = function (oferta) {
			$scope.ofertaSeleccionada = oferta;
      $ngConfirm({
        title: '',
        contentUrl: 'templates/private/equipo/detalleInscripcion.html',
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
          Inscribir: {
            btnClass: 'btn-success',
            action: function (scope, button) {
              var credenciales = {
                equipoCodigo: $scope.equipo.codigo,
                ofertaId: $scope.ofertaSeleccionada.id,
                materiaCodigo: $scope.materia
              };
              console.log(credenciales);
              InscripcionService.inscribir(credenciales)
                .success(function (resultado) {
                  OfertaService.getAllBySemestre({semestreCodigo: '2017-2'})
                  .success(function(resultado) {
                    $scope.ofertas = resultado;
                  }).
                  error(function (err) {
                    console.log(err);
                  });
                  $ngConfirm('Inscripción existosa.');
                })
                .error(function (err) {
                  if (err.code) {
                    code = err.code;
                    if (code == 1) {
                      $ngConfirm('La inscripción no ha sido completada');
                    } else if (code == 2) {
                      $ngConfirm('El equipo ya está inscrito a esta oferta.');
                    } else if (code == 3) {
                      $ngConfirm('El equipo ya está matriculado');
                    } else if (code == 4) {
                      $ngConfirm('El equipo ya está inscrito a la idea de esta oferta.');
                    } else if (code == 5) {
                      $ngConfirm('El equipo ya está matriculado en un proyecto.');
                    } else if (code == 6) {
                      $ngConfirm('El equipo ya tiene una inscripción activa.');
                    } else if (code == 7) {
                      $scope.estudiantes = err.estudiantes;
                      $ngConfirm({
                        title: 'Error',
                        content: '<p>Los siguientes estudiantes ya están inscritos en la cantidad máxima de inscripciones para la asignatura seleccionada.<p> \
                        <p ng-repeat="est in estudiantes"><b>{{est.nombre}}<b/></p>',
                        backgroundDismiss: true,
                        scope: $scope,
                        buttons: {
                          Salir: {
                            btnClass: 'btn-default',
                            action: function (scope, buttons) {
                            }
                          }
                        }
                      });
                    } else if (code == 8) {
                      $scope.estudiantes = err.estudiantes;
                      $ngConfirm({
                        title: 'Error',
                        content: '<p>Los siguientes estudiantes ya están matriculados en la asignatura seleccionada asignatura.<p> \
                        <p ng-repeat="est in estudiantes"><b>{{est.nombre}}</b></p>',
                        backgroundDismiss: true,
                        scope: $scope,
                        buttons: {
                          Salir: {
                            btnClass: 'btn-default',
                            action: function (scope, buttons) {

                            }
                          }
                        }
                      });
                    } else if (code == 9) {
                      $ngConfirm('La inscripción no ha sido completada');
                    } else if (code == 10) {
                      $ngConfirm('La inscripción no ha sido completada');
                    } else {
                      $ngConfirm('La inscripción no ha sido completada');
                    }
                  }
                  console.log(err);
                });
            }
          },
        }
      });
		}
}]);

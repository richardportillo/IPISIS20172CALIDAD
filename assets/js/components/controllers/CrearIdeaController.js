var ipisis = angular.module('ipisis');

ipisis.controller('CrearIdeaController', ['$scope', '$state', 'IdeaService', 'PrerrequisitoService',
  function($scope, $state, IdeaService, PrerrequisitoService) {

    $scope.idea = {
      titulo: '',
      descripcion: '',
      numEquipos: '',
      numMiembros: '',
      proponentes: [],
      asignaturas: [],
      prerrequisitos: []
    };

    $scope.nomMaterias = [];

    PrerrequisitoService.getAreasPrerrequisitos()
      .success(function(data) {
        $scope.areas = data;
      });

    IdeaService.obtenerAsignaturas()
      .success(function (data) {
        $scope.asignaturas = data
      });

    /*
    Función 'guardarPrerrequisito', agrega en el arreglo 'idea.materia' el código
    de la materia que será un prerrequisito de la idea, y en el arreglo
    'nomMaterias' el nombre de dicha materia para mostrarla en la lista de selección
    de prerrequisitos
    */
    $scope.guardarPrerrequisito = function(codigo, nombre) {
      $scope.idea.prerrequisitos.push(codigo);
      $scope.nomMaterias.push(nombre);
    };

    /*
    Función 'eliminarPrerrequisito', elimina en el arreglo 'idea.materia' el código
    de la materia que ya no será un prerrequisito de la idea, y en el arreglo
    'nomMaterias' el nombre de dicha materia para quitarla de la lista de selección
    de prerrequisitos
    */
    $scope.eliminarPrerrequisito = function(index) {
      $scope.idea.prerrequisitos.splice(index, 1);
      $scope.nomMaterias.splice(index, 1);
    };

    $scope.inscribirIdea = function() {
      IdeaService.crearIdea($scope.idea)
        .success(function(record) {
          },
          function(err) {
            console.log(err)
          });
    };

    $scope.cargarPagina = function () {
      $state.reload();
    }

    $scope.rangoAsignaturas = function(j) {
      var range = [];
      for (var i = 1; i <= j; i++) {
        range.push(i);
      }
      $scope.idea.asignaturas = new Array(j);
      $scope.rangeAsignaturas = range;
    };

    $scope.rangoProponentes = function(j) {
      var range = [];
      for (var i = 1; i <= j; i++) {
        range.push(i);
      }
      $scope.idea.proponentes = new Array(j);
      $scope.rangeProponentes = range;
    };
  }
]);

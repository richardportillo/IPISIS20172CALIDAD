angular.module('ipisis')
.controller('ListaOfertasController', ['$scope', 'OfertaService',
function ($scope, OfertaService ) {

		OfertaService.getAllBySemestre({semestreCodigo: '2017-2'})
		.success(function(res) {
			$scope.ofertas = res;
		}).
		error(function (err) {
			$scope.ofertas = err;
		});

		$scope.seleccionarOferta = function (oferta) {
			$scope.ofertaSeleccionada = oferta;
		}
}]);

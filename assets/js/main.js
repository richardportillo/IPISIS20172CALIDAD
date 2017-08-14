'use stric';
var ipisis = angular.module('ipisis', ['ui.router', 'permission', 'permission.ui',
	'ngMessages' , 'ngPassword', 'ngAnimate', 'cp.ngConfirm']);

// Inicializacion de la configuracion principal al ingresar al dominio.
ipisis.run(['$rootScope', 'StorageService','PermRoleStore',
		function($rootScope, StorageService, PermRoleStore) {
			$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
				if (!fromState.name) {
					if (StorageService.get("auth_token", "session")) {
						rol = StorageService.get("rol", "session");
						if (rol) {
							PermRoleStore.defineRole(rol.toUpperCase(), function(){return true;});
							PermRoleStore.defineRole("ANON", function(){return false;});
							$rootScope.$broadcast('renovarRol');
						}
					} else {
						PermRoleStore.clearStore();
						PermRoleStore.defineRole("ANON", function(){return true;});
						$rootScope.$broadcast('renovarRol');
					}
				}
			});
		}
]);

// Controlador del root
ipisis.controller('mainCtrl', ['$scope', function($scope) {
		// Variable para controlar el desplazamiento del sidebar.
		$scope.toggled = true;
	}
]);

// filtro para capitalizar la primer letra de una palabra
ipisis.filter('capitalize', function() {
	return function(input) {
			return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});

ipisis.filter('convertPI', function() {
  return function(input) {
    if (input === '1') {
      return 'Proyecto Integrador 1';
    } else if (input === '2') {
      return 'Proyecto Integrador 2';
    } else {
      return 'Proyecto Integrador 1 y 2';
    }
  };
});

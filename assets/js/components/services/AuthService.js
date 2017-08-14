angular.module('ipisis')
.factory('AuthService', ['$http', '$rootScope', 'StorageService','PermRoleStore',
function($http, $rootScope, StorageService, PermRoleStore){
var storageTipo = 'session';

	return {
		// Servicio para el inicio de sesión de un equipo.
		signinUsuario: function(credenciales) {
			var rol = null;
			var signin = $http({
				url: '/auth/signinUsuario',
				method: 'POST',
				params: credenciales
			});

			signin.then(function(res) {
				// Creación de la sesión de un equipo cuando las credenciales son validas.
				rol = res.data.rol;
				PermRoleStore.clearStore();
				PermRoleStore.defineRole(rol, function () {return true;});
				PermRoleStore.defineRole('ANON', function () {return false;});
				StorageService.set("auth_token", res.data.token, storageTipo);
				StorageService.set("rol", rol, storageTipo);
				$rootScope.$broadcast('renovarRol');
			});
			return signin;
		},

		// Servicio para el cierre de sesión de cualquier usuario.
		signout: function() {
			// Terminación de la sesión de un usuario.
			PermRoleStore.clearStore();
			PermRoleStore.defineRole("ANON", function () {return true;})
			StorageService.unset("auth_token", storageTipo);
			StorageService.unset("rol", storageTipo);
			$rootScope.$broadcast('renovarRol');
		},

		// Servicio para autenticar una sesión de usuario activa.
		isAutenticado: function() {
			var rol = StorageService.get("rol", storageTipo);
			if (!rol) {
				return false;
			}
			if(rol == "ANON"){
				return false;
			}
			return true;
		},

		// Servicio para obtener el tipo de rol del usuario de la sesión actual.
		getRol: function(){
			return StorageService.get("rol", storageTipo);
		},

		// Servicio que autentica un estudiante en el sístema.
		validarEstudiante: function (credenciales, token) {
			var estudiante = $http({
				url: '/auth/validarEstudiante',
				method: 'POST',
				params: credenciales
			});
			return estudiante;
		}
	};
}]);

// Interceptor de peticiones para authorización de usuarios.
angular.module('ipisis')
.factory('AuthInterceptor', ['$q', '$injector', '$rootScope', function($q, $injector, $rootScope) {
	var StorageService = $injector.get('StorageService');
	var PermRoleStore = $injector.get('PermRoleStore');
	var storageTipo = 'session';

	return {
		request: function(config) {
			var token = null;

			if (StorageService.get('auth_token', storageTipo)) {
				token = StorageService.get('auth_token', storageTipo);
			}
			if (token) {
				config.headers.authorization = 'JWT ' + token;
			}
			return config;
		},

		responseError: function(response) {
			if (response.status === 401 || response.status === 403) {
				StorageService.unset('auth_token', storageTipo);
				StorageService.unset('rol', storageTipo);
				PermRoleStore.clearStore();
				PermRoleStore.defineRole('ANON', function () {return true;});
				$rootScope.$broadcast('renovarRol');
				$injector.get('$state').go('home');
			}
			return $q.reject(response);
		}
	};
}])
.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
}]);

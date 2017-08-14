angular.module('ipisis')
.controller('SigninController', ['$scope', '$state', 'AuthService',
function ($scope, $state, AuthService) {

	// Función para el inicio de sesión como equipo.
	$scope.signinUsuario = function() {
		//Definición de variables.
		var usuario = null;
		var contrasena = null;
		var credenciales = null;

		// Validaciones del formulario.
		if (!$scope.user) {
			return;
		}

		usuario = $scope.user.usuario;
		if (!usuario) {
			return;
		}

		contrasena = $scope.user.contrasena;
		if (!contrasena) {
			return;
		}

		//Inicialización de las credenciales de inicio de sesión.
		credenciales = {
			username: usuario,
			password: contrasena
		};
		$scope.signing = true;

		//Llamado al servicio de signin de equipo.
		AuthService.signinUsuario(credenciales)
		.then(function(res) {
			rol = AuthService.getRol();
			if (rol === "503") {
				$state.go('profesor');
			} else if (rol === "504") {
				$state.go('comite');
			} else if (rol === "505") {
				$state.go('jefe');
			} else if (rol === "1005"){
				$state.go('estudiante');
			}
		})
		.catch(function(err) {
			$scope.signing = false;
			$scope.loginError = true;
			$scope.errorMensaje = "No se ha podido iniciar sesión, verifique su nombre de usuario o contraseña.";
		});
	};

	// Función para el inicio de sesión como profesor.
	$scope.signinProfesor = function () {
		//Definición de variables.
		var rol = null;
		var correo = null;
		var contrasena = null;
		var credenciales = null;


		// Validaciones del formulario.
		if (!$scope.user) {
			return;
		}

		correo = $scope.user.correo;
		if (!correo) {
			return;
		}

		contrasena = $scope.user.contrasena;
		if (!contrasena) {
			return;
		}

		//Inicialización de las credenciales de inicio de sesión.
		credenciales = {
			correo: correo,
			contrasena: contrasena
		};
		$scope.signing = true;

		//Llamado al servicio de signin de profesor.
		AuthService.signinProfesor(credenciales)
		.success(function(resultado) {
			rol = AuthService.getRol().toUpperCase();

			if (rol === "PROFESOR") {
				$state.go('profesor');
			} else if (rol === "COMITE") {
				$state.go('comite');
			} else if (rol === "JEFE") {
				$state.go('jefe');
			}
		})
		.error(function(err) {
			$scope.signing = false;
			$scope.loginError = true;
			$scope.errorMensaje = "No se ha podido iniciar sesión, verifique su correo electrónico o contraseña.";
		});
	};

	// switch flag
	$scope.switchError = function (value) {
		$scope[value] = !$scope[value];
	};

}]);

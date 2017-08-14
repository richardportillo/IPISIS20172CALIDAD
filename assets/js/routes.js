var ipisis = angular.module('ipisis');

ipisis.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	/**
	*  RUTAS DE ACCESO GLOBAL.
	*/
	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "templates/public/home.html"
	})
	.state("signin", {
		url: "/signin",
		templateUrl: "templates/public/signin.html",
		controller: "SigninController",
		data: {
			permissions: {
				only: "ANON",
				redirectTo: 'home'
			}
		}
	})
	.state("ideas", {
		url: "/ideas",
		templateUrl: "templates/public/ideas.html",
		controller: "ideasAprobadas"
	})
	.state("verOferta", {
		url: "/verOferta",
		templateUrl: 'templates/public/oferta.html',
		controller: "OfertaController"
	});

	/**
	* RUTAS DE ACCESO DE UN ESTUDIANTE.
	*/
	$stateProvider
	.state("estudiante", {
		url: "/estudiante",
		templateUrl: "templates/private/estudiante/index.html",
		data: {
			// permissions: {
			// 	only: "EQUIPO",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("equipos", {
		url: "/equipos",
		templateUrl: "templates/private/estudiante/equipos.html",
		data: {
			// permissions: {
			// 	only: "EQUIPO",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("equipos.lista", {
		url: "/lista",
		templateUrl: "templates/private/estudiante/equipos-lista.html",
		controller: 'ListaEquiposController',
		data: {
			// permissions: {
			// 	only: "EQUIPO",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("equipos.crear", {
		url: "/crear",
		templateUrl: "templates/private/estudiante/equipo-crear.html",
		controller: 'CrearEquipoController',
		data: {
			// permissions: {
			// 	only: "EQUIPO",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("equipo", {
		url: "/equipo",
		templateUrl: "templates/private/equipo/equipo.html",
		controller: 'EquipoController',
		params: {equipo: null},
		data: {
			// permissions: {
			// 	only: "EQUIPO",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})

	.state("equipo.preinscripcion", {
		url: "/preinscripcion",
		templateUrl: "templates/private/equipo/preinscripcion.html",
		controller: "PreinscripcionController",
		data: {
			// permissions: {
			// 	only: "EQUIPO",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("equipo.inscripcion", {
		url: "/inscripcion",
		templateUrl: "templates/private/equipo/inscripcion.html",
		controller: "InscripcionController",
		data: {
			// permissions: {
			// only: "EQUIPO,
			// except: "ANON",
			// redirectTo: 'signin'
			// }
		}
	})
	.state("equipo.inscripciones", {
		url: "/inscripciones",
		templateUrl: "templates/private/equipo/inscripciones.html",
		controller: "InscripcionesController",
		data: {
			// permissions: {
			// only: "EQUIPO,
			// except: "ANON",
			// redirectTo: 'signin'
			// }
		}
	})
	.state("equipo.informacion", {
		url: "/informacion",
		templateUrl: "templates/private/equipo/informacion.html",
		data: {
			// permissions: {
			// only: "EQUIPO,
			// except: "ANON",
			// redirectTo: 'signin'
			// }
		}
	})
	.state("equipo.proyecto", {
		url: "/proyecto",
		templateUrl: "templates/private/equipo/proyecto.html",
		data: {
			// permissions: {
			// only: "EQUIPO,
			// except: "ANON",
			// redirectTo: 'signin'
			// }
		}
	});

	/**
	* RUTAS DE ACCESO DE UN PROFESOR.
	*/
	$stateProvider
	.state("profesor", {
		url: "/profesor",
		templateUrl: "templates/private/profesor/index.html",
		data: {
			// permissions: {
			// 	only: "PROFESOR",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("crearIdea", {
		url: "/crear-idea",
		templateUrl: "templates/private/profesor/crear-idea.html",
		controller: "CrearIdeaController",
		data: {
			// permissions: {
			// 	only: "PROFESOR",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	});

	/**
	*  RUTAS DE ACCESO DEL COMITÉ
	*/
	$stateProvider
	.state("comite", {
		url: "/comite",
		templateUrl: "templates/private/comite/index.html",
		data: {
			// permissions: {
			// 	only: "COMITE",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("propuestasIdea",{
		url: "/propuestas-ideas",
		templateUrl: "templates/private/comite/propuestas-ideas.html",
		controller: 'PropuestasIdeaController',
		data: {
			// permissions: {
			// 	only: "COMITE",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	});

	/**
	* RUTAS DE ACCESO DEL JEFE
	*/
	$stateProvider
	.state("jefe", {
		url: "/jefe",
		templateUrl: "templates/private/jefe/index.html",
		data: {
			// permissions: {
			// 	only: "JEFE",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("listaProfesores", {
		url: "/listaProfesores",
		templateUrl: "templates/private/jefe/listaProfesores.html",
		controller: "ListaProfesoresController",
		data: {
			// permissions: {
			// 	only: "JEFE",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("ofertarIdeas",{
		url: "/ofertar-ideas",
		templateUrl: "templates/private/jefe/ofertar-ideas.html",
		controller: "OfertarIdeasController",
		data: {
			// permissions: {
			// 	only: "JEFE",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	})
	.state("solicitudInscripcion", {
		url: "/solicitud-inscripcion",
		templateUrl: "templates/private/jefe/solicitud-inscripcion.html",
		controller: "SolicitudInscripcionController",
		data: {
			// permissions: {
			// 	only: "JEFE",
			// 	except: "ANON",
			// 	redirectTo: 'signin'
			// }
		}
	});

	$urlRouterProvider.otherwise('/');
}]);

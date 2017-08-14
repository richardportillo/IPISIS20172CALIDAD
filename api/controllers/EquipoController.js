/**
* EquipoController
*
* @description :: Server-side logic for managing equipoes
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	crear: function (req, res) {
		var nombre = null;
		var estudiantesId = null;
		var usuarioId = null;

		nombre = req.param('nombre');
		if (!nombre) {
			return res.badRequest({code: 1, msg: 'Debe ingresar el nombre del equipo.'});
		}

		estudiantesId = req.param('estudiantesId');
		if (!estudiantesId) {
			return res.badRequest({code: 1, msg: 'Debe ingresar los estudiantes.'});
		}

		usuarioId = req.user.id
		if (!usuarioId) {
			return res.forbidden();
		}

		equipo = {
			nombre: nombre,
			fechaCreacion: Date.now()
		}

		sequelize.transaction(t => {
			return Equipo.create(equipo, {transaction: t}).then(resEquipo => {
				return Estudiante.findAll({where: {id: {$in: [estudiantesId]}}}).then(resEstudiantes => {
					return resEquipo.addEstudiantes(resEstudiantes, {estadoInvitacion: 'PENDIENTE', transaction: t})
					.then(resAddEstudiante => {
						return EquipoEstudiante.update(
							{estadoInvitacion: 'ACEPTADA'},
							{where: {estudianteId: usuarioId}, transaction: t}
						);
					});
				});
			});
		})
		.then(result => {
			return res.created(result);
		})
		.catch(err => {
			return res.serverError(err);
		});
	},

	addIntegrante: function (req, res) {
		var usuario = null;
		var equipoCodigo = null;

		var estudiante = null;
		usuario = req.param("usuario");
		if (!usuario) {
			return res.badRequest({code: 1, msg: 'Debe ingresar un nombre de usuario.'});
		}

		equipoCodigo = req.param("equipoCodigo");
		if (!equipoCodigo) {
			return res.badRequest({code: 1, msg: 'Debe ingresar el código del equipo.'});
		}

		Estudiante.find({where: {nombreUsuario: usuario}})
		.then(resEstudiante => {
			if (resEstudiante) {
				estudiante = resEstudiante;
				return Equipo.find({
					where: {codigo: equipoCodigo},
					include: [
						{model: Estudiante, as: 'estudiantes', where: {nombreUsuario: usuario}}
					]
				});
			}
			else {
				throw {code: 2, msg: 'El usuario no existe.'};
			}
		})
		.then(resEquipo => {
			if (resEquipo) {
				throw {code: 3, msg: 'El usuario ya se encuentra en el equipo.'}
			} else {
				return Equipo.find({where: {codigo: equipoCodigo}});
			}
		})
		.then(resEquipo => {
			if (resEquipo) {
				return resEquipo.addEstudiantes(estudiante, {estadoInvitacion: 'PENDIENTE'});
			} else {
				throw {code: 4, msg: 'El equipo no existe.'}
			}
		})
		.then(resEquipo => {
			if (resEquipo) {
				return res.ok();
			}
			else {
				return res.serverError();
			}
		})
		.catch(err => {
			if (err.code) {
				return res.badRequest(err);
			}
			return res.serverError(err);
		});
	},

	getAllBySession: function (req, res) {
		var estudianteId = null;

		estudianteId = req.user.id;
		if (!estudianteId) {
			return res.forbidden();
		}

		Estudiante.find({
			where: {id: estudianteId},
			include: {model: Equipo, as: 'equipos'}
		})
		.then(estudianteResponse => {
			return res.ok(estudianteResponse)
		})
		.catch(err => {
			return res.serverError();
		});

	},

	getIntegrantes: function (req, res) {
		var equipoCodigo = null;

		equipoCodigo = req.param('equipoCodigo');
		if (!equipoCodigo) {
			return res.badRequest({code: 1, msg: "Debe ingresar el código del equipo."});
		}

		Estudiante.findAll({include: {model: Equipo, as: 'equipos', where: {codigo: equipoCodigo}}})
		.then(resEstudiantes => {
			return res.ok(resEstudiantes);
		})
		.catch(err => {
			return res.serverError(err);
		});
	},

	getEquipoInformacion: function (req, res) {
		var equipoCodigo = null;

		equipoCodigo = req.param('equipoCodigo');
		if (!equipoCodigo) {
			return res.badRequest({code: 1, msg: "Debe ingresar el código del equipo."});
		}

		Equipo.find({where: {codigo: equipoCodigo},
			include: [
				{model: Estudiante, as: 'estudiantes'},
				{
					model: Inscripcion,
					as: 'inscripciones',
					required: false,
					include: [
						{
							model: HistorialInscripcion,
							as: 'historialInscripcion',
							where: {estado: 'ACEPTADA'}
						},
						{model: Materia, as: 'materia'},
						{model: Proyecto, as: 'proyecto'},
						{
							model: Oferta,
							as: 'oferta',
							include: [
								{model: Profesor, as: 'profesor'}
							]
						}
					]
				}
			]
		})
		.then(resEquipo => {
			return res.ok(resEquipo);
		})
		.catch(err => {
			return res.serverError(err);
		});

	},

	getPerfil: function(req, res) {
		var equipoCodigo = null;
    var estudianteId = null;

    equipoCodigo = req.param('equipoCodigo');
    if (!equipoCodigo) {
      return res.badRequest({code: 1, msg: 'Debe ingresar el código del equipo.'});
    }

    estudianteId = req.user.id;
    if (!estudianteId) {
      return res.forbidden();
    }

		Equipo.find({
      where: {codigo: equipoCodigo},
      include: [{model: Estudiante, as: 'estudiantes'}]
    })
		.then(resEquipo => {
			return res.ok(resEquipo);
		})
		.catch(err => {
      return res.serverError(err);
    });
	}
};

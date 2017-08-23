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

	salir: function (req, res) {
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

		EquipoEstudiante.findOne({where: {
			equipoCodigo: equipoCodigo,
			estudianteId: estudianteId,
			estadoInvitacion: 'ACEPTADA'
		}})
		.then(resEquipoCodigo => {
			if (resEquipoCodigo) {
				resEquipoCodigo.destroy()
				.then(resDestroy => {
					return res.ok(resDestroy)
				})
				.catch(err => {
					return res.serverError(err);
				});
			}
		})
		.catch(err => {
			return res.serverError(err);
		});
	},

	procesarInvitacion: function (req, res) {
		var equipoCodigo = null;
		var estudianteId = null;
		var accion = null;

		equipoCodigo = req.param('equipoCodigo');
		if (!equipoCodigo) {
			return res.badRequest({code: 1, msg: 'Debe ingresar el código del equipo.'});
		}

		accion = req.param('accion');
		if (!accion) {
			return res.badRequest({code: 1, msg: 'Debe ingresar la acción que desea realizar.'});
		}

		estudianteId = req.user.id;
		if (!estudianteId) {
			return res.forbidden();
		}

		EquipoEstudiante.findOne({where: {
			equipoCodigo: equipoCodigo,
			estudianteId: estudianteId,
			estadoInvitacion: 'PENDIENTE'
		}})
		.then(resEquipoCodigo => {
			if (resEquipoCodigo) {
				// Si la accion es igual a 1 se acepta la invitación, si es 2 se rechaza,
				// si no es ninguna de las dos la peticion es invalida.
				if (accion == 1) {
					resEquipoCodigo.update({estadoInvitacion: 'ACEPTADA'})
					.then(resUpdate => {return res.ok();})
					.catch(err => {return res.serverError(err);});
				}
				else if (accion == 2) {
					resEquipoCodigo.destroy()
					.then(resDestroy => {return res.ok()})
					.catch(err => {return res.serverError()})
				} else {return res.badRequest()}
			} else {
				return res.badRequest();
			}
		})
		.catch(err => {
			return res.serverError(err);
		});
	},

	addIntegrante: function (req, res) {
		var usuario = null;
		var equipoCodigo = null;

		var equipoInstance = null;

		usuario = req.param("usuario");
		if (!usuario) {
			return res.badRequest({code: 1, msg: 'Debe ingresar un nombre de usuario.'});
		}

		equipoCodigo = req.param("equipoCodigo");
		if (!equipoCodigo) {
			return res.badRequest({code: 1, msg: 'Debe ingresar el código del equipo.'});
		}
		sails.log.debug(usuario)
		sails.log.debug(equipoCodigo)
		Equipo.findOne({
			where: {codigo: equipoCodigo},
			include: [
				{
					model: Estudiante,
					as: 'estudiantes',
					where: {nombreUsuario: usuario},
					required: false
				}
			]
		})
		.then(resEquipo => {
			if (!resEquipo) {
				throw {code: 2, msg: 'El equipo no existe.'};
			}
			if (resEquipo.estudiantes.length != 0) {
				throw {code: 3, msg: 'El estudiante ya está en el equipo'};
			}

			equipoInstance = resEquipo;
			return Inscripcion.findAll({
				where: {equipoCodigo: equipoCodigo},
				include: [
					{
						model: HistorialInscripcion,
						as: 'historialInscripcion',
						where: {
							estado: {
								$in: ['CREADA', 'ACEPTADA']
							},
							fechaActualizacion: {
								$in: [
									sequelize.literal('SELECT MAX(`fecha_actualizacion`) FROM `historial_inscripcion` WHERE `inscripcion`.`id` = `historial_inscripcion`.`inscripcion_id`')
								]
							}
						}
					}
				]
			})
		})
		.then(resInscripcion => {
			if (resInscripcion.length != 0) {
				throw {code: 4, msg: 'No se puede añadir el estudiante ya que el equipo tiene una inscripción o proyecto activo.'}
			}

			return Estudiante.findOne({where: {nombreUsuario: usuario}});
		})
		.then(resEstudiante => {
			if (!resEstudiante) {
				throw {code: 5, msg: 'El estudiante no se ha encontrado.'}
			}
			return equipoInstance.addEstudiantes(resEstudiante, {estadoInvitacion: 'PENDIENTE'});
		})
		.then(resEquipo => {
			return res.ok();
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
			include: {
				through: {where: {$or: [{estadoInvitacion: 'ACEPTADA'}, {estadoInvitacion: 'PENDIENTE'}]}},
				model: Equipo, as: 'equipos'
			}
		})
		.then(estudianteResponse => {
			return res.ok(estudianteResponse)
		})
		.catch(err => {
			return res.serverError(err);
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

		Equipo.findOne({where: {codigo: equipoCodigo},
			include: [
				{model: Estudiante, as: 'estudiantes'},
				{
					model: Inscripcion,
					as: 'inscripciones',
					required: false,
					include: [
						{
							required: false,
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
			if (!resEquipo) {
				return res.badRequest(resEquipo);
			} else {
				return res.ok(resEquipo);
			}
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

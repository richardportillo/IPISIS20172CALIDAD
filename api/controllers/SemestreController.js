/**
 * SemestreController
 *
 * @description :: Server-side logic for managing semestres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAll: function(req,res) {
		Semestre.findAll()
		.then(semestres => {
			return res.ok(semestres);
		})
		.catch(err => {
			return res.serverError(err)
		})
	}
};

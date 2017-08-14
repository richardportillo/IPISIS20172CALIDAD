/**
 * Semestre.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    codigo: {
      type: Sequelize.STRING(8),
      primaryKey: true,
      field: 'codigo'
    },
    fechaInicio: {
      type: Sequelize.DATE,
      field: 'fecha_inicio'
    },
    fechaCierre: {
      type: Sequelize.DATE,
      field: 'fecha_cierre'
    },
    inicioInscripcion: {
      type: Sequelize.DATE,
      field: 'inicio_inscripcion'
    },
    finInscripcion: {
      type: Sequelize.DATE,
      field: 'fin_inscripcion'
    }
  },
  // Describe las asociaciones que tiene con los demás modelos.
  associations: function () {
    Semestre.hasMany(Oferta, {
      as: 'ofertas',
      foreignKey: {
        name: 'semestreCodigo',
        field: 'semestre_codigo'
      }
    });

    Semestre.hasMany(MateriaCompromiso, {
      as: 'materiaCompromisos',
      foreignKey: {
        name: 'semestreCodigo',
        field: 'semestre_codigo'
      }
    });

    Semestre.hasMany(Preinscripcion, {
      as: 'preinscripciones',
      foreignKey: {
        name: 'semestreCodigo',
        field: 'semestre_codigo'
      }
    });
  },
  // Configuraciones y métodos del modelo.
  options: {
    tableName: 'semestre',
    timestamps: false,
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};

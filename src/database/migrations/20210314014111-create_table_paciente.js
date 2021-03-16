"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("paciente", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			apaterno: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			amaterno: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			nombre: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			fecha_nacimiento: {
				type: Sequelize.DATEONLY,
				allowNull: false,
			},
			sexo: {
				type: Sequelize.ENUM,
				allowNull: false,
				values: ["F", "M"],
			},
			estado_civil: {
				type: Sequelize.ENUM,
				allowNull: false,
				values: ["soltero/a", "casado/a", "divorciado/a", "viudo/a"],
			},
			num_documento: {
				type: Sequelize.STRING(10),
				allowNull: false,
				unique: true,
			},
			direccion: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			telefono: {
				type: Sequelize.STRING,
				allowNull: true,
			},

			email: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			ocupacion: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			persona_responsable: {
				type: Sequelize.STRING,
				allowNull: true,
			},

			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("paciente");
	},
};

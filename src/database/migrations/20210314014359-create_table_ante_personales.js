"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("ante_personales", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			desarrollo_psicomotor: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			tipo_alimentacion: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			hospitalizaciones: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			antecedentes: {
				type: Sequelize.STRING,
				allowNull: true,
			},

			id_paciente: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "paciente",
					key: "id",
					onDelete: "CASCADE",
					onUpdate: "CASCADE",
				},
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
		await queryInterface.dropTable("ante_personales");
	},
};

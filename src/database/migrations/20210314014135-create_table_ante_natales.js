"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("ante_natales", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			gestas: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			controles: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			complicaciones: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			tipo_parto: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			complicaciones_nacer: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			pan: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			tan: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			cc: {
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
		await queryInterface.dropTable("ante_natales");
	},
};

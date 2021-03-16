"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("inmunizacion_antepersonales", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			id_inmunizacion: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "inmunizaciones",
					key: "id",
					onDelete: "CASCADE",
					onUpdate: "CASCADE",
				},
			},
			id_antepersonales: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "ante_personales",
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
		await queryInterface.dropTable("inmunizacion_antepersonales");
	},
};

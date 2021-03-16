"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("inmunizaciones", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			nombre: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
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
		await queryInterface.dropTable("inmunizaciones");
	},
};

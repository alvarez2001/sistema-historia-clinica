"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("ante_familiares", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			antecedentes: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			parentesco: {
				type: Sequelize.STRING,
				allowNull: false,
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
		await queryInterface.dropTable("ante_familiares");
	},
};

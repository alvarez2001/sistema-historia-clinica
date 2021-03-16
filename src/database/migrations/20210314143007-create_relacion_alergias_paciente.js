"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("alergias_paciente", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			id_alergias: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "alergias",
					key: "id",
					onDelete: "CASCADE",
					onUpdate: "CASCADE",
				},
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
		await queryInterface.dropTable("alergias_paciente");
	},
};

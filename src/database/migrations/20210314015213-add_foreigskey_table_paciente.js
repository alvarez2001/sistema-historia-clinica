module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// queryInterface.addColumn(
				// 	"paciente",
				// 	"id_antenatales",
				// 	{
				// 		type: Sequelize.INTEGER,
				// 		allowNull: true,
				// 		references: {
				// 			model: "ante_natales",
				// 			key: "id",
				// 			onDelete: "CASCADE",
				// 			onUpdate: "CASCADE",
				// 		},
				// 	},
				// 	{ transaction: t },
				// ),
				// queryInterface.addColumn(
				// 	"paciente",
				// 	"id_antepersonales",
				// 	{
				// 		type: Sequelize.INTEGER,
				// 		allowNull: true,
				// 		references: {
				// 			model: "ante_personales",
				// 			key: "id",
				// 			onDelete: "CASCADE",
				// 			onUpdate: "CASCADE",
				// 		},
				// 	},
				// 	{ transaction: t },
				// ),
				// queryInterface.addColumn(
				// 	"paciente",
				// 	"id_antefamiliares",
				// 	{
				// 		type: Sequelize.INTEGER,
				// 		allowNull: true,
				// 		references: {
				// 			model: "ante_familiares",
				// 			key: "id",
				// 			onDelete: "CASCADE",
				// 			onUpdate: "CASCADE",
				// 		},
				// 	},
				// 	{ transaction: t },
				// ),
			]);
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.sequelize.transaction((t) => {
			return Promise.all([
				// queryInterface.removeColumn("paciente", "id_antenatales", {
				// 	transaction: t,
				// }),
				// queryInterface.removeColumn("paciente", "id_antepersonales", {
				// 	transaction: t,
				// }),
				// queryInterface.removeColumn("paciente", "id_antefamiliares", {
				// 	transaction: t,
				// }),
			]);
		});
	},
};

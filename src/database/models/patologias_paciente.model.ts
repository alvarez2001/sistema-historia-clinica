import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class PatologiasPaciente extends Model {}
PatologiasPaciente.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
	},
	{
		modelName: "patologias_paciente",
		tableName: "patologias_paciente",
		timestamps: true,
		sequelize,
	},
);

export default PatologiasPaciente;

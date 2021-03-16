import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class AlergiasPaciente extends Model {}
AlergiasPaciente.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
	},
	{
		modelName: "alergias_paciente",
		tableName: "alergias_paciente",
		timestamps: true,
		sequelize,
	},
);

export default AlergiasPaciente;

import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Diagnostico extends Model {}

Diagnostico.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		codigo: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
		},
		enfermedad: {
			allowNull: false,
			type: DataType.STRING,
		},
	},
	{
		modelName: "diagnostico",
		tableName: "diagnostico",
		timestamps: true,
		sequelize,
	},
);

export default Diagnostico;

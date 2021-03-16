import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Especialidad extends Model {}

Especialidad.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		nombre: {
			allowNull: false,
			unique: true,
			type: DataType.STRING,
		},
	},
	{
		modelName: "especialidad",
		tableName: "especialidad",
		timestamps: true,
		sequelize,
	},
);

export default Especialidad;

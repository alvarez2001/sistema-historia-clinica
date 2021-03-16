import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Permiso extends Model {}

Permiso.init(
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
		modelName: "permiso",
		tableName: "permiso",
		timestamps: true,
		sequelize,
	},
);

export default Permiso;

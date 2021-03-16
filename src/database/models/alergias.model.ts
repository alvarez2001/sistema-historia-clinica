import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

export interface AlergiasI {
	id?: number | null;
	nombre?: string;
}

class Alergias extends Model {}

Alergias.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		nombre: {
			allowNull: false,
			type: DataType.STRING,
			unique: true,
		},
	},
	{
		modelName: "alergias",
		tableName: "alergias",
		timestamps: true,
		sequelize,
	},
);

export default Alergias;

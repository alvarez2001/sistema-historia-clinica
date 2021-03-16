import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

export interface PatologiasI {
	id?: number | null;
	nombre?: string;
}

class Patologias extends Model {}
Patologias.init(
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
		modelName: "patologias",
		tableName: "patologias",
		timestamps: true,
		sequelize,
	},
);
export default Patologias;

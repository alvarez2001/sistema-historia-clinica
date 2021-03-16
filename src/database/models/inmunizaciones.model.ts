import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

export interface InmunizacionesI {
	id?: number | null;
	nombre?: string;
}

class Inmunizaciones extends Model {}
Inmunizaciones.init(
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
		modelName: "inmunizaciones",
		tableName: "inmunizaciones",
		timestamps: true,
		sequelize,
	},
);
export default Inmunizaciones;

import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

export interface AntePersonalI {
	id?: number | null;
	desarrollo_psicomotor?: string;
	tipo_alimentacion?: string;
	hospitalizaciones?: string;
	antecedentes?: string;
}

class AntePersonal extends Model {}

AntePersonal.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		desarrollo_psicomotor: {
			allowNull: true,
			type: DataType.STRING,
		},
		tipo_alimentacion: {
			allowNull: true,
			type: DataType.STRING,
		},
		hospitalizaciones: {
			allowNull: true,
			type: DataType.STRING,
		},
		antecedentes: {
			allowNull: true,
			type: DataType.STRING,
		},
	},
	{
		modelName: "ante_personales",
		tableName: "ante_personales",
		timestamps: true,
		sequelize,
	},
);

export default AntePersonal;

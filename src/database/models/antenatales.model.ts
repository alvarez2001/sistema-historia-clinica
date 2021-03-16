import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

export interface AnteNatalI {
	id?: number | null;
	gestas?: string;
	controles?: string;
	complicaciones?: string;
	tipo_parto?: string;
	complicaciones_nacer?: string;
	pan?: string;
	tan?: string;
	cc?: string;
}

class AnteNatal extends Model {}
AnteNatal.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		gestas: {
			allowNull: true,
			type: DataType.STRING,
		},
		controles: {
			allowNull: true,
			type: DataType.STRING,
		},
		complicaciones: {
			allowNull: true,
			type: DataType.STRING,
		},
		tipo_parto: {
			allowNull: true,
			type: DataType.STRING,
		},
		complicaciones_nacer: {
			allowNull: true,
			type: DataType.STRING,
		},
		pan: {
			allowNull: true,
			type: DataType.STRING,
		},
		tan: {
			allowNull: true,
			type: DataType.STRING,
		},
		cc: {
			allowNull: true,
			type: DataType.STRING,
		},
	},
	{
		modelName: "ante_natales",
		tableName: "ante_natales",
		timestamps: true,
		sequelize,
	},
);
export default AnteNatal;

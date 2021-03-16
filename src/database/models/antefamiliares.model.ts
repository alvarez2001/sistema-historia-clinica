import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

export interface AnteFamiliarI {
	id?: number | null;
	antecedentes: string;
	parentesco: string;
}

class AnteFamiliar extends Model {}
AnteFamiliar.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		antecedentes: {
			allowNull: false,
			type: DataType.STRING,
		},
		parentesco: {
			allowNull: false,
			type: DataType.STRING,
		},
	},
	{
		sequelize,
		modelName: "ante_familiares",
		tableName: "ante_familiares",
		timestamps: true,
	},
);

export default AnteFamiliar;

import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Medicamento extends Model {}

Medicamento.init(
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
		},
		presentacion: {
			allowNull: false,
			type: DataType.STRING,
		},
	},
	{
		modelName: "medicamento",
		tableName: "medicamento",
		timestamps: true,
		sequelize,
	},
);

export default Medicamento;

import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Resultado extends Model {}

Resultado.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		motivo_consulta: {
			allowNull: false,
			type: DataType.STRING,
		},
		tiempo_enfermedad: {
			allowNull: false,
			type: DataType.STRING,
		},
		examen_fisico: {
			allowNull: true,
			type: DataType.STRING,
		},
		tratamiento: {
			allowNull: false,
			type: DataType.STRING,
		},
		fecha: {
			allowNull: false,
			type: DataType.DATEONLY,
		},
		estado: {
			allowNull: false,
			type: DataType.STRING,
		},
	},
	{
		modelName: "resultado",
		tableName: "resultado",
		timestamps: true,
		sequelize,
	},
);

export default Resultado;

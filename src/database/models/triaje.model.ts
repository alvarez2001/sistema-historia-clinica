import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Triaje extends Model {}

Triaje.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		presion_arterial: {
			allowNull: true,
			type: DataType.STRING,
		},
		temperatura: {
			allowNull: true,
			type: DataType.STRING,
		},
		frecuencia_cardiaca: {
			allowNull: true,
			type: DataType.STRING,
		},
		frecuencia_respiratoria: {
			allowNull: true,
			type: DataType.STRING,
		},
		saturacion: {
			allowNull: true,
			type: DataType.STRING,
		},
		peso: {
			allowNull: true,
			type: DataType.STRING,
		},
		talla: {
			allowNull: true,
			type: DataType.STRING,
		},
		estado: {
			allowNull: false,
			type: DataType.STRING,
		},
	},
	{
		modelName: "triaje",
		tableName: "triaje",
		timestamps: true,
		sequelize,
	},
);

export default Triaje;

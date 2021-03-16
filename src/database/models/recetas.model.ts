import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Receta extends Model {}

Receta.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		dosis: {
			allowNull: false,
			type: DataType.STRING,
		},
		duracion: {
			allowNull: false,
			type: DataType.STRING,
		},
		cantidad: {
			allowNull: false,
			type: DataType.DECIMAL(20, 2),
		},
	},
	{
		modelName: "receta",
		tableName: "receta",
		timestamps: true,
		sequelize,
	},
);

export default Receta;

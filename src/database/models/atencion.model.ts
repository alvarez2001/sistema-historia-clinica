import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Atencion extends Model {}
Atencion.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		fecha: {
			type: DataType.DATEONLY,
			allowNull: false,
		},
		estado: {
			type: DataType.STRING,
			allowNull: false,
		},
		centro: {
			type: DataType.ENUM,
			allowNull: false,
			values: ["santa ana", "santa catalina"],
		},
	},
	{
		modelName: "atencion",
		tableName: "atencion",
		timestamps: true,
		sequelize,
	},
);

export default Atencion;

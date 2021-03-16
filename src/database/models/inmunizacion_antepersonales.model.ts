import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class InmunizacionAntepersonales extends Model {}
InmunizacionAntepersonales.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
	},
	{
		modelName: "inmuni_anteperso",
		tableName: "inmuni_anteperso",
		timestamps: true,
		sequelize,
	},
);

export default InmunizacionAntepersonales;

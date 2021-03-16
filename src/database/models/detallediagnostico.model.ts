import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class DetalleDiagnostico extends Model {}

DetalleDiagnostico.init(
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataType.INTEGER,
		},
		tipo: {
			type: DataType.STRING,
			allowNull: true,
		},
	},
	{
		modelName: "detalle_diagnostico",
		tableName: "detalle_diagnostico",
		timestamps: true,
		sequelize,
	},
);

export default DetalleDiagnostico;

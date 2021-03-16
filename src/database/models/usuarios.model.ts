import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

class Usuario extends Model {}

Usuario.init(
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
		apellido: {
			allowNull: false,
			type: DataType.STRING,
		},
		num_documento: {
			allowNull: false,
			type: DataType.STRING(10),
			unique: true,
		},

		email: {
			allowNull: false,
			type: DataType.STRING,
		},
		password: {
			allowNull: false,
			type: DataType.STRING,
		},
		cargo: {
			allowNull: false,
			type: DataType.ENUM,
			values: ["administrador", "doctor"],
		},
		estado: {
			allowNull: false,
			type: DataType.STRING,
		},
	},
	{
		modelName: "usuario",
		tableName: "usuario",
		timestamps: true,
		sequelize,
	},
);

export default Usuario;

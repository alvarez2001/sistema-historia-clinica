import { DataType, Model } from "sequelize-typescript";
import { sequelize } from "../db";

export interface PacienteI {
	id?: number | null;
	apaterno?: string | null;
	amaterno?: string | null;
	nombre: string;
	fecha_nacimiento: Date;
	sexo: string;
	estado_civil: string;
	num_documento: string;
	direccion: string;
	telefono?: string;
	email?: string;
	ocupacion: string;
	persona_responsable?: string;
	id_antenatales?: number | null;
	id_antepersonales?: number | null;
	id_antefamiliares?: number | null;
	status: string;
	createdAt?: Date;
	updatedAt?: Date;
}

class Paciente extends Model {}

Paciente.init(
	{
		id: {
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
			type: DataType.INTEGER,
		},
		apaterno: {
			allowNull: true,
			type: DataType.STRING,
		},
		amaterno: {
			allowNull: true,
			type: DataType.STRING,
		},
		nombre: {
			allowNull: false,
			type: DataType.STRING,
		},
		fecha_nacimiento: {
			allowNull: false,
			type: DataType.DATEONLY,
		},
		sexo: {
			allowNull: false,
			type: DataType.ENUM,
			values: ["M", "F"],
		},
		estado_civil: {
			allowNull: true,
			type: DataType.ENUM,
			values: ["soltero/a", "casado/a", "divorciado/a", "viudo/a"],
		},
		num_documento: {
			allowNull: false,
			type: DataType.STRING(10),
			unique: true,
		},
		direccion: {
			allowNull: false,
			type: DataType.STRING,
		},
		telefono: {
			allowNull: true,
			type: DataType.STRING,
		},
		email: {
			allowNull: true,
			type: DataType.STRING,
		},
		ocupacion: {
			allowNull: false,
			type: DataType.STRING,
		},
		persona_responsable: {
			allowNull: true,
			type: DataType.STRING,
		},
		status: {
			allowNull: false,
			type: DataType.STRING,
		},
	},
	{
		sequelize,
		modelName: "paciente",
		tableName: "paciente",
		timestamps: true,
	},
);
export default Paciente;

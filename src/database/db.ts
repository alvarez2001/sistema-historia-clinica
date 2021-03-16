import { Model, Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
	process.env.DB_DATABASE || "",
	process.env.DB_USERNAME || "",
	process.env.DB_PASSWORD || "",
	{
		dialect: "mysql",
		host: process.env.DB_HOST,
	},
);

//modelos
import Paciente from "./models/paciente.model";
import AntePersonal from "./models/antepersonales.model";
import AnteNatal from "./models/antenatales.model";
import AnteFamiliar from "./models/antefamiliares.model";
import Inmunizaciones from "./models/inmunizaciones.model";
import Alergias from "./models/alergias.model";
import Patologias from "./models/patologias.model";
import InmunizacionAntepersonales from "./models/inmunizacion_antepersonales.model";
import AlergiasPaciente from "./models/alergias_paciente.model";
import PatologiasPaciente from "./models/patologias_paciente.model";
import Usuario from "./models/usuarios.model";
import Permiso from "./models/permiso.model";
import Especialidad from "./models/especialidad.model";
import Atencion from "./models/atencion.model";
import Medicamento from "./models/medicamento.model";
import Receta from "./models/recetas.model";
import Resultado from "./models/resultado.model";
import Diagnostico from "./models/diagnostico.model";
import DetalleDiagnostico from "./models/detallediagnostico.model";
import Triaje from "./models/triaje.model";

export class DB {
	constructor() {
		this.sq = sequelize;
		this.associaciones();
	}
	private sq: Sequelize;

	conectarDB() {
		this.sq
			// .authenticate()
			.sync({ force: true })
			.then(() => {
				console.log("base de datos conectada");
			})
			.catch((error: any) => console.log(error.message));
	}

	private associaciones(): void {
		//1 paciente tiene 1 antecedente personal con el name de la foreignkey
		this.OnetoOne({
			model1: Paciente,
			model2: AntePersonal,
			fkey: "id_paciente",
		});

		//1paciente tiene 1 antecedente natal con el name de la foreignkey
		this.OnetoOne({
			model1: Paciente,
			model2: AnteNatal,
			fkey: "id_paciente",
		});

		//1 paciente tiene muchos antecedentes familiares
		this.OneToMany({
			model1: Paciente,
			model2: AnteFamiliar,
			fkey: "id_paciente",
		});

		//relacionar muchos antecedentes personales con muchas inmmunizaciones
		this.ManyToMany({
			model1: AntePersonal,
			fkey1: "id_antepersonales",
			model2: Inmunizaciones,
			fkey2: "id_inmunizacion",
			through: "inmuni_anteperso",
			model3: InmunizacionAntepersonales,
		});

		//relacionar muchas alergias con muchos pacientes
		this.ManyToMany({
			model1: Alergias,
			fkey1: "id_alergias",
			model2: Paciente,
			fkey2: "id_paciente",
			through: "alergias_paciente",
			model3: AlergiasPaciente,
		});

		//relacionar muchas patologias con muchos pacientes
		this.ManyToMany({
			model1: Paciente,
			fkey1: "id_paciente",
			model2: Patologias,
			fkey2: "id_patologias",
			through: "patologias_paciente",
			model3: PatologiasPaciente,
		});

		//relacionar muchos usuarios con muchos permisos
		this.ManyToMany({
			model1: Usuario,
			fkey1: "id_usuario",
			model2: Permiso,
			fkey2: "id_permiso",
			through: "usuario_permiso",
		});

		//una especialidad tiene muchos usuarios
		this.OneToMany({
			model1: Especialidad,
			model2: Usuario,
			fkey: "id_especialidad",
		});

		//1 paciente tiene muchas atenciones
		this.OneToMany({
			model1: Paciente,
			model2: Atencion,
			fkey: "id_paciente",
		});

		//1 usuario tiene muchas atenciones
		this.OneToMany({
			model1: Usuario,
			model2: Atencion,
			fkey: "id_usuario",
		});

		//1 medicamento tiene muchas recetas
		this.OneToMany({
			model1: Medicamento,
			model2: Receta,
			fkey: "id_medicamento",
		});

		//1 atencion tiene muchas recetas
		this.OneToMany({
			model1: Atencion,
			model2: Receta,
			fkey: "id_atencion",
		});

		//1 resultado tiene 1 atencion
		this.OnetoOne({
			model1: Atencion,
			model2: Resultado,
			fkey: "id_atencion",
		});

		//1 triaje tiene 1 atencion
		this.OnetoOne({
			model1: Atencion,
			model2: Triaje,
			fkey: "id_atencion",
		});

		//muchos resultados tienen muchos diagnosticos
		this.ManyToMany({
			model1: Resultado,
			model2: Diagnostico,
			model3: DetalleDiagnostico,
			through: "detalle_diagnostico",
			fkey1: "id_resultado",
			fkey2: "id_diagnostico",
		});
	}
	private OnetoOne(data: { model1: any; model2: any; fkey: string }): void {
		const { fkey, model2, model1 } = data;
		model1.hasOne(model2, {
			foreignKey: fkey,
		});
		model2.belongsTo(model1, {
			foreignKey: fkey,
		});
	}
	private OneToMany(data: { model1: any; model2: any; fkey: string }): void {
		const { fkey, model2, model1 } = data;
		model1.hasMany(model2, {
			foreignKey: fkey,
		});
		model2.belongsTo(model1, {
			foreignKey: fkey,
		});
	}
	private ManyToMany(data: {
		model1: any;
		model2: any;
		model3?: any;
		through: string;
		fkey1: string;
		fkey2: string;
	}): void {
		const { model1, model2, model3, through, fkey1, fkey2 } = data;
		model1.belongsToMany(model2, {
			through: through,
			foreignKey: fkey1,
		});

		model2.belongsToMany(model1, {
			through: through,
			foreignKey: fkey2,
		});
		if (model3) {
			model3.belongsTo(model1, {
				foreignKey: fkey1,
			});

			model3.belongsTo(model2, {
				foreignKey: fkey2,
			});
		}
	}
}

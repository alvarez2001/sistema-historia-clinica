import express, { Application } from "express";
import morgan from "morgan";
import { DB } from "./database/db";
import apiRoutes from "./routes/api.routes";
import bodyParser from "body-parser";

export class App {
	private app: Application;

	constructor(private port?: number | string) {
		this.app = express();
		this.setting();
		this.middlewares();
		this.routes();
	}

	setting() {
		this.app.set("port", this.port || process.env.PORT || 4000);
	}

	routes() {
		this.app.use("/api", apiRoutes);
	}

	middlewares() {
		this.app.use(morgan("dev"));
		this.app.use(bodyParser.urlencoded({ extended: true }));
	}

	listen() {
		this.app.listen(this.app.get("port"));
		console.log(`Servidor en el puerto ${this.app.get("port")}`);

		this.conexionDB();
	}

	conexionDB() {
		const db = new DB();
		db.conectarDB();
	}
}

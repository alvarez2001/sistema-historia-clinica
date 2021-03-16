import { Router } from "express";
import { indexWelcome } from "../controllers/api.controller";

const router = Router();
router.route("/").get(indexWelcome);

export default router;

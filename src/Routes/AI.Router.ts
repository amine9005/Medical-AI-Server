import { Router } from "express";
import {
  getSuggestions,
  generateMedicalReport,
} from "../Controllers/AI.Controller";
import { authMiddleWare } from "../Middlewares/Auth.Middleware";

const router = Router();

router.post("/suggestions", authMiddleWare, getSuggestions);
router.post("/create-report", authMiddleWare, generateMedicalReport);

export default router;

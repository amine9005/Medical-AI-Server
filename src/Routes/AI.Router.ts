import { Router } from "express";
import { getSuggestions } from "../Controllers/AI.Controller";
import { authMiddleWare } from "../Middlewares/Auth.Middleware";

const router = Router();

router.post("/suggestions", authMiddleWare, getSuggestions);

export default router;

import { Router } from "express";
import { authMiddleWare } from "../Middlewares/Auth.Middleware";
import { saveSession } from "../Controllers/Session.Controller";

const router = Router();

router.post("/create", authMiddleWare, saveSession);

export default router;

import { Router } from "express";
import { authMiddleWare } from "../Middlewares/Auth.Middleware";
import {
  saveSession,
  getSessionById,
  getSessions,
} from "../Controllers/Session.Controller";

const router = Router();

router.post("/create", authMiddleWare, saveSession);
router.get("/:sessionId", authMiddleWare, getSessionById);
router.get("/", authMiddleWare, getSessions);

export default router;

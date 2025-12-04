import { Router } from "express";
import { authMiddleWare } from "../Middlewares/Auth.Middleware";
import { getCredits, updateCredits } from "../Controllers/User.Controller";

const router = Router();

router.get("/credits", authMiddleWare, getCredits);
router.get("/update-credits", authMiddleWare, updateCredits);

export default router;

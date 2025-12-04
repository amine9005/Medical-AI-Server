import express, { Request, Response } from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import AI_Router from "./Routes/AI.Router";
import Session_Router from "./Routes/Session.Router";
import Users_Router from "./Routes/User.Router";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.use(clerkMiddleware());
app.use(requireAuth());

app.use("/api/ai", AI_Router);
app.use("/api/session", Session_Router);
app.use("/api/user", Users_Router);

export default app;

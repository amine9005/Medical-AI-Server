import { Request } from "express";

export interface CustomRequest extends Request {
  credits: number;
  plan: string;
}

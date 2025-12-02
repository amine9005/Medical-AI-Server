import { Response } from "express";
import { GoogleGenAI } from "@google/genai";
import { CustomRequest } from "../Types/Types";
import { suggestAgentsPrompt } from "../Utils/Prompts";
import dotenv from "dotenv";

dotenv.config();
const ai = new GoogleGenAI({});

export const getSuggestions = async (req: CustomRequest, res: Response) => {
  try {
    const { prompt } = req.body;
    const plan = req.plan;
    const credits = req.credits;

    if (!prompt) {
      return res
        .status(400)
        .json({ success: false, message: "Missing prompt." });
    }

    if (plan !== "premium" && credits < 10) {
      return res.status(403).json({
        success: false,
        message: "You don't have enough credits.",
      });
    }

    const rawText = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: suggestAgentsPrompt(prompt),
    });

    const cleanedText = rawText.text
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);

    return res
      .status(200)
      .json({
        success: true,
        message: "suggestions generated successfully",
        data,
      });
  } catch (error) {
    console.log("error in get Suggestions", error);
    return res.status(500).json({ success: false, message: error });
  }
};

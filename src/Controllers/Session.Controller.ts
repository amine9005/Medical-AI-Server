import { Response } from "express";
import { CustomRequest } from "../Types/Types";
import { getAuth } from "@clerk/express";
import { db } from "../Configs/db";
import { sessionChatTable } from "../Models/Session.Model";
import { uuid } from "uuidv4";
export const saveSession = async (req: CustomRequest, res: Response) => {
  try {
    const { notes, selectedDoctor } = req.body;
    const { userId } = getAuth(req);

    if (!notes) {
      return res
        .status(400)
        .json({ success: false, message: "Missing notes." });
    }

    if (!selectedDoctor) {
      return res
        .status(400)
        .json({ success: false, message: "Missing selected doctor." });
    }

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Missing user id." });
    }
    const data = await db.insert(sessionChatTable).values({
      sessionId: uuid(),
      note: notes,
      selectedDoctor: selectedDoctor,
      createdBy: userId,
      createdOn: new Date().toISOString(),
    });

    return res
      .status(200)
      .json({ success: true, message: "Session saved successfully", data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error in saving session", error });
  }
};

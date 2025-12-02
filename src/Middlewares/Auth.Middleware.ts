import { clerkClient, getAuth } from "@clerk/express";
import { NextFunction, Response } from "express";
import { CustomRequest } from "../Types/Types";

export const authMiddleWare = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, has } = getAuth(req);
    const isPremium = await has({ plan: "premium" });
    const user = await clerkClient.users.getUser(userId);
    if (!isPremium && user.privateMetadata.credits) {
      req.credits = user.privateMetadata.credits as number;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          credits: 50,
        },
      });
      req.credits = 50;
    }
    req.plan = isPremium ? "premium" : "free";
    next();
  } catch (error) {
    console.log("Error in auth middleware", error);
    res
      .status(500)
      .json({ success: false, message: "Error in auth middleware: ", error });
  }
};

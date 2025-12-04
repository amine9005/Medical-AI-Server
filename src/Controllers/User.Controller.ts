import { clerkClient, getAuth } from "@clerk/express";
import { Request, Response } from "express";

export const getCredits = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    const user = await clerkClient.users.getUser(userId);
    res.json({
      success: true,
      message: "User credits fetched successfully",
      credits: user.privateMetadata.credits,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in getting credits", error });
  }
};

export const updateCredits = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    const user = await clerkClient.users.getUser(userId);
    const credits = (user.privateMetadata.credits as number) - 10;
    res.json({
      success: true,
      message: "User credits updated successfully",
      credits,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error in updating credits", error });
  }
};

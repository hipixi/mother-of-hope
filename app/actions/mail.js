"use server";

import dbConnect from "@/lib/dbConnect";
import Mail from "@/models/Mail";

export const addMail = async (values) => {
  await dbConnect();
  try {
    await Mail.create({
      ...values,
    });

    return {
      success: "Mail successfully added",
    };
  } catch (error) {
    console.error("Error adding email:", error.message);
    return {
      error: "Failed to add email",
    };
  }
};

export const getEmails = async () => {
  await dbConnect();
  const mails = await Mail.find().sort({ createdAt: -1 });
  return mails;
};

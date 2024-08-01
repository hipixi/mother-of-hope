"use server";

import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export const addContact = async (values) => {
  await dbConnect();
  await Contact.create({
    ...values,
  });
  return {
    success: "Contact added successfully",
  };
};

export const getContacts = async () => {
  await dbConnect();

  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    const converteContacts = contacts.map((partner) => ({
      ...partner,
      _id: partner._id.toString(),
    }));

    return converteContacts;
  } catch (error) {
    console.log("failed to fetch", error.message);
    return {
      error: "Failed to fetch",
    };
  }
};

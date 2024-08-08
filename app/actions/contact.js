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

export const deleteContact = async (id) => {
  await dbConnect();
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return { error: "Contact not found" };
    }
    return { success: "Contact deleted successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete contact" };
  }
};

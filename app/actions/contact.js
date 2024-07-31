"use server";

import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export const addContact = async (values) => {
  console.log(values);
  await dbConnect();
  await Contact.create({
    ...values,
  });
  return {
    success: "Contact added successfully",
  };
};

"use server";

import dbConnect from "@/lib/dbConnect";
import Partner from "@/models/Partner";

export const addPartner = async (values) => {
  await dbConnect();
  const { email, tel } = values;
  try {
    const existingPartner = await Partner.findOne({
      $or: [{ email }, { tel }],
    });

    if (existingPartner) {
      return { error: "Partner Request already exists." };
    }

    await Partner.create({
      ...values,
    });

    return {
      success: "Partner successfully added",
    };
  } catch (error) {
    console.error("Error adding partner:", error.message);
    return {
      error: "Failed to add partner",
    };
  }
};

export const getPartners = async () => {
  await dbConnect();

  try {
    const partners = await Partner.find({}).sort({ createdAt: -1 }).lean();
    const convertedPartners = partners.map((partner) => ({
      ...partner,
      _id: partner._id.toString(),
    }));

    return convertedPartners;
  } catch (error) {
    console.log("failed to fetch", error.message);
    return {
      error: "Failed to fetch",
    };
  }
};

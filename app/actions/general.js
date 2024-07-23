"use server";

import dbConnect from "@/lib/dbConnect";
import General from "@/models/General";

export const addGeneral = async (values) => {
  await dbConnect();
  const { email, tel } = values;
  try {
    const existingGeneral = await General.findOne({
      $or: [{ email }, { tel }],
    });

    if (existingGeneral) {
      return { error: "Volunteer Request already exists." };
    }

    await General.create({
      ...values,
    });

    return {
      success: "Volunteer successfully added",
    };
  } catch (error) {
    console.error("Error adding volunteer:", error.message);
    return {
      error: "Failed to add volunteer",
    };
  }
};

export const getGeneral = async () => {
  await dbConnect();

  try {
    const volunteers = await General.find({}).sort({ createdAt: -1 }).lean();
    const convertedVolunteers = volunteers.map((volunteer) => ({
      ...volunteer,
      _id: volunteer._id.toString(),
    }));

    return convertedVolunteers;
  } catch (error) {
    console.log("failed to fetch", error.message);
    return {
      error: "Failed to fetch",
    };
  }
};

export const confirmGeneral = async (id) => {
  console.log(id);
  await dbConnect();

  try {
    const updatedVolunteer = await General.findByIdAndUpdate(
      id,
      { confirmed: true },
      { new: true }
    );

    if (!updatedVolunteer) {
      return { error: "Volunteer not found" };
    }

    return {
      success: "Volunteer successfully confirmed",
      volunteer: updatedVolunteer,
    };
  } catch (error) {
    console.error("Error confirming volunteer:", error.message);
    return {
      error: "Failed to confirm volunteer",
    };
  }
};

export const unconfirmGeneral = async (id) => {
  await dbConnect();

  try {
    const updatedVolunteer = await General.findByIdAndUpdate(
      id,
      { confirmed: false },
      { new: true }
    );

    if (!updatedVolunteer) {
      return { error: "Volunteer not found" };
    }

    return {
      success: "Volunteer successfully unconfirmed",
      volunteer: updatedVolunteer,
    };
  } catch (error) {
    console.error("Error unconfirming volunteer:", error.message);
    return {
      error: "Failed to unconfirm volunteer",
    };
  }
};

export const getRecentUnconfirmedVolunteers = async () => {
  await dbConnect();

  try {
    const volunteers = await General.find({ confirmed: false })
      .sort({ createdAt: -1 })
      .lean();

    const convertedVolunteers = volunteers.map((volunteer) => ({
      ...volunteer,
      _id: volunteer._id.toString(),
    }));

    return convertedVolunteers;
  } catch (error) {
    console.log("Failed to fetch unconfirmed volunteers:", error.message);
    return {
      error: "Failed to fetch unconfirmed volunteers",
    };
  }
};

export const getConfirmedVolunteers = async () => {
  await dbConnect();

  try {
    const volunteers = await General.find({ confirmed: true })
      .sort({ createdAt: -1 })
      .lean();

    const convertedVolunteers = volunteers.map((volunteer) => ({
      ...volunteer,
      _id: volunteer._id.toString(),
    }));

    return convertedVolunteers;
  } catch (error) {
    console.log("Failed to fetch confirmed volunteers:", error.message);
    return {
      error: "Failed to fetch confirmed volunteers",
    };
  }
};

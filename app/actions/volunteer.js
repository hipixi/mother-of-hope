"use server";

import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Events";
import Volunteer from "@/models/Volunteer";

export const addVolunteer = async (eventId, values) => {
  await dbConnect();
  const { email, tel } = values;
  try {
    const existingVolunteer = await Volunteer.findOne({
      event: eventId,
      $or: [{ email }, { tel }],
    });

    if (existingVolunteer) {
      return { error: "Volunteer already exists for this event" };
    }

    const newVolunteer = await Volunteer.create({
      name: values.name,
      tel: values.tel,
      email: values.email,
      event: eventId,
    });

    await Event.findByIdAndUpdate(
      eventId,
      { $push: { volunteers: newVolunteer._id } },
      { new: true }
    );

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

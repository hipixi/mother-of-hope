"use server";

import dbConnect from "@/lib/dbConnect";
import Event from "@/models/Events";
import Volunteer from "@/models/Volunteer";

export const addEvent = async (values) => {
  await dbConnect();
  await Event.create({
    ...values,
  });
  return {
    success: "Event added successfully",
  };
};

export const getEvents = async () => {
  await dbConnect();
  try {
    const events = await Event.find({}).sort({ updatedAt: -1 }).lean();

    const convertedEvents = events.map((event) => ({
      ...event,
      _id: event._id.toString(),
    }));

    return convertedEvents;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export const getEventBySlug = async (id) => {
  await dbConnect();
  try {
    const event = await Event.findById({ _id: id })
      .populate({
        path: "volunteers",
        model: "Volunteer",
        options: { sort: { createdAt: -1 } },
      })
      .lean();
    if (!event) {
      return { error: "Post not found" };
    }
    return { event: { ...event, _id: event._id.toString() } };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch event" };
  }
};

export async function deleteEvent(id) {
  await dbConnect();

  try {
    await Event.deleteOne({ _id: id });
    return { sucess: "deleted" };
  } catch (error) {
    console.log("failed to delete event", error);
    return;
  }
}

export const editEvent = async (id, values) => {
  await dbConnect();
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, values, {
      new: true,
    });
    if (!updatedEvent) {
      return { error: "Event not found" };
    }
    return { success: "Event updated successfully", post: updatedEvent };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update event" };
  }
};

export const getOtherEvents = async (currentEventId) => {
  await dbConnect();
  try {
    const events = await Event.find({ _id: { $ne: currentEventId } })
      .sort({ updatedAt: -1 })
      .limit(3)
      .lean();

    const convertedEvents = events.map((event) => ({
      ...event,
      _id: event._id.toString(),
    }));

    return convertedEvents;
  } catch (error) {
    console.error(error);
    return [];
  }
};

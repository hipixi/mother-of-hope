import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    description: { type: String, trim: true, maxlength: 1000 },
    about: { type: String },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    location: { type: String, trim: true },
    volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Volunteer" }],
    status: {
      type: String,
      enum: ["Upcoming", "Ongoing", "Completed", "Cancelled"],
      default: "Upcoming",
    },
  },
  { timestamps: true }
);

eventSchema.index({ title: "text", description: "text" });
eventSchema.index({ date: 1 });

eventSchema.path("endTime").validate(function (value) {
  return this.startTime < value;
}, "End time must be after start time");

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;

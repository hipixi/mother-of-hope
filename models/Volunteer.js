import mongoose from "mongoose";
const volunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    tel: {
      type: String,
      required: true,
      trim: true,
      match: /^\+?[\d\s-()]{10,20}$/,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Volunteer ||
  mongoose.model("Volunteer", volunteerSchema);

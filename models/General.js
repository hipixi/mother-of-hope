import mongoose from "mongoose";
const generalSchema = new mongoose.Schema(
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
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    confirmed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.General ||
  mongoose.model("General", generalSchema);

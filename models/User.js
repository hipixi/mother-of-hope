import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    email: { type: String },
    image: { type: String },
    password: { type: String },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

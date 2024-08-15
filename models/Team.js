import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: { type: String },
    position: { type: String },
    education: { type: String },
    about: { type: String },
    image: { type: String },
    linkedin: { type: String },
    email: { type: String },
    tels: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.Team || mongoose.model("Team", teamSchema);

import mongoose from "mongoose";
const mailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Mail || mongoose.model("Mail", mailSchema);

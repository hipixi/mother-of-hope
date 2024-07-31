import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    email: { type: String },
    phone: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);

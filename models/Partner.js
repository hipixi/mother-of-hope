import mongoose from "mongoose";
const partnerSchema = new mongoose.Schema(
  {
    companyname: { type: String, required: true, trim: true, maxlength: 100 },
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
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Partner ||
  mongoose.model("Partner", partnerSchema);

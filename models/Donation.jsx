import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  paypalDetails: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);

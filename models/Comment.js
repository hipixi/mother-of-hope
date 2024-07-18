import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);

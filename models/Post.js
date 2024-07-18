import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String },
    content: { type: String, required: true },
    featuredImage: { type: String },
    author: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    tags: [{ type: String, index: true }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

blogSchema.index({ author: 1, createdAt: -1 });

blogSchema.index({ title: "text" });

export default mongoose.models.Post || mongoose.model("Post", blogSchema);

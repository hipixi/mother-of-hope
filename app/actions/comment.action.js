"use server";

import dbConnect from "@/lib/dbConnect";
import Comment from "@/models/Comment";
import Post from "@/models/Post";

export const addComment = async (postId, values) => {
  console.log(postId, "ooo");
  console.log("values", values);
  await dbConnect();
  try {
    const newComment = await Comment.create({
      message: values.message,
      name: values.name,
      email: values.email,
      post: postId,
    });

    await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: newComment._id } },
      { new: true }
    );

    return {
      success: "Comment successfully added",
    };
  } catch (error) {
    console.error("Error adding comment:", error.message);
    return {
      error: "Failed to add comment",
    };
  }
};

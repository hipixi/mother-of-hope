"use server";

import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import Comment from "@/models/Comment";

export const addPost = async (values) => {
  await dbConnect();
  await Post.create({
    ...values,
  });
  return {
    success: "Post added successfully",
  };
};

export const getPosts = async () => {
  await dbConnect();
  try {
    const posts = await Post.find({}).sort({ updatedAt: -1 }).lean();

    const convertedPosts = posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
    }));

    return convertedPosts;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export const editPost = async (id, values) => {
  await dbConnect();
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, values, { new: true });
    if (!updatedPost) {
      return { error: "Post not found" };
    }
    return { success: "Post updated successfully", post: updatedPost };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update post" };
  }
};

export const deletePost = async (id) => {
  await dbConnect();
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return { error: "Post not found" };
    }
    return { success: "Post deleted successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete post" };
  }
};

export const getPostBySlug = async (id) => {
  await dbConnect();
  try {
    const post = await Post.findById({ _id: id }).lean();
    if (!post) {
      return { error: "Post not found" };
    }
    return { post: { ...post, _id: post._id.toString() } };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch post" };
  }
};

export const getSinglePost = async (slug) => {
  await dbConnect();
  try {
    const post = await Post.findOne({ slug })
      .populate({
        path: "comments",
        model: "Comment",
        options: { sort: { createdAt: -1 } },
      })
      .lean();
    if (!post) {
      return { error: "Post not found" };
    }
    return {
      post: {
        ...post,
        _id: post._id.toString(),
        comments: post.comments?.map((comment) => ({
          ...comment,
          _id: comment._id.toString(),
        })),
      },
    };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch post" };
  }
};

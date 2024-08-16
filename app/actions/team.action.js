"use server";
import dbConnect from "@/lib/dbConnect";
import Team from "@/models/Team";
import { cache } from "react";

export const addMember = async (values) => {
  await dbConnect();
  await Team.create({
    ...values,
  });
  return {
    success: "Post added successfully",
  };
};

export const getTeam = async () => {
  await dbConnect();
  try {
    const users = await Team.find({}).sort({ createdAt: 1 }).lean();

    const convertedUsers = users.map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));

    return convertedUsers;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteMember = async (id) => {
  await dbConnect();
  try {
    const deletedMember = await Team.findByIdAndDelete(id);
    if (!deletedMember) {
      return { error: "Memner not found" };
    }
    return { success: "Memner deleted successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete post" };
  }
};

export const getMemberBySlug = async (id) => {
  await dbConnect();
  try {
    const post = await Team.findById({ _id: id }).lean();
    if (!post) {
      return { error: "Post not found" };
    }
    return { member: { ...post, _id: post._id.toString() } };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch post" };
  }
};

export const getMemberByName = async (name) => {
  await dbConnect();
  try {
    const post = await Team.findOne({ name: name }).lean();
    if (!post) {
      return { error: "Post not found" };
    }
    return { member: { ...post, _id: post._id.toString() } };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch post" };
  }
};

export const editMember = async (id, values) => {
  await dbConnect();
  try {
    const updatedPost = await Team.findByIdAndUpdate(id, values, { new: true });
    if (!updatedPost) {
      return { error: "Post not found" };
    }
    return { success: "Post updated successfully", post: updatedPost };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update post" };
  }
};

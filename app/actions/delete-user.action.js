"use server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export const deleteUser = async (id) => {
  await dbConnect();
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return { error: "User not found" };
    }
    return { success: "User deleted successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete post" };
  }
};

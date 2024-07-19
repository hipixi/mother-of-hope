"use server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const updateUserProfile = async (id, url) => {
  await dbConnect();
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { image: url },
      { new: true }
    );
    if (!updatedUser) {
      return { error: "User not found" };
    }
    return { success: "profile updated successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update image" };
  }
};

export const updateUserEmailName = async (id, fullname, email) => {
  await dbConnect();
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fullname: fullname },
      { email: email },
      { new: true }
    );
    if (!updatedUser) {
      return { error: "User not found" };
    }
    return { success: "profile updated successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update profile" };
  }
};

export const updateUserPassword = async (_id, newPass, oldPass) => {
  await dbConnect();
  try {
    const user = await User.findById({
      _id,
    });

    const isPasswordValid = await bcrypt.compare(oldPass, user.password);

    if (!isPasswordValid) {
      return { error: "Wrong old password" };
    }

    const hashedNewPassword = await bcrypt.hash(newPass, 10);
    user.password = hashedNewPassword;
    await user.save();
    return { success: "password updated successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update profile" };
  }
};

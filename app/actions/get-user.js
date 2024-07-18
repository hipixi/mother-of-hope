import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { cache } from "react";

export const getUser = cache(async () => {
  const { user } = await auth();

  if (user) {
    const convertedUserInfo = {
      ...user,
      id: user?.id.toString(),
    };

    return convertedUserInfo;
  }

  return null;
});

export const getUsers = cache(async () => {
  await dbConnect();
  try {
    const users = await User.find({}).sort({ updatedAt: -1 }).lean();

    const convertedUsers = users.map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));

    return convertedUsers;
  } catch (error) {
    console.log(error);
    return [];
  }
});

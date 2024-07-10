import { auth } from "@/lib/auth";
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

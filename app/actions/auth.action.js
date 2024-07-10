"use server";

import { lucia, auth } from "@/lib/auth";
import { cookies } from "next/headers";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const signUp = async (values) => {
  await dbConnect();
  const { email, password, fullname } = values;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    return { error: "User already exists" };
  }

  await User.create({
    email,
    password: hashedPassword,
    fullname,
  });

  return {
    success: "created Successfully",
  };
};

export const signIn = async (values) => {
  const { email, password } = values;

  const existingUser = await User.findOne({
    email,
  });

  if (!existingUser) {
    return { error: "No Account with Email found" };
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return { error: "Wrong password" };
  }

  const session = await lucia.createSession(existingUser._id, {});

  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return {
    success: "Logged in Successfully",
  };
};

export const signOut = async () => {
  try {
    const { session } = await auth();
    if (!session) {
      return { error: "Unauthorized!" };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error) {
    return { error: error?.message };
  }
};

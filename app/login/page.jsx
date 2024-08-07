import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignInForm from "./form";

export const metadata = {
  title: "Login | Mother of hope foundation uganda",
  description:
    "Login to MOHFU to access your account and manage your preferences.",
};

export default async function SignIn() {
  const { user } = await auth();
  if (user) {
    redirect("/");
  }
  return (
    <section>
      <SignInForm />
    </section>
  );
}

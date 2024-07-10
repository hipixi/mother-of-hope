import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignInForm from "./form";

export const metadata = {
  title: "MOHFU - Login",
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

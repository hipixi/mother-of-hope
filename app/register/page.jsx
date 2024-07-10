import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignUpForm from "./form";

export const metadata = {
  title: "Baiaid - Signup",
  description:
    "Create your baiaid account to start contributing and getting inside insights",
};

export default async function SignUp() {
  //   const { user } = await auth();
  //   if (user) {
  //     redirect("/");
  //   }
  return (
    <section>
      <SignUpForm />
    </section>
  );
}
// const Register = () => {
//   return <div>Contact your administrator</div>;
// };

// export default Register;

"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "../actions/auth.action";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const signUpSchema = z.object({
  fullname: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignUpForm() {
  const [signUpError, setSignUpError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pending, startTransition] = useTransition();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    startTransition(() =>
      signUp(data).then((data) => {
        if (data?.error) {
          setSignUpError(data?.error);
        } else {
          router.push("/login");
        }
      })
    );
  };

  return (
    <div className="md:flex md:flex-row-reverse w-full">
      <div className="bg-blue-500 lg:w-1/2 h-1/4 md:min-h-screen flex items-center justify-center relative p-4">
        <div className="bg-white rounded-full p-2 flex items-center justify-center md:hidden w-24 h-24">
          <img src="./icon.svg" className="h-20 w-20 object-contain" />
        </div>
      </div>

      <div className="bg-white flex flex-col justify-center items-center w-full p-5 md:px-12 md:py-4 lg:w-1/2">
        <Link href="/">
          <img
            src="./icon.svg"
            className="h-12 md:h-20 mb-4 w-12 md:w-20 hidden md:block"
          />
        </Link>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
          Welcome to Baiaid
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-lg"
        >
          {signUpError.length > 0 && (
            <div className="text-sm text-destructive font-semibold">
              {signUpError}
            </div>
          )}
          <div>
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              {...register("fullname")}
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={errors.password ? "border-red-500" : ""}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-3 h-full px-3 py-2 hover:bg-transparent"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </div>
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-500"
            disabled={pending}
          >
            {pending ? "Signing up..." : "Sign up"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

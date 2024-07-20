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
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { signIn } from "../actions/auth.action";

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignUpForm() {
  const [signInError, setSignInError] = useState("");
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
      signIn(data).then((data) => {
        if (data?.error) {
          setSignInError(data?.error);
        } else {
          router.push("/");
        }
      })
    );
  };

  return (
    <div className="md:flex md:flex-row-reverse w-full">
      <div className="bg-green-500 lg:w-1/2 h-1/4 md:min-h-screen flex items-center justify-center relative p-4">
        <div className="bg-white rounded-full flex items-center justify-center md:hidden w-32 h-32">
          <Link href="/">
            <img src="./logo.svg" className="h-32 w-32 object-contain" />
          </Link>
        </div>
      </div>

      <div className="bg-white flex flex-col justify-center items-center w-full p-5 md:px-12 md:py-4 lg:w-1/2">
        <Link href="/">
          <img src="./logo.svg" className="h-32 h-32 mb-4  hidden md:block" />
        </Link>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
          Welcome Back
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-lg"
        >
          {signInError.length > 0 && (
            <div className="text-sm text-destructive font-semibold">
              {signInError}
            </div>
          )}

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
            By signing in, you agree to our{" "}
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
            className="w-full text-black h-12 bg-yellow-400 hover:bg-yellow-500 font-bold"
            disabled={pending}
          >
            {pending ? "Signing in..." : "Sign in"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Your New, Contact your administrator
          </p>
        </div>
      </div>
    </div>
  );
}

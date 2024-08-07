"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signUp } from "@/app/actions/auth.action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const signUpSchema = z.object({
  fullname: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["user", "admin"]),
});

const AddUser = () => {
  const [open, setOpen] = useState(false);
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
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = async (data) => {
    startTransition(() =>
      signUp(data).then((data) => {
        if (data?.error) {
          setSignUpError(data?.error);
        } else {
          router.refresh();
          setOpen(false);
        }
      })
    );
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="ml-auto">
            <Button
              size="sm"
              variant="outline"
              className="text-xs font-semibold flex items-center gap-1"
            >
              <Plus /> New User
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>New User</DialogTitle>
          </DialogHeader>
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
                className={errors.fullname ? "border-red-500" : ""}
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
                className="absolute right-2 top-11 transform -translate-y-1/2"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      className={errors.role ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full font-semibold h-12"
              disabled={pending}
            >
              {pending ? "Creating user..." : "Create User"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddUser;

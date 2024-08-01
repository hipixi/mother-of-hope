"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateUserRole } from "@/app/actions/update-user";
import { useToast } from "@/components/ui/use-toast";

const signUpSchema = z.object({
  role: z.enum(["user", "admin"]),
});

const EditUser = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [pending, startTransition] = useTransition();
  const { toast } = useToast();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      role: user.role,
    },
  });

  const onSubmit = async (data) => {
    startTransition(() =>
      updateUserRole(user._id, data).then((data) => {
        if (data?.error) {
          setSignUpError(data?.error);
        } else {
          router.refresh();
          setOpen(false);
          toast({
            title: "User Role updated successfully",
          });
        }
      })
    );
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="sm" variant="outine">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Update User Role</DialogTitle>
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
              {pending ? "Updating user..." : "Update User"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditUser;

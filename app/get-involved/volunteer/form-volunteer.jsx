"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { addGeneral } from "@/app/actions/general";

const eventSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  tel: z.string().min(10, "invalid tel"),
});

const FormVolunteer = () => {
  const [pending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (values) => {
    startTransition(() =>
      addGeneral(values).then((data) => {
        if (data.success) {
          toast({
            title:
              "Your volunteer request has successfully been submitted. We will contact you soon",
          });
          reset();
          router.refresh();
        } else {
          setError(data.error);
        }
      })
    );
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full mt-3 bg-card p-6 rounded"
      >
        {error && (
          <p className="text-destructive font-semibold my-2">{error}</p>
        )}

        <h3 className="font-medium text-lg">Apply to volunteer*</h3>
        <div>
          <Label htmlFor="title">Your Name</Label>
          <Input
            id="name"
            {...register("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="location">Phone Number:</Label>
          <Input
            type="tel"
            id="tel"
            {...register("tel")}
            className={errors.tel ? "border-red-500" : ""}
          />
          {errors.tel && (
            <p className="text-red-500 text-sm mt-1">{errors.tel.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="date">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full font-semibold h-12"
          disabled={pending}
        >
          {pending ? "Submiting Request..." : "Submit Request"}
        </Button>
      </form>
    </>
  );
};

export default FormVolunteer;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { addVolunteer } from "@/app/actions/volunteer";
import { useRouter } from "next/navigation";

const eventSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  tel: z.string().min(10, "invalid tel"),
});

const Volunteer = ({ id }) => {
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
      addVolunteer(id, values).then((data) => {
        if (data.success) {
          toast({
            title: "You have successfully been added as a volunteer",
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
      <h2 className="font-semibold">Volunteer for this Event</h2>

      {error && (
        <p className="text-destructive my-1 text-sm font-medium">{error}</p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full mt-3 max-w-lg"
      >
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
          <Label htmlFor="location">Tel:</Label>
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
          {pending ? "Submiting..." : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default Volunteer;

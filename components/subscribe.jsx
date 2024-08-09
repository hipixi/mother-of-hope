"use client";
import { useTransition } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { addMail } from "@/app/actions/mail";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "./ui/use-toast";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});
const Subscribe = () => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    startTransition(() =>
      addMail(data).then((data) => {
        if (data?.success) {
          toast({
            title:
              "Thanks for subscribing! You'll receive our latest updates soon.",
          });
          router.refresh();
        }
      })
    );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="ring-2 ring-yellow-500 bg-white shadow text-black rounded-lg p-6 h-auto flex flex-col justify-center gap-6"
    >
      <h3 className="uppercase font-semibold">Stay connected</h3>

      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register("email")}
        className={`${
          errors.name && "border-red-500"
        } h-11 md:h-12 boreder-none`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="font-semibold  text-black uppercase rounded-none flex items-center gap-2"
      >
        Submit
        <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default Subscribe;

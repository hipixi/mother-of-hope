"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { addComment } from "@/app/actions/comment.action";
import { useRouter } from "next/navigation";
import FormatDate from "@/components/format-date";

const commentSchema = z.object({
  name: z.string().min(3, "Name required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(8, "message is required"),
});
export default function Comments({ id, comments }) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    startTransition(() =>
      addComment(id, data).then((data) => {
        if (data?.success) {
          router.refresh();
        }
      })
    );
  };
  return (
    <div className="w-full border rounded-lg my-8 p-4 max-w-3xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Comments</h2>
        <p className="text-muted-foreground">
          Share your thoughts and feedback on this post.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Write your comment"
            className={`min-h-[120px] ${errors.message && "border-red-500"}`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={pending}
          className="w-full bg-gray-800 text-white font-medium hover:bg-gray-900"
        >
          {pending ? "Submitting comment" : "Submit Comment"}
        </Button>
      </form>
      <div className="space-y-6">
        {comments?.map((comment) => (
          <div className="flex items-start gap-4" key={comment._id}>
            <Avatar className="w-10 h-10 border">
              <AvatarFallback>
                {comment.name
                  .trim()
                  .split(" ")
                  .map((part) => part.charAt(0).toUpperCase())
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2">
                <div className="font-semibold">
                  @{comment.name.trim().split(" ").join("")}
                </div>
                <div className="text-xs text-muted-foreground">
                  <FormatDate date={comment.createdAt} />
                </div>
              </div>
              <div>{comment.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

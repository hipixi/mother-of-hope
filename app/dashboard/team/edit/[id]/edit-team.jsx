"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { editMember } from "@/app/actions/team.action";
import { useToast } from "@/components/ui/use-toast";
import ProfileImage from "../../profile-image";

const signUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  position: z.string().min(3, "position is required"),
  education: z.string(),
  about: z.string().min(3, "about is required"),
  image: z.string().min(3, "image is required"),
  linkedin: z.string(),
  email: z.string().email("Invalid email address"),
  tels: z.string().min(3, "contact is required"),
});

const EditTeam = ({ initialData }) => {
  const [pending, startTransition] = useTransition();
  const [uploading, setUploading] = useState(false);
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
      name: initialData.name || "",
      position: initialData.position || "",
      education: initialData.education || "",
      image: initialData.image || "",
      linkedin: initialData.linkedin || "",
      email: initialData.email || "",
      tels: initialData.tels || "",
      about: initialData.about || "",
    },
  });

  const { field: imageField } = useController({
    name: "image",
    control,
    defaultValue: initialData.image || "",
  });

  const onSubmit = async (data) => {
    startTransition(() =>
      editMember(data).then((data) => {
        if (data.success) {
          toast({
            title: "Team member edited successfully",
          });
          router.push("/dashboard/team");
        }
      })
    );
  };

  return (
    <div className="border mt-8 rounded mx-auto w-[97%] max-w-xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Team Member</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-lg"
      >
        <div>
          <Label htmlFor="fullname">Full Name</Label>
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
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            {...register("position")}
            className={errors.position ? "border-red-500" : ""}
          />
          {errors.position && (
            <p className="text-red-500 text-sm mt-1">
              {errors.position.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="fullname">About</Label>
          <Textarea
            id="about"
            {...register("about")}
            className={errors.about ? "border-red-500" : ""}
          />
          {errors.about && (
            <p className="text-red-500 text-sm mt-1">{errors.about.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="fullname">Education</Label>
          <Input
            id="education"
            {...register("education")}
            className={errors.education ? "border-red-500" : ""}
          />
          {errors.education && (
            <p className="text-red-500 text-sm mt-1">
              {errors.education.message}
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
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="linkedin">Linkedin Profile</Label>
          <Input
            id="linkedin"
            {...register("linkedin")}
            className={errors.linkedin ? "border-red-500" : ""}
          />
          {errors.linkedin && (
            <p className="text-red-500 text-sm mt-1">
              {errors.linkedin.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="image" className="font-semibold mb-2">
            Profile Image
          </Label>

          <ProfileImage
            value={imageField.value ? [imageField.value] : []}
            disabled={uploading}
            onChange={(featuredImage) => imageField.onChange(featuredImage)}
            onRemove={() => imageField.onChange("")}
            setUploading={setUploading}
            uploading={uploading}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="tels">Contact</Label>
          <Input
            id="tels"
            placeholder="Separate contacts with a comma"
            {...register("tels")}
            className={errors.tels ? "border-red-500" : ""}
          />
          {errors.tels && (
            <p className="text-red-500 text-sm mt-1">{errors.tels.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full font-semibold h-12"
          disabled={pending}
        >
          {pending ? "Editing member..." : "Edit Member"}
        </Button>
      </form>
    </div>
  );
};

export default EditTeam;

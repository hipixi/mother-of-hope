"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { ImagePlus, Loader, Plus } from "lucide-react";
import { Form } from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addImage } from "@/app/actions/image.action";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  url: z.string().min(1, {
    message: "choose an image please",
  }),
});

const AddImage = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, startTransition] = useTransition();
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  const onSubmit = (values) => {
    startTransition(() => {
      addImage(values).then((data) => {
        if (data?.success) {
          setOpen(false);
          form.reset();
          router.refresh();
        }
      });
    });
  };

  const uploadToR2 = async (file) => {
    try {
      setIsUploading(true);

      // First, get a presigned URL from our API
      const presignedUrlResponse = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      });

      if (!presignedUrlResponse.ok) {
        throw new Error("Failed to get upload URL");
      }

      const { url: presignedUrl, filename } = await presignedUrlResponse.json();

      // Upload the file directly to R2 using the presigned URL
      const uploadResponse = await fetch(presignedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file");
      }

      // Return the public URL for the uploaded file
      const publicUrl = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${filename}`;
      return publicUrl;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Show preview
        const reader = new FileReader();
        reader.onload = (e) => setPreviewImage(e.target.result);
        reader.readAsDataURL(file);

        // Upload to R2
        const imageUrl = await uploadToR2(file);
        form.setValue("url", imageUrl);
      } catch (error) {
        form.setError("featuredImage", {
          type: "manual",
          message: "Failed to upload image. Please try again.",
        });
      }
    }
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
              <Plus /> New Image
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>New Image</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 py-1 w-full"
            >
              {/* Image Upload Section */}
              <div className="space-y-2">
                <div className="relative w-full h-40 lg:h-60 rounded-xl">
                  <div className="w-full h-full border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover object-top rounded-lg"
                      />
                    ) : (
                      <ImagePlus className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <label className="absolute inset-0 cursor-pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <div className="w-full h-full rounded-full  bg-opacity-0 hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center group">
                      <ImagePlus className="w-6 h-6 text-black opacity-0 group-hover:opacity-0 transition-opacity duration-200" />
                    </div>
                  </label>

                  {isUploading && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white">
                      <Loader className="w-6 h-6 animate-spin" />
                    </div>
                  )}
                </div>
              </div>

              <DialogFooter className="gap-2 pt-6 sm:space-x-0 ">
                <DialogClose>
                  <Button
                    className="w-full md:w-auto"
                    type="button"
                    variant="outline"
                    size="sm"
                  >
                    Cancel
                  </Button>
                </DialogClose>

                <Button type="submit" size="sm" disabled={loading || uploading}>
                  Add Image
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddImage;

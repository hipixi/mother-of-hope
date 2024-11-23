"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { updateUserProfile } from "../actions/update-user";

const ChangeImage = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleRemove = () => {
    setValue("");
  };

  const handleUpdateProfile = async () => {
    startTransition(() => {
      updateUserProfile(user.id, value).then((data) => {
        if (data.success) {
          router.refresh();
          setIsOpen(false);
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
        setValue(imageUrl);
        router.refresh();
      } catch (error) {
        form.setError("image", {
          type: "manual",
          message: "Failed to upload image. Please try again.",
        });
      }
    }
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12 rounded-full">
          <AvatarImage src={user?.image || "/placeholder-user.jpg"} />
          <AvatarFallback>{user?.fullname[0]}</AvatarFallback>
        </Avatar>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          {/* trigger dialog */}
          <DialogTrigger>
            <Button variant="outline">Change Photo</Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl sm:rounded-2xl sm:p-8 w-[95%] mx-auto  ">
            <div className="pt-6 flex text-start flex-col items-center justify-center">
              {value ? (
                <div className="relative h-48 w-48 rounded-full border-2 border-gray-300 shadow-lg">
                  <img
                    src={value}
                    alt="Uploaded"
                    className="object-cover object-center rounded-full h-full w-full"
                  />
                  <button
                    onClick={handleRemove}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <Input
                  type="file"
                  disabled={isUploading}
                  onChange={handleImageChange}
                />
              )}
            </div>

            <Button
              onClick={handleUpdateProfile}
              disabled={uploading || !value || pending || isUploading}
            >
              {isUploading ? "Uploading..." : "Update Profile"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ChangeImage;

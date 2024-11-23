"use client";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { updatePartnerLogo } from "@/app/actions/partner";
import { useToast } from "@/components/ui/use-toast";

const AddLogo = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { toast } = useToast();

  const handleRemove = () => {
    setValue("");
  };

  const handleUpdateProfile = async () => {
    startTransition(() => {
      updatePartnerLogo(id, value).then((data) => {
        if (data.success) {
          router.refresh();
          toast({
            title: "Logo Added Successfully.",
          });
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
      <div className="pt-6 flex text-start flex-col items-center justify-center">
        {value ? (
          <div className="relative">
            <img
              src={value}
              alt="Uploaded"
              className="object-contain object-top w-[300px] h-20"
            />
            <button
              onClick={handleRemove}
              className="absolute top-1 right-2 text-destructive"
            >
              <X />
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
        {uploading ? "Uploading..." : "Update Logo"}
      </Button>
    </>
  );
};

export default AddLogo;

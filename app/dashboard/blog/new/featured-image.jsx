"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

const FeaturedImage = ({
  value,
  onChange,
  onRemove,
  setUploading,
  uploading,
}) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "dantemoh");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        onChange(data.secure_url);
      } catch (error) {
        console.error("Error uploading image", error);
      } finally {
        setLoading(false);
        setUploading(false);
      }
    }
  };

  return (
    <div>
      {value.length > 0 ? (
        <div className="relative">
          <img
            src={value}
            alt="Uploaded"
            className="object-cover w-full h-[200px]"
          />
          <button
            onClick={onRemove}
            className="absolute top-1 right-1 text-destructive"
          >
            <X />
          </button>
        </div>
      ) : (
        <Input type="file" onChange={handleFileChange} disabled={uploading} />
      )}
      {loading && <p>Uploading...</p>}
    </div>
  );
};

export default FeaturedImage;

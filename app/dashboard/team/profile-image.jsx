"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProfileImage = ({
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
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        try {
          const response = await fetch("/api/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: reader.result }),
          });
          if (!response.ok) {
            throw new Error("Upload failed");
          }
          const data = await response.json();
          onChange(data.url);
        } catch (error) {
          console.error("Error uploading image", error);
        } finally {
          setLoading(false);
          setUploading(false);
        }
      };
    }
  };

  return (
    <div>
      {value.length > 0 ? (
        <div className="relative flex items-center justify-center">
          <img
            src={value}
            alt="Uploaded"
            className="object-cover rounded-full  w-[200px] h-[200px]"
          />
          <button
            onClick={onRemove}
            className="absolute bg-black rounded-full top-2 right-1 text-white p-1"
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

export default ProfileImage;

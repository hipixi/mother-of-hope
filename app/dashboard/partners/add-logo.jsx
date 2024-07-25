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
  const { toast } = useToast();

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
          setValue(data.url);
        } catch (error) {
          console.error("Error uploading image", error);
        } finally {
          setLoading(false);
          setUploading(false);
        }
      };
    }
  };

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
          <Input type="file" onChange={handleFileChange} />
        )}
      </div>

      <Button
        onClick={handleUpdateProfile}
        disabled={uploading || !value || pending}
      >
        {uploading ? "Uploading..." : "Update Logo"}
      </Button>
    </>
  );
};

export default AddLogo;

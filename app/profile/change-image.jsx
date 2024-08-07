"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { updateUserProfile } from "../actions/update-user";
import { useRouter } from "next/navigation";

const ChangeImage = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const [pending, startTransition] = useTransition();

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
      updateUserProfile(user.id, value).then((data) => {
        if (data.success) {
          router.refresh();
        }
      });
    });
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12 rounded-full">
          <AvatarImage src={user.image || "/placeholder-user.jpg"} />
          <AvatarFallback>{user.fullname[0]}</AvatarFallback>
        </Avatar>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Change Photo</Button>
          </DialogTrigger>
          <DialogContent>
            <div className="pt-6 flex text-start flex-col items-center justify-center">
              {value ? (
                <div className="relative h-48 w-48 rounded-full border-2 border-gray-300 shadow-lg">
                  <img
                    src={value}
                    alt="Uploaded"
                    className="object-cover object-top rounded-full h-full w-full"
                  />
                  <button
                    onClick={handleRemove}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                  >
                    <X className="h-4 w-4" />
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
              {uploading ? "Uploading..." : "Update Profile"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ChangeImage;

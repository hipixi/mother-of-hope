"use client";
import { deleteImage } from "@/app/actions/image.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SingleImage = ({ image }) => {
  const [imageLoad, setImageLoad] = useState(true);
  const router = useRouter();

  const onLoad = () => {
    setImageLoad(false);
  };

  const handleDelete = async (id) => {
    const data = await deleteImage(id);
    if (data?.sucess) {
      router.refresh();
    }
  };

  return (
    <div
      shallow
      className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
    >
      <img
        alt=""
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 w-full h-[250px] md:h-[300px] object-cover"
        style={{ transform: "translate3d(0, 0, 0)" }}
        src={image.url}
        onLoad={onLoad}
      />

      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="icon" className="absolute top-0 right-0 text-white">
            <X className="w-4 h-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              image from the servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white"
              onClick={() => handleDelete(image._id)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SingleImage;
const ImageSkeleton = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg w-full h-[250px] md:h-[300px]"></div>
);

"use client";

import { deleteEvent } from "@/app/actions/event.action";
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
import { useToast } from "@/components/ui/use-toast";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteEvent = ({ id }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleDelete = async (id) => {
    const data = await deleteEvent(id);
    if (data?.sucess) {
      toast({
        title: "Event successfully deleted",
      });
      router.push("/dashboard/events");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash className="w-5 h-5 cursor-pointer absolute bott-4 right-4 " />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the event
            from the servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive text-white"
            onClick={() => handleDelete(id)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteEvent;

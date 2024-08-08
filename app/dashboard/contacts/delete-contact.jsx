"use client";

import { deleteContact } from "@/app/actions/contact";
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

const DeleteContact = ({ id }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleDelete = async (id) => {
    const data = await deleteContact(id);
    if (data?.success) {
      toast({
        title: "Contact successfully deleted",
      });
      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash className="w-5 h-5" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            Contact from the servers.
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

export default DeleteContact;

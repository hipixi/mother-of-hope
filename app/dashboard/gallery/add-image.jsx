"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import ImageUpload from "@/components/image-upload";

import { Plus } from "lucide-react";
import {
  Form,
  FormField,
  FormMessage,
  FormControl,
  FormItem,
} from "@/components/ui/form";
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

const formSchema = z.object({
  url: z.string().min(1, {
    message: "choose an image please",
  }),
});

const AddImage = () => {
  const [open, setOpen] = useState(false);
  const [loading, startTransition] = useTransition();
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

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
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageUpload
                        value={field.value ? [field.value] : []}
                        disabled={loading}
                        onChange={(url) => field.onChange(url)}
                        onRemove={() => field.onChange("")}
                        setUploading={setUploading}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

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

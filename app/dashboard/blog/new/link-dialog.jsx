import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LinkIcon } from "lucide-react";
import { useState } from "react";

function LinkDialog({ editor }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const addLink = () => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
    setOpen(false);
    setUrl("");
  };

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={
            editor.isActive("link") ? "font-bold bg-black text-white" : ""
          }
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add or Remove Link</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Input
            type="url"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <Button onClick={removeLink} variant="outline">
              Remove Link
            </Button>
            <Button onClick={addLink}>Add Link</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LinkDialog;

"use client";
import { cn } from "@/lib/utils";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import {
  BubbleMenu,
  EditorContent,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Highlighter,
  Italic,
  List,
  Strikethrough,
} from "lucide-react";
import { FaStrikethrough } from "react-icons/fa";
import LinkDialog from "./link-dialog";
import ImageUploadButton from "./image-upload";
import { Skeleton } from "@/components/ui/skeleton";

export default function Editor({ onContentChange, initialContent }) {
  const editor = useEditor({
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onContentChange(html);
    },
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: "https",
      }),
      Image,
    ],

    content: initialContent || "",
    editorProps: {
      attributes: {
        class:
          "prose p-5 w-full prose:max-w-full min-h-52 bg-white shadow focus:outline-none focus:ring-0",
      },
    },
  });

  if (!editor)
    return (
      <>
        <Skeleton className="w-full max-w-prose h-12 bg-muted" />

        <Skeleton className="w-full max-w-prose h-48 bg-slate-50" />
      </>
    );

  return (
    <div className="border w-full max-w-prose">
      {editor && (
        <BubbleMenu
          className="bg-white rounded border gap-2 shadow flex p-2"
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <LinkDialog editor={editor} />
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold")
                ? "font-bold bg-black text-white"
                : "border-r"
            }
          >
            <Bold className="w-4 h-4 pr-1" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic") ? "font-bold bg-black text-white" : ""
            }
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={
              editor.isActive("strike") ? "font-bold bg-black text-white" : ""
            }
          >
            <Strikethrough className="w-4 h-4" />
          </button>
        </BubbleMenu>
      )}

      {editor && (
        <FloatingMenu
          className="flex bg-gray-200 gap-2 rounded px-2 py-[2px]"
          tippyOptions={{ duration: 100, zIndex: 10 }}
          editor={editor}
        >
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "bg-white ring-1 rounded px-1 py-[1px]"
                : ""
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "bg-white ring-1 rounded px-1 py-[1px]"
                : ""
            }
          >
            H2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 })
                ? "bg-white ring-1 rounded px-1 py-[1px]"
                : ""
            }
          >
            H3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 })
                ? "bg-white ring-1 rounded px-1 py-[1px]"
                : ""
            }
          >
            H4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 })
                ? "bg-white ring-1 rounded px-1 py-[1px]"
                : ""
            }
          >
            H5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 })
                ? "bg-white ring-1 rounded px-1 py-[1px]"
                : ""
            }
          >
            H6
          </button>
          <ImageUploadButton editor={editor} />

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList")
                ? "bg-white ring-1 rounded px-1 py-[1px]"
                : ""
            }
          >
            <List className="w-4 h-4" />
          </button>
        </FloatingMenu>
      )}
      <div className="flex p-2 mb-1 gap-2 flex-wrap bg-muted max-w-prose border-b">
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive("italic") ? "text-white bg-black" : ""
          )}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive("bold") ? "text-white bg-black" : ""
          )}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={cn(
            "border rounded border-black px-2 underline",
            editor.isActive("underline") ? "text-white bg-black" : ""
          )}
        >
          U
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive("paragraph") ? "text-white bg-black" : ""
          )}
        >
          P
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive("strike") ? "text-white bg-black" : ""
          )}
        >
          <FaStrikethrough className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive("highlight") ? "text-white bg-black" : ""
          )}
        >
          <Highlighter className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive({ textAlign: "left" }) ? "text-white bg-black" : ""
          )}
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive({ textAlign: "center" })
              ? "text-white bg-black"
              : ""
          )}
        >
          <AlignCenter className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive({ textAlign: "right" }) ? "text-white bg-black" : ""
          )}
        >
          <AlignRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={cn(
            "border rounded border-black px-2",
            editor.isActive({ textAlign: "justify" })
              ? "text-white bg-black"
              : ""
          )}
        >
          <AlignJustify className="w-4 h-4" />
        </button>
        <LinkDialog editor={editor} />
        <ImageUploadButton editor={editor} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

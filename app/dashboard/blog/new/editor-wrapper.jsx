import { Input } from "@/components/ui/input";
import Tags from "./tags";
import { Button } from "@/components/ui/button";
import Editor from "./editor";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Post title must be atleast 3 characters",
  }),
  featuredImage: z.string().min(1, {
    message: "choose an image please",
  }),
  description: z.string().min(15, {
    message: "Add a description before you publish",
  }),
  author: z.string().min(3, { message: "Add author" }),
  slug: z.string().min(3, {
    message: "Add slug please",
  }),
  content: z.string().min(30, { message: "Add post body" }),
  tags: z
    .array(z.string())
    .min(1, { message: "Add at least one tag" })
    .max(5, { message: "You can add up to 5 tags" })
    .refine((tags) => tags.every((tag) => tag.trim().length > 0), {
      message: "Tags cannot be empty strings",
    }),
});

const EditorWrapper = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-2 py-8 lg:px-0 flex justify-between flex-col lg:flex-row gap-6">
        <div className="bg-white p-4 md:p-6 w-full lg:w-8/12 rounded-lg shadow-md border">
          <div className="mb-6 space-y-1">
            <h1 className="text-xl font-semibold">Create New Post</h1>
          </div>
          <div className="mb-4 space-y-1">
            <label htmlFor="title" className="text-sm font-semibold">
              Blog Title
            </label>
            <Input id="title" placeholder="Enter your blog title" />
          </div>
          <div className="mb-4 space-y-1">
            <label htmlFor="description" className="text-sm font-semibold">
              Description
            </label>
            <Input
              id="description"
              placeholder="Brief description of your post"
            />
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-1">Content</h3>
            <Editor />
          </div>
        </div>

        <div className="w-full lg:w-4/12">
          <div className="bg-white p-6 mb-5 rounded-lg shadow-md border">
            <h3 className="font-semibold mb-2">Slug</h3>
            <Input id="slug" placeholder="your-post-slug" />
          </div>
          <div className="bg-white p-6 mb-5 rounded-lg shadow-md border">
            <h3 className="font-semibold mb-2">Featured Image</h3>
            <Input id="featuredImage" type="file" accept="image/*" />
          </div>

          <div className="bg-white p-6 mb-5 rounded-lg shadow-md border">
            <h3 className="font-semibold mb-2">Author</h3>
            <Input id="author" placeholder="Your name" />
          </div>
          <Tags />
          <div className="mt-4">
            <Button className="w-full font-bold">Publish Post</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorWrapper;

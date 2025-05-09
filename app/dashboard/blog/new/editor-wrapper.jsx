"use client";
import { Input } from "@/components/ui/input";
import Tags from "./tags";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, useEffect } from "react";
import FeaturedImage from "./featured-image";
import {
  Form,
  FormField,
  FormMessage,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { addPost } from "@/app/actions/blog.action";
import Editor from "@/components/editor";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Post title must be at least 3 characters",
  }),
  featuredImage: z.string().min(1, {
    message: "Choose an image please",
  }),
  description: z.string().min(3, {
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

const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: 'Type "/" for commands or start writing...',
        },
      ],
    },
  ],
};

const EditorWrapper = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, startTransition] = useTransition();
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      featuredImage: "",
      author: "",
      tags: [],
      slug: "",
      content: "",
    },
  });

  useEffect(() => {
    form.setValue("tags", tags);
  }, [tags]);

  useEffect(() => {
    form.setValue("content", content);
  }, [content]);

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };

  const onSubmit = (values) => {
    const fields = { ...values, content: content };
    startTransition(() => {
      addPost(fields).then((data) => {
        if (data?.success) {
          router.push("/dashboard/blog");
        }
      });
    });
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .trim(); // Trim leading/trailing spaces or hyphens
  };

  return (
    <div className="mx-auto max-w-screen-xl px-2 py-8 ">
      <Form {...form}>
        <form
          className="flex justify-between flex-col lg:flex-row gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="bg-white p-4 md:p-6 w-full lg:w-8/12 rounded-lg shadow-md border">
            <div className="mb-6 space-y-1">
              <h1 className="text-xl font-semibold">Create New Post</h1>
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Blog Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        field.onChange(e);
                        const slug = generateSlug(e.target.value);
                        form.setValue("slug", slug);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Description</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Brief description of your post"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mb-4 mt-2">
              <h3 className="font-semibold text-sm mb-1">Content</h3>
              <Editor initialValue={defaultValue} onChange={setContent} />
            </div>
          </div>

          <div className="w-full lg:w-4/12">
            <div className="bg-white p-6 mb-5 rounded-lg shadow-md border">
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Slug</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="your-post-slug"
                        readOnly
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="bg-white p-6 mb-5 rounded-lg space-y-2 shadow-md border">
              <FormLabel className="font-semibold mb-2">
                Featured Image
              </FormLabel>
              <FormField
                control={form.control}
                name="featuredImage"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FeaturedImage
                        value={field.value ? [field.value] : []}
                        disabled={uploading}
                        onChange={(featuredImage) =>
                          field.onChange(featuredImage)
                        }
                        onRemove={() => field.onChange("")}
                        setUploading={setUploading}
                        uploading={uploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-white p-6 mb-5 rounded-lg shadow-md border">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Author</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="your name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Tags onTagsChange={handleTagsChange} />
            <div className="mt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full font-bold"
              >
                Publish Post
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditorWrapper;

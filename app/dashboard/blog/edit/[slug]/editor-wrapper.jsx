"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition, useEffect } from "react";
import {
  Form,
  FormField,
  FormMessage,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { editPost } from "@/app/actions/blog.action";
import FeaturedImage from "../../new/featured-image";
import Tags from "../../new/tags";
import Editor from "@/components/editor";
const formSchema = z.object({
  title: z.string().min(3, {
    message: "Post title must be atleast 3 characters",
  }),
  featuredImage: z.string().min(1, {
    message: "choose an image please",
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

const EditorWrapper = ({ initialData }) => {
  const [uploading, setUploading] = useState(false);
  const [content, setContent] = useState(initialData.post.content);

  const [loading, startTransition] = useTransition();

  const [tags, setTags] = useState(initialData.post.tags);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData.post.title,
      description: initialData.post.description,
      featuredImage: initialData.post.featuredImage,
      author: initialData.post.author,
      tags: initialData.post.tags,
      content: initialData.post.content,
      slug: initialData.post.slug,
    },
  });

  useEffect(() => {
    form.setValue("content", content);
  }, [content]);

  useEffect(() => {
    form.setValue("tags", tags);
  }, [tags]);

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };

  const onSubmit = (values) => {
    const fields = { ...values, content: content };
    startTransition(() => {
      editPost(initialData.post._id, fields).then((data) => {
        if (data?.success) {
          router.push("/dashboard/blog");
        }
      });
    });
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-2 py-8 lg:px-4 ">
        <Form {...form}>
          <form
            className="flex justify-between flex-col lg:flex-row gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="bg-white p-4 md:p-6 w-full lg:w-8/12 rounded-lg shadow-md border">
              <div className="mb-6 space-y-1">
                <h1 className="text-xl font-semibold">Edit Post</h1>
              </div>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Blog Title</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="" />
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
                <Editor
                  initialValue={initialData.post.content}
                  onChange={setContent}
                />
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
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="bg-white p-6 space-y-2 mb-5 rounded-lg shadow-md border">
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
              <Tags
                onTagsChange={handleTagsChange}
                initialTags={initialData.post.tags}
              />
              <div className="mt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full font-bold"
                >
                  Update Post
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default EditorWrapper;

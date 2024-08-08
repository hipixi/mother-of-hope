import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { getPosts } from "@/app/actions/blog.action";
import { Plus } from "lucide-react";
import { getUser } from "@/app/actions/get-user";
import { redirect } from "next/navigation";
import PostActions from "./post-actions";

export const metadata = {
  title: "Posts | Dashboard",
};

export default async function BlogDashboard() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  const posts = await getPosts();
  return (
    <main>
      <div className="py-2 max-w-screen-xl mx-auto">
        <div className="bg-background  px-4 lg:px-0 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Posts</h1>
          <Button
            size="sm"
            variant="outline"
            className="text-xs font-semibold ml-auto "
          >
            <Link
              href="/dashboard/blog/new"
              className="flex items-center gap-1"
            >
              <Plus /> New Post
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex mb-12 w-full">
        <div className="flex flex-1 flex-col">
          <main className="flex-1 py-2 px-4 lg:px-0">
            <div className="grid gap-6">
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Author
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Published
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((post) => (
                      <TableRow key={post._id}>
                        <TableCell className="font-medium text-xs md:text-sm lg:tetx-base">
                          <Link href={`/blog/${post.slug}`} prefetch={false}>
                            {post.title}
                          </Link>
                        </TableCell>
                        <TableCell className="text-xs md:text-sm lg:tetx-base hidden md:table-cell">
                          {post.author}
                        </TableCell>
                        <TableCell className="text-xs md:text-sm lg:tetx-base hidden md:table-cell">
                          {new Intl.DateTimeFormat("en-UK", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }).format(new Date(post.updatedAt))}
                        </TableCell>
                        <TableCell>
                          <PostActions id={post._id} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}

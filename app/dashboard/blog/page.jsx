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
import Header from "@/components/header";
import { Plus } from "lucide-react";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat";
import { getUser } from "@/app/actions/get-user";
import { redirect } from "next/navigation";
import PostActions from "./post-actions";

export const metadat = {
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
      <Header />
      <div className="py-2 max-w-screen-xl mx-auto">
        <div className="bg-background  px-4 py-4 flex items-center justify-between">
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
          <main className="flex-1 p-2">
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
      <section className="bg-muted max-w-screen-xl mx-auto w-full border-t px-4 py-4 flex items-center justify-between">
        <div className="text-muted-foreground">
          Total posts: <span className="font-medium">{posts.length}</span>
        </div>
      </section>
      <Footer />
      <ChatWidget />
    </main>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

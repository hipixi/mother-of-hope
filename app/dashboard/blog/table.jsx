import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import PostActions from "./post-actions";
import Link from "next/link";
import { getPosts } from "@/app/actions/blog.action";

const PostTable = async () => {
  const posts = await getPosts();

  return (
    <>
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
    </>
  );
};

export default PostTable;

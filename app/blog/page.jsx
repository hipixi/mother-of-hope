import Header from "@/components/header";
import { getPosts } from "../actions/blog.action";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Blog | Mother of hope foundation Uganda",
};
const Blog = async () => {
  const posts = await getPosts();
  return (
    <main className="bg-slate-100">
      <Header />

      <section className="mx-auto px-2 max-w-screen-xl my-6">
        <div className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post._id}
              className="bg-white shadow rounded"
            >
              <img
                src={post.featuredImage}
                className="h-[210px] object-cover w-full rounded-t md:h-[260px]"
              />

              <h1 className="font-semibold  py-3 text-lg px-2 leading-tight">
                {post.title}
              </h1>
              <p className="text-xs py-2 px-2 text-muted-foreground">
                {new Intl.DateTimeFormat("en-UK", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(post.updatedAt))}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Blog;

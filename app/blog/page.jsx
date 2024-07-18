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
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Blog | Mother of hope foundation Uganda",
};
const Blog = async () => {
  const posts = await getPosts();
  return (
    <main className="bg-gray-100">
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
            <Link href={`/blog/${post.slug}`} key={post._id}>
              <Card>
                <CardContent className="p-0">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 lg:h-60 object-cover rounded-t-lg"
                  />
                  <div>
                    <h3 className="py-2 px-4 text-gray-950 text-lg font-semibold mb-2">
                      {post.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
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

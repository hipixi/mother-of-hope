import { getPosts } from "../actions/blog.action";
import Link from "next/link";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPostsSkeleton, FooterSkeleton, HeaderSkeleton } from "./skeleton";

const Header = dynamic(() => import("@/components/header"), {
  loading: () => <HeaderSkeleton />,
});
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <FooterSkeleton />,
});

export const metadata = {
  title: "Blog | Mother of hope foundation Uganda",
  description: "Latest updates on projects at mother of hope foundation uganda",
  openGraph: {
    title: `Blog | Mother of hope foundation Uganda`,
    description: `Latest updates on projects at mother of hope foundation uganda`,
    images: [
      {
        url: `https://i.imgur.com/TqgUboL.jpeg`,
        width: 800,
        height: 600,
        alt: ``,
      },
    ],
  },
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <main className="">
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>

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
        <Suspense fallback={<BlogPostsSkeleton />}>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post._id}>
                <Card className="rounded-none border-0 shadow-none">
                  <CardContent className="p-0">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 lg:h-60 object-cover rounded-t-lg"
                    />
                    <div className="px-1 py-4 space-y-2">
                      <h3 className="text-gray-950 text-lg font-semibold">
                        {post.title}
                      </h3>
                      <div className="bg-muted w-fit rounded-2xl px-2 py-1 text-xs font-medium flex items-center justify-center md:text-sm">
                        {post.tags[0]}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Suspense>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;

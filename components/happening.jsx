import { getLatestPosts } from "@/app/actions/blog.action";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Happening = async () => {
  const posts = await getLatestPosts();
  return (
    <section className="bg-white max-w-screen-xl mx-auto px-4 lg:px-0 my-14 md:my-16 lg:my-28">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold uppercase">Happening now</h1>
          <Link
            href="/"
            className="border-b-2 text-gray-800 border-green-600 font-bold w-fit"
          >
            Sign up for Emails
          </Link>
        </div>

        {posts?.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post._id}
            className="flex flex-col gap-4 border-r-0 lg:border-r last-of-type:border-r-0 py-4 lg:border-b-0 lg:py-0 border-b last-of-type:border-b-0"
          >
            <h2 className="hover:text-green-600 font-semibold leading-relaxed text-xl ">
              {post.title}
            </h2>

            <div className="bg-yellow-600 h-12 w-12 rounded-full text-white flex font-bold justify-center items-center">
              <ArrowRight className="w-6 h-6 stroke-[3px]" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Happening;

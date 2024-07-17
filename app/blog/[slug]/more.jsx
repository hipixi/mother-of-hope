import { getPosts } from "@/app/actions/blog.action";
import Link from "next/link";

const More = async ({ id }) => {
  const posts = await getPosts();
  //   const posts = allposts.filter((post) => post._id !== id);

  //   console.log(posts);

  return (
    <div className="p-4 border rounded-lg  ">
      <div className="flex justify-between">
        <h3 className="font-medium text-sm text-blue-700">{`More Stories`}</h3>
      </div>

      <div className="mt-3">
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li
              key={post._id}
              className="border my-4 mx-2 rounded-lg px-3 lg:py-2 py-1 "
            >
              <div className=" py-1 ">
                <Link href={`/blog/${post.slug}`}>
                  <h1 className="  my-1 capitalize  px-1 text-lg font-medium mt-6 lg:mt-2">
                    {post.title}
                  </h1>
                </Link>
                <div className="flex my-1 px-1 py-1">
                  <p className="text-sm text-gray-600 lg:text-sm">
                    {new Intl.DateTimeFormat("en-UK", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }).format(new Date(post.updatedAt))}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default More;

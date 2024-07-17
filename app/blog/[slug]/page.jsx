import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { getSinglePost } from "@/app/actions/blog.action";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat";
import More from "./more";

export default async function PostPage({ params }) {
  const { post } = await getSinglePost(params.slug);

  return (
    <>
      <main>
        <Header />
        <section className="px-2 mx-auto max-w-screen-xl pb-8">
          <div className="lg:hidden w-full">
            <h1 className="text-3xl capitalize font-semibold my-3 ">
              {post.title}
            </h1>
            <p className="text-lg border rounded-lg p-3 font-normal ">
              {post.description}
            </p>

            <div className="my-3 border-b-2 w-[230px]"></div>
            <div className="ml-1">
              <div className="flex items-center">
                <p className="text-xs lg:text-xl font-bold  text-blue-600">
                  BY: {post.author.toUpperCase()}
                </p>
                {/* <Link href={`/category/${post?.category}`}>
                  <p className="text-xs lg:text-xl font-bold ml-4  text-blue-600">
                    {post?.category.toUpperCase()}
                  </p>
                </Link> */}
              </div>
              <p className="text-sm">
                {new Intl.DateTimeFormat("en-UK", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }).format(new Date(post.updatedAt))}
              </p>

              <div className="flex gap-4 my-2">
                <a
                  href={`https://wa.me/?text=$`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-6 h-6 text-green-500 font-bold" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?url`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-6 h-6 text-blue-500 font-bold" />
                </a>
                <a
                  href={`https://twitter.com/share?url=`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-6 h-6 text-black font-bold" />
                </a>
              </div>
            </div>

            <div className="my-3 border-b-2 w-[230px]"></div>
          </div>
          <h1 className=" text-4xl font-semibold my-1 mt-8 hidden lg:block w-[90%]">
            {post.title}
          </h1>
          <div className="mt-2 lg:mt-4 rounded-l-lg flex flex-col-reverse lg:flex-row   ">
            <div className="w-full lg:w-[50%] relative aspect-[3/2]">
              <img
                className="w-full h-[250px] md:h-[400px] object-cover"
                src={post.featuredImage}
              />
            </div>

            <div className="lg:flex flex-col justify-between hidden lg:w-[50%]">
              <p className="text-lg rounded-lg  p-3 border lg:text-xl ml-5">
                {post.description}
              </p>
              <div className="ml-5">
                <div className="flex items-center">
                  <p className="text-base font-bold  text-blue-600">
                    BY: {post.author.toUpperCase()}
                  </p>
                  {/* <Link href={`/category/${post?.category}`}>
                    <p className="lg:text-base font-bold ml-4  text-blue-600">
                      {post?.category.toUpperCase()}
                    </p>
                  </Link> */}
                </div>
                <p className="">
                  {new Intl.DateTimeFormat("en-UK", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.updatedAt))}
                </p>
                <div className="flex gap-4 my-2">
                  <a
                    href={`https://wa.me/?text=`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-7 h-7 text-green-500 font-bold" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="w-7 h-7 text-blue-500 font-bold" />
                  </a>
                  <a
                    href={`https://twitter.com/share?url=`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="w-7 h-7 text-black font-bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row w-full">
            <div className="w-full lg:w-[50%]">
              <div className="w-full mb-8 flex">
                <div
                  className="prose  prose-table:w-[100%] prose-table:text-base prose-h2:font-bold prose-p:text-lg lg:prose-lg lg:prose-p:text-xl prose-h2:text-2xl mt-7 prose-a:decoration-transparent prose-a:border-b-4 prose-a:border-b-indigo-600 prose-ul:font-semibold prose-blockquote:font-normal prose-blockquote:not-italic"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </div>

              <div className="flex items-center text-sm gap-4 my-3">
                {post.tags.map((tag) => (
                  <div key={tag} className="bg-yellow-400 px-3 py-1 rounded">
                    #{tag}
                  </div>
                ))}
              </div>
              {/* <div>
                <Separator />
                <h1 className="text-xl font-semibold mt-3">Comments</h1>
                <NewComment
                  //@ts-ignore
                  articleId={post?.id}
                />
              </div> */}
            </div>

            <div className="h-full w-full lg:max-h-full lg:w-[380px] mt-8  text-gray-900 rounded-lg lg:ml-8 mb-10 md:w-[400px]">
              <More id={post._id} />
            </div>
          </div>
        </section>
        <Footer />
        <ChatWidget />
      </main>
    </>
  );
}

export async function generateMetadata({ params }) {
  const { post } = await getSinglePost(params.slug);
  return {
    title: `${post.title} | Mother of hope foundation uganda`,
    description: `${post.description}`,
    openGraph: {
      title: `${post.title} `,
      description: `${post.description}`,
      images: [
        {
          url: `${post.featuredImage}`,
          width: 800,
          height: 600,
          alt: `${post.title}`,
        },
      ],
    },
  };
}

import Header from "@/components/header";
import { getPosts } from "../actions/blog.action";

const Blog = async () => {
  const posts = await getPosts();
  return (
    <main>
      <Header />
    </main>
  );
};

export default Blog;

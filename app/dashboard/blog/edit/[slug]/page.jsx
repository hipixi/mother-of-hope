import Header from "@/components/header";
import EditorWrapper from "./editor-wrapper";
import { redirect } from "next/navigation";
import { getUser } from "@/app/actions/get-user";
import { getPostBySlug } from "@/app/actions/blog.action";

const EditPost = async ({ params }) => {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }

  const post = await getPostBySlug(params.slug);

  return (
    <main className="bg-muted min-h-screen">
      <Header />
      <EditorWrapper initialData={post} />
    </main>
  );
};

export default EditPost;

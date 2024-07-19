import Header from "@/components/header";
import EditorWrapper from "./editor-wrapper";
import { redirect } from "next/navigation";
import { getUser } from "@/app/actions/get-user";

export const metadata = {
  title: "New Post | mother of hope foundation uganda",
};
const NewPost = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="bg-muted min-h-screen">
      <EditorWrapper />
    </main>
  );
};

export default NewPost;

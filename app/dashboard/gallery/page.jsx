import { getUser } from "@/app/actions/get-user";
import { redirect } from "next/navigation";
import GalleryWrapper from "./gallery-wrapper";
import Header from "@/components/header";
import ChatWidget from "@/components/chat";
import Footer from "@/components/footer";

export const metadata = {
  title: "Gallery | Dashboard",
};
const Gallery = async () => {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <div>
      <Header />
      <GalleryWrapper />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Gallery;

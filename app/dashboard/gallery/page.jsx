import { getUser } from "@/app/actions/get-user";
import { redirect } from "next/navigation";
import GalleryWrapper from "./gallery-wrapper";
import Header from "@/components/header";

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
    </div>
  );
};

export default Gallery;

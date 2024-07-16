import Header from "@/components/header";
import { getImages } from "../actions/image.action";
import GalleryWrapper from "./gallery-wrapper";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat";

export const metadata = {
  title: "Gallery | Mother of hope foundation uganda",
};

const Gallery = async () => {
  const images = await getImages();
  return (
    <main>
      <Header />
      <GalleryWrapper images={images} />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Gallery;

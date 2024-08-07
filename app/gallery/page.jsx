import Header from "@/components/header";
import { getImages } from "../actions/image.action";
import GalleryWrapper from "./gallery-wrapper";
import Footer from "@/components/footer";

export const metadata = {
  title: "Gallery | Mother of hope foundation uganda",
  description:
    "Explore the gallery of Mother of Hope Foundation Uganda. See the impactful work we are doing to support the community.",
};

const Gallery = async () => {
  const images = await getImages();
  return (
    <main>
      <Header />

      <GalleryWrapper images={images.images} />
      <Footer />
    </main>
  );
};

export default Gallery;

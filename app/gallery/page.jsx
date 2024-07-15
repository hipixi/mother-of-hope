import Header from "@/components/header";
import { getImages } from "../actions/image.action";
import GalleryWrapper from "./gallery-wrapper";

const Gallery = async () => {
  const images = await getImages();
  return (
    <main>
      <Header />
      <GalleryWrapper images={images} />
    </main>
  );
};

export default Gallery;

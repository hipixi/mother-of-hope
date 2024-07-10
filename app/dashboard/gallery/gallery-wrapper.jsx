import { getImages } from "@/app/actions/image.action";
import SingleImage from "./single";
import AddImage from "./add-image";

const GalleryWrapper = async () => {
  const images = await getImages();

  return (
    <>
      <div className=" py-2 max-w-screen-xl mx-auto">
        <div className="flex px-2 py-3 items-center justify-between border-b">
          <h1 className="text-sm font-semibold text-green-800">Gallery</h1>
          <AddImage />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-2 gap-4 mt-3">
          {images?.map((image) => (
            <SingleImage key={image} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryWrapper;

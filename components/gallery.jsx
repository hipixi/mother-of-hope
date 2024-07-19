import { getImages } from "@/app/actions/image.action";

const Gallery = async () => {
  const images = await getImages();

  return (
    <section className="w-full  py-12 md:py-24 lg:py-32">
      <div className="max-w-screen-xl px-3 md:px-6 lg:px-0 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-gray-950 text-center md:text-left font-bold">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-2 gap-4 mt-3">
          {images?.map((image) => (
            <img
              key={image.url}
              alt=""
              className="transform   transition will-change-auto group-hover:brightness-110 w-full h-[250px] rounded-lg shadow-md md:h-[300px] object-cover"
              style={{ transform: "translate3d(0, 0, 0)" }}
              src={image.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

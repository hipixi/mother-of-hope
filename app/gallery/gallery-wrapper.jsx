"use client";
import { useState, useEffect } from "react";
import Dialog from "./dialog";
import Carousel from "./carousel";

const GalleryWrapper = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const openDialog = (index) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (isDialogOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDialogOpen]);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <section className="w-full my-4">
        <div className="max-w-screen-xl px-3 md:px-6 lg:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 shadow-lg gap-6">
            {images.map((image, index) => (
              <div
                key={image._id}
                onClick={() => openDialog(index)}
                className="border rounded-lg bg-gray-50"
              >
                {/* {!loadedImages[image._id] && <Loader />} */}
                <img
                  src={image.url}
                  className={`h-[200px] md:h-[300px] shadow-md w-full object-cover rounded-lg cursor-pointer z-20`}
                  alt=""
                  onLoad={() => handleImageLoad(image._id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <Carousel
          images={images}
          initialIndex={selectedImageIndex}
          onClose={closeDialog}
        />
      </Dialog>
    </>
  );
};

export default GalleryWrapper;

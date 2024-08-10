"use client";
import { useState, useEffect } from "react";
import { getImages } from "@/app/actions/image.action";
import SingleImage from "./single";
import AddImage from "./add-image";

const GalleryWrapper = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const imagesPerPage = 6;

  useEffect(() => {
    const fetchImages = async () => {
      const data = await getImages(currentPage, imagesPerPage);
      setImages(data.images);
      setTotalPages(Math.ceil(data.total / imagesPerPage));
    };
    fetchImages();
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="py-2 flex flex-col min-h-screen max-w-screen-xl mx-auto">
        <div className="flex px-4 py-3 items-center justify-between border-b">
          <h1 className="text-sm font-semibold text-green-800">Gallery</h1>
          <AddImage />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-4 gap-2 lg:gap-4 mt-3">
          {images.map((image) => (
            <SingleImage key={image._id} image={image} />
          ))}
        </div>
        <div className="flex justify-center mt-auto">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 mx-1 border rounded bg-white text-green-800"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 mx-1 border rounded ${
                currentPage === index + 1
                  ? "bg-primary text-black"
                  : "bg-white text-green-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 mx-1 border rounded bg-white text-green-800"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default GalleryWrapper;

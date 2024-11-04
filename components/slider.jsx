"use client";
import { getImagesSlider } from "@/app/actions/image.action";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [images?.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const { images } = await getImagesSlider();

      setImages(images);
    };

    fetchImages();
  }, []);

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images?.map((image, index) => (
          <div
            key={index}
            className="w-full h-[400px] md:h-[600px] lg:h-[800px] flex-shrink-0"
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full object-top"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images?.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

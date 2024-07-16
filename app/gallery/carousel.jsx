import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Carousel = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  h-full flex items-center justify-center">
      <button
        onClick={goToPrevious}
        className="absolute left-4 bg-gray-950 rounded-full p-2 text-white text-4xl"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <img
        src={images[currentIndex].url}
        alt={`Full screen image ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain"
      />
      <button
        onClick={goToNext}
        className="absolute right-4 bg-gray-950 p-2 rounded-full text-white text-4xl"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Carousel;

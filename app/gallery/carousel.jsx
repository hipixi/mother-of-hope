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
    <div className="w-full max-w-7xl mx-auto  h-full flex items-center justify-center">
      <button
        onClick={goToPrevious}
        className="absolute left-4 text-white text-4xl"
      >
        &#8249;
      </button>
      <img
        src={images[currentIndex].url}
        alt={`Full screen image ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain"
      />
      <button
        onClick={goToNext}
        className="absolute right-4 text-white text-4xl"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;

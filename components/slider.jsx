"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { getImagesSlider } from "@/app/actions/image.action";
import { useEffect, useState } from "react";

const Slider = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const { images } = await getImagesSlider();

      setImages(images);
    };

    fetchImages();
  }, []);

  console.log(images);
  return (
    <div className="w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {images?.map((image, index) => (
          <SwiperSlide
            className="relative w-full aspect-[4/3] md:aspect-[2/1] h-[600px] md:h-[600px]"
            key={image.url}
          >
            <Image
              src={image.url}
              alt={`Slide ${index + 1}`}
              fill
              objectFit="cover"
              priority
              quality={75}
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

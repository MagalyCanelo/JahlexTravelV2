"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useImageStore } from "../store/images";

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const imageStore = useImageStore((state) => state.images);
  const images = imageStore.map((image) => ({
    src: image.src,
    title: image.title,
    location: image.location,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const { src, title, location } = images[current];

  return (
    <div className="relative w-full max-w-[500px] h-[450px] lg:max-w-[660px] lg:h-[560px] xl:max-w-[800px] xl:h-[700px] mx-auto overflow-hidden rounded-[25px] shadow-lg">
      <Image
        priority
        src={src}
        alt={title}
        width={600}
        height={600}
        className="w-full h-full object-cover transition-opacity duration-3000 ease-in-out opacity-100"
      />

      {/* Info box */}
      <div className="absolute bottom-3 left-3 bg-white/80 text-black pl-2 pr-4 py-1 rounded-[20px] max-w-[80%] flex items-center gap-2">
        <FaMapMarkerAlt className="text-[#ff2d2e] text-2xl" />
        <div className="text-justify">
          <span className="text-sm font-semibold">{title}</span>
          <p className="text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

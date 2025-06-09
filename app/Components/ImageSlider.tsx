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
    <div className="absolute left-0 right-0 w-full h-full mx-auto overflow-hidden bg-black">
      <div
        key={typeof src === "string" ? src : src.src}
        className="w-full h-full transition-transform duration-[9000ms]"
        style={{
          transform: "scale(1.08)",
          animation: "scaleUp 9s linear infinite",
        }}
      >
        <style>
          {`
          @keyframes scaleUp {
        from { transform: scale(1); }
        to { transform: scale(1.08); }
          }
          `}
        </style>
        <Image
          priority
          src={src}
          alt={title}
          width={1080}
          height={1080}
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-82 -z-10"
        />
      </div>

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

"use client";
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const images = [
  {
    src: "/islas_ballestas.jpg",
    title: "Islas Ballestas",
    location: "Paracas - Perú",
  },
  {
    src: "/roja.jpg",
    title: "Playa Roja",
    location: "Paracas - Perú",
  },
  {
    src: "/huacachina.jpg",
    title: "Huacachina",
    location: "Ica - Perú",
  },
  {
    src: "/cusco.jpg",
    title: "Cusco",
    location: "Cusco - Perú",
  },
];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { src, title, location } = images[current];

  return (
    <div className="relative w-full max-w-[500px] h-[450px] lg:max-w-[660px] lg:h-[560px] mx-auto overflow-hidden rounded-[25px] shadow-lg">
      <img
        src={src}
        alt={title}
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

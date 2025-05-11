"use client";
import React, { useState } from "react";
import Image from "next/image";
import rnp from "@/public/rnp.jpg";
import img1 from "@/public/huacachina.jpg";
import img2 from "@/public/islas_ballestas.jpg";
import img3 from "@/public/rnp.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

const images = [rnp, img1, img2, img3];

const TourImage = () => {
  const [selectedImage, setSelectedImage] = useState(rnp);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <Image
          src={selectedImage}
          alt="Imagen del tour"
          className="w-full h-[544px] object-cover"
          priority
        />
        <div className="absolute bottom-3 left-3 bg-white/80 text-black pl-2 pr-4 py-1 rounded-[20px] max-w-[80%] flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#ff2d2e] text-2xl" />
          <div className="text-justify">
            <span className="text-sm font-semibold">
              Reserva Nacional de Paracas
            </span>
            <p className="text-xs">Paracas - Perú</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 rounded overflow-hidden border-2 ${
              selectedImage.src === img.src
                ? "border-[#87AC17]"
                : "border-gray-300"
            }`}
          >
            <Image
              src={img}
              alt={`Miniatura ${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TourImage;

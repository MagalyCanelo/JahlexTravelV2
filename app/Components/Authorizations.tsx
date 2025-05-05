"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ib from "@/public/islas_ballestas.jpg";
import rnp from "@/public/roja.jpg";
import huacachina from "@/public/huacachina.jpg";
import cusco from "@/public/cusco.jpg";

// Logos
const logos = [
  { src: ib.src, alt: "Municipalidad de Paracas" },
  { src: rnp.src, alt: "SUNAT" },
  { src: huacachina.src, alt: "MINCETUR" },
  { src: cusco.src, alt: "CULTURA" },
];

const Authorizations: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  const moveTo = (index: number) => {
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <div className="bg-gray-50 flex flex-col gap-2 w-full items-center">
      {/* Contenedor con padding horizontal uniforme */}
      <div className="w-full px-6">
        {/* Etiqueta */}
        <div className="text-left">
          <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow my-4">
            <h2 className="text-md font-semibold">Autorizaciones</h2>
          </div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full">
          {logos.map((logo, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <div className="bg-white border rounded-2xl px-6 py-4 shadow-sm flex items-center justify-center h-30 w-full">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paginación */}
      <div className="flex space-x-2 mt-4 mb-6">
        {logos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => moveTo(idx)}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default Authorizations;

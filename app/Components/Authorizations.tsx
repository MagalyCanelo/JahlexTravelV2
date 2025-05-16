"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";

import cusco from "@/public/cusco.jpg";
import huacachina from "@/public/huacachina.jpg";
import ib from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";
import Image from "next/image";

// Logos
const logos = [
  { src: ib, alt: "Municipalidad de Paracas" },
  { src: rnp, alt: "SUNAT" },
  { src: huacachina, alt: "MINCETUR" },
  { src: cusco, alt: "CULTURA" },
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
    created(s) {
      setInterval(() => {
        s.next();
      }, 1500);
    },
  });

  return (
    <div className="bg-gray-50 flex flex-col gap-2 w-full items-center">
      {/* Contenedor con padding horizontal uniforme */}
      <div className="w-full px-6">
        {/* Etiqueta */}
        {/* Título */}
        <div className="text-left mb-4">
          <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow">
            <h2 className="text-md font-semibold">Autorizaciones</h2>
          </div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full">
          {logos.map((logo, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <div className="bg-white rounded-2xl px-6 py-4 shadow-sm flex items-center justify-center h-30 xl:h-35 w-full">
                <Image
                  quality={50}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authorizations;

import React from "react";
import ImageSlider from "./ImageSlider";

function HeroBanner() {
  return (
    <section className="hero bg-gray-50 px-12 text-center lg:flex lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-col text-left lg:pr-6">
        <h1 className="text-4xl font-bold mb-4 oliva">
          Reserva Nacional de Paracas
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Una plataforma donde puedes aprender, explorar y crecer.
        </p>
      </div>
      <div className="ml-auto">
        <ImageSlider />
      </div>
    </section>
  );
}

export default HeroBanner;

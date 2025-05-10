import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ImageSlider from "./ImageSlider";
import ActionButton from "./ActionButton";

function HeroBanner() {
  return (
    <section className="hero bg-gray-50 px-12 text-center lg:flex lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-col text-center lg:text-left lg:pr-6 lg:w-1/2">
        <h1 className="text-5xl xl:text-7xl font-bold mb-4 oliva-o font-fredoka leading-14 xl:leading-20">
          Perú Te Espera:
          <br /> ¡Únete a Nosotros!
        </h1>
        <p className="text-xl text-gray-600 lg:mb-6 xl:text-3xl">
          Embárcate en una aventura inolvidable y descubre los rincones de Perú.
        </p>
        <div className="flex flex-row justify-center lg:justify-start gap-4 lg:pr-20 my-6 font-semibold xl:text-2xl">
          {/* Botón "Ver Catalogo" */}
          <ActionButton title="Ver catálogo" tipo="primary" />

          {/* Botón "Ver video" con triángulo */}
          <button className="text-black font-semibold rounded-full flex items-center">
            {/* Círculo con el ícono de "play" */}
            <div className="rounded-full px-3 flex items-center justify-center">
              <BsFillPlayCircleFill
                size={45}
                className="oliva-c oliva-o-hover"
              />
            </div>
            {/* Texto "Ver Video" */}
            <span>Ver Video</span>
          </button>
        </div>
      </div>
      <div className="ml-auto">
        <ImageSlider />
      </div>
    </section>
  );
}

export default HeroBanner;

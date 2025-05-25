import { BsFillPlayCircleFill } from "react-icons/bs";
import ActionButton from "./ActionButton";
import ImageSlider from "./ImageSlider";

function HeroBanner() {
  return (
    <section className="hero h-screen bg-gray-50  text-center lg:flex lg:flex-row lg:items-center lg:justify-between">
      <ImageSlider />
      <div className="flex-col text-center lg:text-left lg:pr-6 lg:w-1/2 z-10 pl-8 mt-20">
        <h1 className="text-[45px] md:text-5xl xl:text-6xl font-bold mb-4 oliva-c drop-shadow-md font-fredoka leading-14 xl:leading-20">
          Perú Te Espera:
          <br /> ¡Únete a Nosotros!
        </h1>
        <p className="text-xl font-semibold text-stone-50 lg:mb-6 xl:text-3xl">
          Embárcate en una aventura inolvidable y descubre los rincones de Perú.
        </p>
        <div className="flex flex-row justify-center lg:justify-start gap-4 lg:pr-20 my-6 font-semibold xl:text-2xl">
          {/* Botón "Ver Catalogo" */}
          <ActionButton title="Ver catálogo" tipo="primary" />

          {/* Botón "Ver video" con triángulo */}
          <button className="text-stone-50 font-semibold rounded-full flex items-center">
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
    </section>
  );
}

export default HeroBanner;

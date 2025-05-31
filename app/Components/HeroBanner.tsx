import { BsFillPlayCircleFill } from "react-icons/bs";
import ActionButton from "./ActionButton";
import ImageSlider from "./ImageSlider";
import Header from "./Header";

function HeroBanner() {
  return (
    <section className="hero h-screen relative bg-gray-50  text-center lg:flex lg:flex-row lg:items-center lg:justify-between">
      <Header className="text-white "/>
      <ImageSlider />
      <div className="flex-col text-center absolute mx-auto left-0 right-0 bottom-0 top-2/6 p-8 lg:top-0 lg:mx-0 lg:relative lg:text-left lg:pr-6 lg:w-1/2 lg:z-10 lg:pl-8 lg:mt-20">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 oliva-c drop-shadow-md font-fredoka leading-14 xl:leading-20">
          Perú Te Espera:
          <br /> ¡Únete a Nosotros!
        </h1>
        <p className="text-lg font-semibold text-stone-50 lg:mb-6 xl:text-3xl">
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

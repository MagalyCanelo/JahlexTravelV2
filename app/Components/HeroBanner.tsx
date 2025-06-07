import { BsFillPlayCircleFill } from "react-icons/bs";
import ActionButton from "./ActionButton";
import ImageSlider from "./ImageSlider";
import Header from "./Header";

function HeroBanner() {
  return (
    <section className="hero h-screen relative bg-stone-50 text-center lg:flex lg:flex-row lg:items-center lg:justify-between">
      <Header className="text-white " />
      <ImageSlider />
      <div
        className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                text-center p-8 w-full max-w-3xl"
      >
        <h1 className="text-[44px] md:text-[55px] xl:text-6xl font-bold mb-5 text-white drop-shadow-md hero-banner-title leading-14 xl:leading-20 tracking-wide">
          Perú Te Espera:
          <br /> ¡Únete a Nosotros!
        </h1>
        <p className="text-xl lg:text-[22px] font-semibold text-stone-50 mb-6 xl:text-3xl w-4/5 text-center mx-auto">
          Embárcate en una aventura inolvidable y descubre los rincones de Perú.
        </p>
        <div className="flex flex-row justify-center gap-4 my-6 font-semibold lg:text-xl xl:text-2xl">
          {/* Botón "Ver catálogo" */}
          <ActionButton title="Ver catálogo" tipo="primary" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;

"use client";

import ib from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";
import Image from "next/image";
import {
  LuCircleDollarSign,
  LuCompass,
  LuHeadset,
  LuShieldCheck,
} from "react-icons/lu";

export default function WhyChooseUs() {
  return (
    <section className="pt-4 pb-11 bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:pr-6 lg:pl-8 place-items-center">
      {/* Imágenes */}
      <div className="relative w-full max-w-xl h-[22rem] lg:h-[400px] xl:h-[440px] flex justify-center items-center mb-8 lg:pb-0 ">
        {/* Imagen delantera */}
        <div className="absolute left-0 top-0 z-10 transform rotate-[-3deg] transition-transform duration-300 hover:scale-105">
          <Image
            src={rnp}
            width={300}
            height={400}
            alt="Paisaje"
            className="w-60 lg:w-80 h-80 lg:h-96 xl:w-85 xl:h-100 object-cover rounded-xl border-4 border-white shadow-lg"
          />
        </div>

        {/* Imagen trasera */}
        <div className="absolute left-48 md:left-55 top-18 z-0 transform rotate-[2deg] transition-transform duration-300 hover:scale-105">
          <Image
            src={ib}
            width={300}
            height={400}
            alt="Paisaje"
            className="w-60 lg:w-80 h-80 lg:h-96 xl:w-85 xl:h-100 object-cover rounded-xl border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full max-w-2xl xl:max-w-3xl flex flex-col">
        <h2 className="text-[40px] xl:text-5xl font-semibold text-gray-800 mb-4 font-fredoka">
          ¿Por qué <span className="oliva-o">elegirnos</span>?
        </h2>

        <p className="text-gray-600 mb-8 xl:text-lg">
          Creamos experiencias auténticas, seguras y bien organizadas, con
          atención personalizada en cada momento.
        </p>

        <div className="space-y-5">
          {[
            {
              icon: (
                <LuCircleDollarSign className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />
              ),
              title: "Precio justo",
              text: "Transparencia total, con todos los detalles al momento de la compra.",
            },
            {
              icon: (
                <LuShieldCheck className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />
              ),
              title: "Autorizados oficialmente",
              text: "Contamos con permisos de operación y guías certificados.",
            },
            {
              icon: <LuCompass className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />,
              title: "Experiencias auténticas",
              text: "Vive momentos únicos que te conectan con la esencia de cada lugar.",
            },
            {
              icon: <LuHeadset className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />,
              title: "Atención personalizada",
              text: "Estamos contigo antes, durante y después del viaje.",
            },
          ].map(({ icon, title, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-5 py-5 px-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-full">
                {icon}
              </div>
              <div>
                <h4 className="xl:text-xl font-semibold text-gray-800">
                  {title}
                </h4>
                <p className="text-[13.8px] xl:text-lg text-gray-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

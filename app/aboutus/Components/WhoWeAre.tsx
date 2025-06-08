import React from "react";
import Image from "next/image";
import islas_ballestas from "@/public/islas_ballestas.jpg";
import Link from "next/link";
import ActionButton from "@/app/Components/ActionButton";

const QuiénesSomos = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-4 px-4 lg:px-6 xl:px-8 xl:pr-10 lg:pr-8 lg:pt-4">
      {/* Imagen a la izquierda */}
      <div className="flex justify-center items-center w-full">
        <div className="flex-shrink-0 w-[450px] h-[450px] lg:w-[550px] lg:h-[575px]">
          <Image
            src={islas_ballestas.src}
            alt="Logo de la empresa"
            className="w-full h-full object-cover rounded-xl"
            height={1080}
            width={1080}
          />
        </div>
      </div>

      {/* Información al costado de la imagen */}
      <div className="mt-6 lg:mt-0 lg:ml-5 max-w-full lg:max-w-[570px] bg-white shadow-sm rounded-xl p-6 pt-5">
        <h2 className="text-xl lg:text-lg font-bold text-gray-800 italic text-center">
          ¿Quiénes somos?
        </h2>
        <p className="oliva-o text-5xl font-bold hero-banner-title leading-14 tracking-wide text-center">
          Somos Jahlex Travel Adventure
        </p>
        <p className="mt-1 text-md text-gray-700 font-medium text-center">
          <span className="font-semibold">RUC:</span> 10470715788
        </p>
        <p className="mt-3 text-gray-700 text-base text-justify">
          Jahlex Travel Adventure es una agencia de viajes dedicada a ofrecer
          experiencias auténticas y memorables. Con años de experiencia,
          brindamos una amplia variedad de opciones turísticas adaptadas a todos
          los gustos, asegurando que cada viaje sea cómodo, seguro y lleno de
          aventuras.
        </p>

        <p className="mt-4 text-gray-700 text-base text-justify">
          Además, nos comprometemos con la sostenibilidad y el respeto por los
          destinos que visitamos, para que nuestros viajeros disfruten de una
          experiencia única y responsable.
        </p>

        <p className="mt-4 text-gray-700 text-base text-justify">
          Creemos que viajar es una forma de enriquecerse, y por eso trabajamos
          incansablemente para ofrecer lo mejor a nuestros clientes.
        </p>

        <div className="font-semibold text-lg pt-4 text-center">
          <Link href="/contacto">
            <ActionButton tipo="primary" title="Contáctenos" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuiénesSomos;

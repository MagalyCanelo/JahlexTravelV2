import React from "react";
import Image from "next/image";
import islas_ballestas from "@/public/islas_ballestas.jpg";
import Link from "next/link";
import ActionButton from "@/app/Components/ActionButton";

const QuiénesSomos = () => {
  return (
    <div className="flex justify-center items-start py-10 p-4 lg:px-6 xl:px-8 xl:pr-10 lg:pr-8 lg:pt-4">
      {/* Imagen a la izquierda */}
      <div className="flex-shrink-0 w-[550px] h-[550px]">
        <Image
          src={islas_ballestas.src}
          alt="Logo de la empresa"
          className="w-full h-full object-cover rounded-xl"
          height={1080}
          width={1080}
        />
      </div>

      {/* Información al costado de la imagen */}
      <div className="ml-10 max-w-[570px]">
        <h2 className="text-lg font-bold text-gray-800 italic">
          ¿Quiénes somos?
        </h2>
        <p className="oliva-o text-5xl font-bold hero-banner-title leading-14 tracking-wide">
          Somos Jahlex Travel Adventure
        </p>
        <p className="mt-1 text-md text-gray-700 font-medium">
          <span className="font-semibold">RUC:</span> 10470715788
        </p>
        <p className="mt-4 text-gray-700 text-[17px] text-justify">
          Jahlex Travel Adventure es una agencia de viajes dedicada a ofrecer
          experiencias auténticas y memorables. Con años de experiencia,
          brindamos una amplia variedad de opciones turísticas adaptadas a todos
          los gustos, asegurando que cada viaje sea cómodo, seguro y lleno de
          aventuras.
        </p>

        <p className="mt-4 text-gray-700 text-[17px] text-justify">
          Además, nos comprometemos con la sostenibilidad y el respeto por los
          destinos que visitamos, para que nuestros viajeros disfruten de una
          experiencia única y responsable.
        </p>

        <p className="mt-4 text-gray-700 text-[17px] text-justify">
          Creemos que viajar es una forma de enriquecerse, y por eso trabajamos
          incansablemente para ofrecer lo mejor a nuestros clientes.
        </p>

        <div className="font-semibold text-lg pt-4">
          <Link href="/contacto">
            <ActionButton tipo="primary" title="Contáctenos" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuiénesSomos;

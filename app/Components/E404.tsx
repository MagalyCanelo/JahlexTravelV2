"use client";

import React from "react";
import e404 from "@/public/404.png"; // Asegúrate de que la ruta sea correcta
import Image from "next/image";
import ActionButton from "@/app/Components/ActionButton";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-24 mt-8 p-4 lg:p-6 bg-stone-50">
      {/* Imagen de error */}
      <Image
        src={e404.src}
        alt="Logo de la empresa"
        className="lg:w-120 w-85 xl:w-130"
        height={1080}
        width={1080}
      />

      {/* Mensaje de error */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
        ¡Página errónea!
      </h1>
      <p className="text-md lg:text-lg text-center text-gray-700 mb-6">
        ¡Lo sentimos! ¡Esta página no está disponible!
      </p>

      {/* Botón para volver a la página principal */}
      <div className="font-semibold text-lg lg:text-xl">
        <ActionButton
          onClick={() => (window.location.href = "/")} // Redirige a la página principal
          tipo="primary"
          title="Volver a la página principal"
          className="lg:px-8"
        />
      </div>
    </div>
  );
};

export default ErrorPage;

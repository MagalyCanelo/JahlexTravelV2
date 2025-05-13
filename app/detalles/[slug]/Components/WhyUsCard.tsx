import React from "react";
import { FaStar, FaUserTie, FaCheckCircle, FaClock } from "react-icons/fa";

const WhyUsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm py-4 px-3 flex flex-col justify-between h-full">
      <>
        <h3 className="text-gray-700 font-semibold text-md xl:text-[17px] mb-3 text-center">
          ¿Por qué reservar con nosotros?
        </h3>

        {/* Experiencia */}
        <div className="flex items-center mb-5">
          <div className="w-11 h-12 xl:w-13 xl:h-14 mr-2 flex items-center justify-center">
            <FaStar className="text-gray-800 text-2xl xl:text-3xl oliva-o" />
          </div>
          <div className="w-8/10">
            <p className="font-semibold text-[15px] xl:text-[16px] text-gray-700">
              Experiencia
            </p>
            <p className="text-sm xl:text-[15px] text-gray-600 text-justify">
              Más de 10 años ofreciendo servicios de calidad.
            </p>
          </div>
        </div>

        {/* Profesionalismo */}
        <div className="flex items-center mb-5">
          <div className="w-11 h-12 xl:w-13 xl:h-14 mr-2 flex items-center justify-center">
            <FaUserTie className="text-gray-800 text-2xl xl:text-3xl oliva-o" />
          </div>
          <div className="w-8/10">
            <p className="font-semibold text-[15px] xl:text-[16px] text-gray-700">
              Profesionalismo
            </p>
            <p className="text-sm xl:text-[15px] text-gray-600 text-justify">
              Nuestro equipo está altamente capacitado y certificado.
            </p>
          </div>
        </div>

        {/* Fiabilidad */}
        <div className="flex items-center mb-4">
          <div className="w-11 h-12 xl:w-13 xl:h-14 mr-2 flex items-center justify-center">
            <FaClock className="text-gray-800 text-2xl xl:text-3xl oliva-o" />
          </div>
          <div className="w-8/10">
            <p className="font-semibold text-[15px]  xl:text-[16px] text-gray-700">
              Fiabilidad
            </p>
            <p className="text-sm xl:text-[15px] text-gray-600 text-justify">
              Garantizamos que se realice con puntualidad y eficiencia.
            </p>
          </div>
        </div>
      </>

      {/* Botón Conózcanos */}
      <button className="w-full bg-oliva-c text-white py-2 rounded-lg font-semibold bg-oliva-o-hover xl:text-[17px]">
        Conózcanos
      </button>
    </div>
  );
};

export default WhyUsCard;
